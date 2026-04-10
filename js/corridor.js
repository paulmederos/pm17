(function () {
  'use strict';

  // =============================================
  // Config
  // =============================================
  var GRID = 24;
  var CONSTRAINTS = [
    { key: 'sustainable', label: 'Sustainable' },
    { key: 'purpose', label: 'Purpose-aligned' },
    { key: 'family', label: 'Family-compatible' },
    { key: 'nonExtractive', label: 'Non-extractive' },
    { key: 'longHorizon', label: 'Long-horizon' }
  ];
  var PROTECTED_COUNT = 5;
  var MAX_VIS = 0.80;
  var HAZ_SHARE = 0.22;
  var PARTICLE_COUNT = 350;
  var TRAIL_LEN = 12;

  // =============================================
  // Seeded PRNG (mulberry32)
  // =============================================
  function prng(seed) {
    return function () {
      var t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // =============================================
  // Colors (Forest palette mapped)
  // =============================================
  function isDark() { return document.body.classList.contains('dark'); }

  function col(key) {
    var d = isDark();
    var map = {
      viable:      { r: 122, g: 139, b: 92 },
      hazard:      d ? { r: 70, g: 65, b: 58 }   : { r: 41, g: 39, b: 37 },
      'ruled-out': d ? { r: 100, g: 95, b: 82 }   : { r: 196, g: 185, b: 154 },
      unknown:     d ? { r: 35, g: 33, b: 30 }    : { r: 232, g: 229, b: 221 },
      bg:          d ? { r: 21, g: 21, b: 21 }    : { r: 255, g: 252, b: 243 }
    };
    return map[key];
  }

  function rgba(c, a) {
    return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + a + ')';
  }

  // =============================================
  // Terrain (shared between both renderers)
  // =============================================
  function buildTerrain() {
    var rand = prng(7);
    var total = GRID * GRID;
    var prot = new Set();
    while (prot.size < PROTECTED_COUNT) prot.add(Math.floor(rand() * total));

    var cells = [];
    for (var i = 0; i < total; i++) {
      var v = {};
      for (var j = 0; j < CONSTRAINTS.length; j++) v[CONSTRAINTS[j].key] = rand() < 0.45;
      cells.push({
        hazard: rand(),
        fog: rand(),
        violates: v,
        isProtected: prot.has(i),
        // 3D positions for point cloud
        x3d: rand() * 2 - 1,
        y3d: rand() * 2 - 1,
        z3d: rand() * 2 - 1
      });
    }
    return cells;
  }

  // =============================================
  // State
  // =============================================
  var experience = 0.2;
  var active = {
    sustainable: false, purpose: false, family: false,
    nonExtractive: false, longHorizon: false
  };
  var currentMode = 'flow';
  var ver = 0, lastVer = -1, cached = null;

  function bump() { ver++; }

  function compute(terrain) {
    if (lastVer === ver) return cached;
    lastVer = ver;

    var ceil = experience * MAX_VIS;
    var hf = 1 - HAZ_SHARE;
    var viable = 0, seen = 0;

    var states = terrain.map(function (c) {
      if (c.isProtected) { viable++; seen++; return 'viable'; }
      if (c.fog >= ceil) return 'unknown';
      seen++;
      if (c.hazard > hf) return 'hazard';
      for (var k = 0; k < CONSTRAINTS.length; k++) {
        if (active[CONSTRAINTS[k].key] && c.violates[CONSTRAINTS[k].key]) return 'ruled-out';
      }
      viable++;
      return 'viable';
    });

    cached = { viable: viable, seen: seen, total: terrain.length, states: states };
    return cached;
  }

  // =============================================
  // Stats
  // =============================================
  function updateStats(r) {
    var el = function (id) { return document.getElementById(id); };
    el('stat-viable').textContent = r.viable;
    el('stat-seen').textContent = Math.round(r.seen / r.total * 100) + '%';
    el('stat-principles').textContent =
      Object.keys(active).filter(function (k) { return active[k]; }).length +
      ' / ' + CONSTRAINTS.length;
  }

  // =============================================
  // Flow Renderer (Canvas 2D, particle trails)
  // =============================================
  function FlowRenderer(canvas, terrain) {
    var ctx = canvas.getContext('2d');
    var w, h, cw, ch;
    var particles = [];
    var aid = null;

    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      var dpr = window.devicePixelRatio || 1;
      w = rect.width;
      h = w; // keep square
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cw = w / GRID;
      ch = h / GRID;
    }

    function spawn() {
      var x = Math.random() * (w || 400);
      var y = Math.random() * (h || 400);
      return {
        trail: [{ x: x, y: y }],
        spd: 0.4 + Math.random() * 0.8,
        life: 0,
        max: 80 + Math.random() * 60
      };
    }

    function initParticles() {
      particles = [];
      for (var i = 0; i < PARTICLE_COUNT; i++) particles.push(spawn());
    }

    function cellAt(px, py) {
      var gx = Math.max(0, Math.min(GRID - 1, Math.floor(px / cw)));
      var gy = Math.max(0, Math.min(GRID - 1, Math.floor(py / ch)));
      return gy * GRID + gx;
    }

    function tick(states) {
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        var head = p.trail[p.trail.length - 1];
        var cs = states[cellAt(head.x, head.y)];

        // Sinusoidal base flow — organic curves
        var nx = head.x / w;
        var ny = head.y / h;
        var ang = Math.sin(ny * Math.PI * 3) * 0.6
                + Math.cos(nx * Math.PI * 2) * 0.4;
        var fx = Math.cos(ang) * p.spd;
        var fy = Math.sin(ang) * p.spd * 0.6;

        if (cs === 'viable') {
          fx *= 1.4;
        } else if (cs === 'hazard') {
          fx = (Math.random() - 0.5) * p.spd * 2;
          fy = (Math.random() - 0.5) * p.spd * 2;
          p.life += 2;
        } else if (cs === 'ruled-out') {
          fx *= 0.3;
          fy += (Math.random() - 0.5) * p.spd * 1.2;
          p.life++;
        } else {
          // unknown — aimless drift
          fx *= 0.2;
          fy *= 0.2;
          fx += (Math.random() - 0.5) * 0.3;
          fy += (Math.random() - 0.5) * 0.3;
        }

        var newX = head.x + fx;
        var newY = head.y + fy;
        p.trail.push({ x: newX, y: newY });
        if (p.trail.length > TRAIL_LEN) p.trail.shift();
        p.life++;

        if (newX < 0 || newX > w || newY < 0 || newY > h || p.life > p.max) {
          particles[i] = spawn();
        }
      }
    }

    function draw(result) {
      var bg = col('bg');
      ctx.fillStyle = rgba(bg, 1);
      ctx.fillRect(0, 0, w, h);

      // Subtle terrain backdrop
      for (var i = 0; i < result.states.length; i++) {
        var cs = result.states[i];
        if (cs === 'unknown') continue;
        var cx = (i % GRID) * cw;
        var cy = Math.floor(i / GRID) * ch;
        var c = col(cs);
        var a = cs === 'hazard' ? 0.08 : cs === 'ruled-out' ? 0.10 : 0.05;
        ctx.fillStyle = rgba(c, a);
        ctx.fillRect(cx, cy, cw, ch);
      }

      // Particle trails
      for (var j = 0; j < particles.length; j++) {
        var p = particles[j];
        if (p.trail.length < 2) continue;

        var head = p.trail[p.trail.length - 1];
        var cs2 = result.states[cellAt(head.x, head.y)];
        var la = 1 - p.life / p.max;
        var c2 = col(cs2);
        var ba = cs2 === 'viable' ? 0.85
               : cs2 === 'hazard' ? 0.25
               : cs2 === 'ruled-out' ? 0.35
               : 0.12;

        ctx.lineWidth = cs2 === 'viable' ? 1.5 : 0.8;
        for (var t = 1; t < p.trail.length; t++) {
          var ta = (t / p.trail.length) * ba * la;
          ctx.strokeStyle = rgba(c2, ta);
          ctx.beginPath();
          ctx.moveTo(p.trail[t - 1].x, p.trail[t - 1].y);
          ctx.lineTo(p.trail[t].x, p.trail[t].y);
          ctx.stroke();
        }

        // Head dot for viable particles
        if (cs2 === 'viable') {
          ctx.fillStyle = rgba(c2, la * 0.9);
          ctx.beginPath();
          ctx.arc(head.x, head.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function loop() {
      var r = compute(terrain);
      tick(r.states);
      draw(r);
      updateStats(r);
      aid = requestAnimationFrame(loop);
    }

    return {
      start: function () {
        resize();
        initParticles();
        if (!aid) loop();
      },
      stop: function () {
        if (aid) { cancelAnimationFrame(aid); aid = null; }
      },
      resize: function () {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        resize();
        initParticles();
      }
    };
  }

  // =============================================
  // Space Renderer (Three.js, lazy-loaded)
  // =============================================
  var threeReady = false;

  function loadThree(cb) {
    if (threeReady) return cb();
    var s1 = document.createElement('script');
    s1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    s1.onload = function () {
      var s2 = document.createElement('script');
      s2.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js';
      s2.onload = function () { threeReady = true; cb(); };
      s2.onerror = function () {
        document.getElementById('corridor-space-container').innerHTML =
          '<div class="Corridor__loading">Could not load 3D controls.</div>';
      };
      document.head.appendChild(s2);
    };
    s1.onerror = function () {
      document.getElementById('corridor-space-container').innerHTML =
        '<div class="Corridor__loading">Could not load 3D library. Try refreshing.</div>';
    };
    document.head.appendChild(s1);
  }

  function SpaceRenderer(container, terrain) {
    var scene, camera, renderer, controls, colorAttr, aid;
    var CUBE = 2;

    function init() {
      var w = container.clientWidth;
      var h = w;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(3, 2.5, 3);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;

      // Wireframe cube
      var boxGeo = new THREE.BoxGeometry(CUBE, CUBE, CUBE);
      var boxMesh = new THREE.Mesh(boxGeo);
      var box = new THREE.BoxHelper(boxMesh, 0x837e73);
      box.material.transparent = true;
      box.material.opacity = 0.2;
      scene.add(box);

      // Axis hints — faint lines through center
      var axMat = new THREE.LineBasicMaterial({ color: 0x837e73, transparent: true, opacity: 0.08 });
      [
        [[-1, 0, 0], [1, 0, 0]],
        [[0, -1, 0], [0, 1, 0]],
        [[0, 0, -1], [0, 0, 1]]
      ].forEach(function (pair) {
        var geo = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(pair[0][0], pair[0][1], pair[0][2]),
          new THREE.Vector3(pair[1][0], pair[1][1], pair[1][2])
        ]);
        scene.add(new THREE.Line(geo, axMat));
      });

      // Points
      var count = terrain.length;
      var geo = new THREE.BufferGeometry();
      var positions = new Float32Array(count * 3);
      var colors = new Float32Array(count * 3);

      for (var i = 0; i < count; i++) {
        positions[i * 3]     = terrain[i].x3d * CUBE / 2;
        positions[i * 3 + 1] = terrain[i].y3d * CUBE / 2;
        positions[i * 3 + 2] = terrain[i].z3d * CUBE / 2;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      colorAttr = new THREE.BufferAttribute(colors, 3);
      geo.setAttribute('color', colorAttr);

      var mat = new THREE.PointsMaterial({
        vertexColors: true,
        size: 0.07,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9
      });

      scene.add(new THREE.Points(geo, mat));
      syncColors();
    }

    function syncColors() {
      var result = compute(terrain);
      var sc = {
        viable:      [0.478, 0.545, 0.361],
        hazard:      [0.161, 0.153, 0.145],
        'ruled-out': [0.769, 0.725, 0.604],
        unknown:     [0.91, 0.90, 0.87]
      };

      // Dark mode: make unknown nearly invisible, brighten viable
      if (isDark()) {
        sc.unknown = [0.15, 0.14, 0.13];
        sc.hazard = [0.28, 0.25, 0.22];
        sc['ruled-out'] = [0.40, 0.38, 0.33];
      }

      for (var i = 0; i < terrain.length; i++) {
        var c = sc[result.states[i]];
        colorAttr.array[i * 3]     = c[0];
        colorAttr.array[i * 3 + 1] = c[1];
        colorAttr.array[i * 3 + 2] = c[2];
      }
      colorAttr.needsUpdate = true;
      updateStats(result);
    }

    function loop() {
      controls.update();
      renderer.render(scene, camera);
      aid = requestAnimationFrame(loop);
    }

    return {
      start: function () {
        if (!scene) init();
        if (!aid) loop();
      },
      stop: function () {
        if (aid) { cancelAnimationFrame(aid); aid = null; }
      },
      resize: function () {
        if (!renderer) return;
        var w = container.clientWidth;
        renderer.setSize(w, w);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      },
      syncColors: syncColors
    };
  }

  // =============================================
  // Init
  // =============================================
  function init() {
    var root = document.getElementById('corridor-viz');
    if (!root) return;

    var terrain = buildTerrain();
    var flowCanvas = document.getElementById('corridor-flow-canvas');
    var spaceContainer = document.getElementById('corridor-space-container');

    var flow = FlowRenderer(flowCanvas, terrain);
    var space = null;

    flow.start();

    // Experience slider
    var slider = document.getElementById('corridor-experience');
    var expLabel = document.getElementById('exp-label');
    slider.addEventListener('input', function () {
      experience = parseFloat(this.value);
      bump();
      expLabel.textContent =
        experience < 0.25 ? 'new founder'
        : experience < 0.6 ? 'building the map'
        : 'seen a lot of paths end';
      if (space) space.syncColors();
    });

    // Principle buttons
    var btnWrap = document.getElementById('corridor-principles');
    CONSTRAINTS.forEach(function (c) {
      var btn = document.createElement('button');
      btn.className = 'Corridor__principleBtn';
      btn.textContent = c.label;
      btn.addEventListener('click', function () {
        active[c.key] = !active[c.key];
        btn.classList.toggle('is-active', active[c.key]);
        bump();
        if (space) space.syncColors();
      });
      btnWrap.appendChild(btn);
    });

    // Mode toggle
    var toggleBtns = root.querySelectorAll('.Corridor__toggleBtn');
    for (var i = 0; i < toggleBtns.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var m = this.getAttribute('data-mode');
          if (m === currentMode) return;
          currentMode = m;

          for (var j = 0; j < toggleBtns.length; j++) {
            toggleBtns[j].classList.remove('is-active');
          }
          this.classList.add('is-active');

          if (m === 'flow') {
            flowCanvas.style.display = '';
            spaceContainer.style.display = 'none';
            flow.start();
            if (space) space.stop();
          } else {
            flowCanvas.style.display = 'none';
            spaceContainer.style.display = '';
            flow.stop();

            if (!space) {
              spaceContainer.innerHTML =
                '<div class="Corridor__loading">Loading 3D view\u2026</div>';
              loadThree(function () {
                space = SpaceRenderer(spaceContainer, terrain);
                space.start();
              });
            } else {
              space.syncColors();
              space.start();
            }
          }
        });
      })(toggleBtns[i]);
    }

    // Resize handler
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (currentMode === 'flow') flow.resize();
        else if (space) space.resize();
      }, 150);
    });

    // Initial stats
    updateStats(compute(terrain));
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
