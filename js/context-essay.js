/* Progressive enhancement for the context essay. Reading never depends on JS. */
(function () {
  'use strict';
  var root = document.documentElement;
  var themeButton = document.querySelector('.essay-theme');
  var savedTheme;
  try { savedTheme = localStorage.getItem('pm17-essay-theme'); } catch (_) {}
  function setTheme(dark) {
    root.dataset.theme = dark ? 'dark' : 'light';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light colors' : 'Switch to dark colors');
    themeButton.setAttribute('aria-pressed', String(dark));
  }
  if (themeButton) {
    setTheme(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
    themeButton.hidden = false;
    themeButton.addEventListener('click', function () {
      var dark = root.dataset.theme !== 'dark';
      setTheme(dark);
      try { localStorage.setItem('pm17-essay-theme', dark ? 'dark' : 'light'); } catch (_) {}
    });
  }

  var layerButtons = document.querySelectorAll('[data-layer-view]');
  var layerPanels = document.querySelectorAll('[data-layer-panel]');
  var layerSwitch = document.querySelector('.layer-switch');
  if (layerSwitch) layerSwitch.hidden = false;
  layerButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      layerButtons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      layerPanels.forEach(function (panel) { panel.hidden = panel.dataset.layerPanel !== button.dataset.layerView; });
    });
  });

  var examples = [
    'Leadership and an editor choose a reader group to understand better. An agent helps gather evidence and challenge assumptions. A person approves the direction.',
    'An agent retrieves past coverage, gathers primary sources, and prepares an internal research brief. A human checks the important claims and writes the story.',
    'The editor spots a forecast presented as an observed result. Together, they correct the brief and identify the missing distinction in the research standards.',
    'The editor approves a clearer standard: distinguish forecasts, claims, and measured outcomes. The next assignment tests whether the correction actually helped.'
  ];
  document.querySelectorAll('[data-loop-step]').forEach(function (button) {
    button.disabled = false;
    document.querySelector('.loop-invitation').hidden = false;
    button.addEventListener('click', function () {
      var step = Number(button.dataset.loopStep);
      document.querySelectorAll('[data-loop-step]').forEach(function (b) { b.setAttribute('aria-pressed', String(b === button)); });
      document.querySelector('.example-label').textContent = 'An editorial research pilot / 0' + (step + 1);
      document.querySelector('.loop-example p').textContent = examples[step];
    });
  });

  var progress = document.querySelector('.reading-progress span');
  var article = document.querySelector('#essay-body');
  var links = Array.from(document.querySelectorAll('.essay-index a'));
  var sections = links.map(function (link) { return document.querySelector(link.getAttribute('href')); });
  var scheduled = false;
  function updateReading() {
    var start = article.getBoundingClientRect().top + window.scrollY;
    var distance = article.offsetHeight - window.innerHeight;
    var ratio = distance > 0 ? Math.max(0, Math.min(1, (window.scrollY - start) / distance)) : 1;
    progress.style.transform = 'scaleX(' + ratio + ')';
    var current = -1;
    sections.forEach(function (section, i) { if (section && section.getBoundingClientRect().top < window.innerHeight * .4) current = i; });
    links.forEach(function (link, i) { if (i === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
    scheduled = false;
  }
  function requestUpdate() { if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateReading); } }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  if ('ResizeObserver' in window) new ResizeObserver(requestUpdate).observe(article);
  updateReading();

  // Only illustration accents animate; text is always visible and selectable.
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-in-view'); observer.unobserve(entry.target); } });
    }, { threshold: .12 });
    document.querySelectorAll('.essay-wide, .chapter-marker').forEach(function (el) { observer.observe(el); });
  }
})();
