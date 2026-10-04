/* Progressive enhancement for the context essay. Reading never depends on JS. */
(function () {
  'use strict';
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
    'Support notices repeated questions from a reader group. Within the company’s direction and human-writing boundary, the editorial team can explore them as part of its agreed scope.',
    'The support person’s agent records the pattern with permitted evidence. An editor’s agent finds it, checks past coverage, and prepares a source brief. A person writes the story.',
    'The editor checks the brief, catches a forecast presented as an observed result, and records the correction. Another team can find the evidence and test the improved practice.',
    'The team checks its correction, then support and the editor bring the wider evidence to the decision owner. That owner considers findings across projects and records whether company priorities should change, with the reasoning.'
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

  var article = document.querySelector('#essay-body');
  var links = Array.from(document.querySelectorAll('.essay-index a'));
  var sections = links.map(function (link) { return document.querySelector(link.getAttribute('href')); });
  var scheduled = false;
  function updateReading() {
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
