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
  var HAZ_SHARE = 0.22;

  // =============================================
  // Seeded PRNG
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
  // Colors
  // =============================================
  function isDark() { return document.body.classList.contains('dark'); }

  // =============================================
  // Terrain (parameterized seed, no random protected)
  // =============================================
  function buildTerrain(seed) {
    var rand = prng(seed);
    var total = GRID * GRID;
    var cells = [];
    for (var i = 0; i < total; i++) {
      var v = {};
      for (var j = 0; j < CONSTRAINTS.length; j++) v[CONSTRAINTS[j].key] = rand() < 0.45;

      var x3d = rand() * 2 - 1;
      var y3d = rand() * 2 - 1;
      var z3d = rand() * 2 - 1;
      var dist3d = Math.sqrt(x3d * x3d + y3d * y3d + z3d * z3d) / Math.sqrt(3);

      cells.push({
        hazard: rand(),
        violates: v,
        isGoldenPath: false,
        x3d: x3d, y3d: y3d, z3d: z3d,
        dist3d: dist3d
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
  var ver = 0, lastVer = -1, cached = null;

  function bump() { ver++; }

  function compute(terrain) {
    if (lastVer === ver) return cached;
    lastVer = ver;

    var visRadius = 0.08 + experience * 0.92;
    var hf = 1 - HAZ_SHARE;
    var viable = 0, seen = 0;

    var states = terrain.map(function (c) {
      if (c.dist3d > visRadius) return 'unknown';
      seen++;
      // Golden path: always viable (immune to hazard + constraints)
      if (c.isGoldenPath) { viable++; return 'viable'; }
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
  // Tree builder
  // =============================================
  function buildTree(terrain) {
    var sorted = [];
    for (var i = 0; i < terrain.length; i++) sorted.push(i);
    sorted.sort(function (a, b) { return terrain[a].dist3d - terrain[b].dist3d; });

    var root = sorted[0];
    var edges = [];
    var childrenOf = {};
    var parentOf = {};
    var treeSet = [root];

    for (var i = 1; i < sorted.length; i++) {
      var pi = sorted[i];
      var bestDist = Infinity;
      var bestIdx = treeSet[0];

      for (var j = 0; j < treeSet.length; j++) {
        var ti = treeSet[j];
        var dx = terrain[pi].x3d - terrain[ti].x3d;
        var dy = terrain[pi].y3d - terrain[ti].y3d;
        var dz = terrain[pi].z3d - terrain[ti].z3d;
        var d = dx * dx + dy * dy + dz * dz;
        if (d < bestDist) {
          bestDist = d;
          bestIdx = ti;
        }
      }

      edges.push([bestIdx, pi]);
      if (!childrenOf[bestIdx]) childrenOf[bestIdx] = [];
      childrenOf[bestIdx].push(pi);
      parentOf[pi] = bestIdx;
      treeSet.push(pi);
    }

    return { root: root, edges: edges, children: childrenOf, parent: parentOf };
  }

  // =============================================
  // Golden path: deepest root-to-leaf chain
  // Marked nodes are always viable when visible
  // =============================================
  function markGoldenPath(tree, terrain) {
    for (var i = 0; i < terrain.length; i++) terrain[i].isGoldenPath = false;

    // Find deepest leaf via DFS
    var bestLeaf = tree.root;
    var bestDepth = 0;
    function dfs(node, depth) {
      var kids = tree.children[node] || [];
      if (kids.length === 0) {
        if (depth > bestDepth) { bestDepth = depth; bestLeaf = node; }
        return;
      }
      kids.forEach(function (k) { dfs(k, depth + 1); });
    }
    dfs(tree.root, 0);

    // Trace leaf back to root, mark the whole chain
    var current = bestLeaf;
    while (current !== undefined) {
      terrain[current].isGoldenPath = true;
      current = tree.parent[current];
    }
  }

  // =============================================
  // Three.js loader
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
        document.getElementById('corridor-space').innerHTML =
          '<div class="Corridor__loading">Could not load 3D controls.</div>';
      };
      document.head.appendChild(s2);
    };
    s1.onerror = function () {
      document.getElementById('corridor-space').innerHTML =
        '<div class="Corridor__loading">Could not load 3D library.</div>';
    };
    document.head.appendChild(s1);
  }

  // =============================================
  // Space Renderer
  // =============================================
  function SpaceRenderer(container, initialTerrain) {
    var scene, camera, renderer, controls;
    var colorAttr, lineColorAttr, ptPosAttr, linePosAttr;
    var localTerrain = initialTerrain;
    var tree;
    var aid = null;
    var CUBE = 2;

    function setupScene() {
      var w = container.clientWidth || container.parentElement.clientWidth || 300;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.set(2.5, 2.0, 2.5);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(w, w);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      container.innerHTML = '';
      container.appendChild(renderer.domElement);

      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.4;
      controls.enableZoom = true;
      controls.minDistance = 1.2;
      controls.maxDistance = 7.0;
      controls.enablePan = false;
      controls.target.set(0, 0, 0);

      var idleTimer;
      controls.addEventListener('start', function () { controls.autoRotate = false; });
      controls.addEventListener('end', function () {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () { controls.autoRotate = true; }, 3000);
      });

      // Wireframe cube
      var boxMesh = new THREE.Mesh(new THREE.BoxGeometry(CUBE, CUBE, CUBE));
      var box = new THREE.BoxHelper(boxMesh, 0x837e73);
      box.material.transparent = true;
      box.material.opacity = 0.12;
      scene.add(box);

      // Axis hints
      var axMat = new THREE.LineBasicMaterial({ color: 0x837e73, transparent: true, opacity: 0.06 });
      [[[-1, 0, 0], [1, 0, 0]], [[0, -1, 0], [0, 1, 0]], [[0, 0, -1], [0, 0, 1]]].forEach(function (p) {
        var g = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(p[0][0], p[0][1], p[0][2]),
          new THREE.Vector3(p[1][0], p[1][1], p[1][2])
        ]);
        scene.add(new THREE.Line(g, axMat));
      });

      // Points (pre-allocate)
      var count = localTerrain.length;
      var ptGeo = new THREE.BufferGeometry();
      ptPosAttr = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
      colorAttr = new THREE.BufferAttribute(new Float32Array(count * 3), 3);
      ptGeo.setAttribute('position', ptPosAttr);
      ptGeo.setAttribute('color', colorAttr);
      scene.add(new THREE.Points(ptGeo, new THREE.PointsMaterial({
        vertexColors: true, size: 0.06, sizeAttenuation: true,
        transparent: true, opacity: 0.9
      })));

      // Lines (pre-allocate for N-1 edges)
      var edgeMax = count - 1;
      var lineGeo = new THREE.BufferGeometry();
      linePosAttr = new THREE.BufferAttribute(new Float32Array(edgeMax * 6), 3);
      lineColorAttr = new THREE.BufferAttribute(new Float32Array(edgeMax * 6), 3);
      lineGeo.setAttribute('position', linePosAttr);
      lineGeo.setAttribute('color', lineColorAttr);
      scene.add(new THREE.LineSegments(lineGeo, new THREE.LineBasicMaterial({
        vertexColors: true, transparent: true, opacity: 0.55
      })));
    }

    function loadTerrain(t) {
      localTerrain = t;
      tree = buildTree(localTerrain);
      markGoldenPath(tree, localTerrain);

      for (var i = 0; i < localTerrain.length; i++) {
        ptPosAttr.array[i * 3]     = localTerrain[i].x3d * CUBE / 2;
        ptPosAttr.array[i * 3 + 1] = localTerrain[i].y3d * CUBE / 2;
        ptPosAttr.array[i * 3 + 2] = localTerrain[i].z3d * CUBE / 2;
      }
      ptPosAttr.needsUpdate = true;

      for (var j = 0; j < tree.edges.length; j++) {
        var fi = tree.edges[j][0], ti = tree.edges[j][1];
        linePosAttr.array[j * 6]     = localTerrain[fi].x3d * CUBE / 2;
        linePosAttr.array[j * 6 + 1] = localTerrain[fi].y3d * CUBE / 2;
        linePosAttr.array[j * 6 + 2] = localTerrain[fi].z3d * CUBE / 2;
        linePosAttr.array[j * 6 + 3] = localTerrain[ti].x3d * CUBE / 2;
        linePosAttr.array[j * 6 + 4] = localTerrain[ti].y3d * CUBE / 2;
        linePosAttr.array[j * 6 + 5] = localTerrain[ti].z3d * CUBE / 2;
      }
      linePosAttr.needsUpdate = true;

      bump();
      syncColors();
    }

    function syncColors() {
      var result = compute(localTerrain);
      var states = result.states;

      // Walk tree: classify edges, count viable chains
      var greenSet = {};
      var viableChains = 0;
      var totalChains = 0;

      function walk(node, pathAllViable) {
        var state = states[node];
        if (state === 'unknown') return false;
        var chainViable = pathAllViable && state === 'viable';
        var kids = (tree.children[node] || []).filter(function (k) {
          return states[k] !== 'unknown';
        });
        if (state === 'hazard' || kids.length === 0) {
          totalChains++;
          if (chainViable) viableChains++;
          return chainViable;
        }
        var anyGreen = false;
        kids.forEach(function (kid) {
          var kidGreen = walk(kid, chainViable);
          if (kidGreen) {
            greenSet[node + ':' + kid] = true;
            anyGreen = true;
          }
        });
        return anyGreen;
      }

      if (states[tree.root] !== 'unknown') walk(tree.root, true);

      // Color palette
      var d = isDark();
      var viableCol = [0.353, 0.541, 0.235];
      var hazardCol = d ? [0.28, 0.25, 0.22] : [0.161, 0.153, 0.145];
      var ruledCol  = d ? [0.40, 0.38, 0.33] : [0.761, 0.753, 0.722];
      var hiddenCol = d ? [0.08, 0.08, 0.08] : [0.96, 0.95, 0.93];
      var greenEdge = viableCol;
      var grayEdge  = d ? [0.25, 0.24, 0.22] : [0.82, 0.80, 0.77];
      var stateToColor = {
        viable: viableCol, hazard: hazardCol, 'ruled-out': ruledCol, unknown: hiddenCol
      };

      for (var i = 0; i < localTerrain.length; i++) {
        var c = stateToColor[states[i]];
        colorAttr.array[i * 3] = c[0];
        colorAttr.array[i * 3 + 1] = c[1];
        colorAttr.array[i * 3 + 2] = c[2];
      }
      colorAttr.needsUpdate = true;

      for (var j = 0; j < tree.edges.length; j++) {
        var fi = tree.edges[j][0], ti = tree.edges[j][1];
        var fS = states[fi], tS = states[ti];
        var isVis = fS !== 'unknown' && tS !== 'unknown' && fS !== 'hazard';
        var ec = !isVis ? hiddenCol : greenSet[fi + ':' + ti] ? greenEdge : grayEdge;
        lineColorAttr.array[j * 6]     = ec[0];
        lineColorAttr.array[j * 6 + 1] = ec[1];
        lineColorAttr.array[j * 6 + 2] = ec[2];
        lineColorAttr.array[j * 6 + 3] = ec[0];
        lineColorAttr.array[j * 6 + 4] = ec[1];
        lineColorAttr.array[j * 6 + 5] = ec[2];
      }
      lineColorAttr.needsUpdate = true;

      var pc = Object.keys(active).filter(function (k) { return active[k]; }).length;
      document.getElementById('stat-viable').textContent =
        totalChains > 0 ? viableChains + ' / ' + totalChains : '--';
      document.getElementById('stat-seen').textContent =
        Math.round(result.seen / result.total * 100) + '%';
      document.getElementById('stat-principles').textContent = pc + ' / ' + CONSTRAINTS.length;
    }

    function loop() {
      controls.update();
      renderer.render(scene, camera);
      aid = requestAnimationFrame(loop);
    }

    return {
      start: function () {
        if (!scene) { setupScene(); loadTerrain(localTerrain); }
        if (!aid) loop();
      },
      stop: function () { if (aid) { cancelAnimationFrame(aid); aid = null; } },
      resize: function () {
        if (!renderer) return;
        var w = container.clientWidth || 300;
        renderer.setSize(w, w);
        camera.aspect = 1;
        camera.updateProjectionMatrix();
      },
      syncColors: syncColors,
      loadTerrain: loadTerrain
    };
  }

  // =============================================
  // Init
  // =============================================
  function init() {
    var root = document.getElementById('corridor-viz');
    if (!root) return;

    var currentSeed = 7;
    var terrain = buildTerrain(currentSeed);
    var container = document.getElementById('corridor-space');
    var space = null;

    container.innerHTML = '<div class="Corridor__loading">Loading\u2026</div>';
    loadThree(function () {
      requestAnimationFrame(function () {
        space = SpaceRenderer(container, terrain);
        space.start();
      });
    });

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

    // New Pivot button
    var controlsEl = root.querySelector('.Corridor__controls');
    var pivotBtn = document.createElement('button');
    pivotBtn.className = 'Corridor__pivotBtn';
    pivotBtn.textContent = 'New pivot \uD83D\uDD04';
    pivotBtn.addEventListener('click', function () {
      currentSeed++;
      terrain = buildTerrain(currentSeed);
      bump();
      if (space) space.loadTerrain(terrain);
    });
    controlsEl.appendChild(pivotBtn);

    // Resize
    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (space) space.resize();
      }, 150);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
