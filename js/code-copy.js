/*
  Adds a copy button to every fenced code block in a post.

  Rouge markup is:  div.highlighter-rouge > div.highlight > pre.highlight > code
  We wrap div.highlight in a positioned shell so the button can sit in the
  top-right without living inside the scrolling <pre>.
*/
(function () {
  'use strict';

  var COPY = 'Copy';
  var DONE = 'Copied';
  var FAIL = 'Press ⌘C';

  function textOf(block) {
    var code = block.querySelector('pre > code') || block.querySelector('pre');
    if (!code) return '';
    // innerText collapses the <span> soup and keeps real newlines
    return (code.innerText || code.textContent || '').replace(/\n+$/, '');
  }

  function flash(btn, label, ok) {
    btn.textContent = label;
    btn.classList.add(ok ? 'is-copied' : 'is-failed');
    btn.disabled = true;
    setTimeout(function () {
      btn.textContent = COPY;
      btn.classList.remove('is-copied', 'is-failed');
      btn.disabled = false;
    }, 1800);
  }

  function legacyCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:absolute;left:-9999px;top:0;';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  function attach(block) {
    if (block.parentNode && block.parentNode.classList.contains('CodeBlock')) return;

    var shell = document.createElement('div');
    shell.className = 'CodeBlock';
    block.parentNode.insertBefore(shell, block);
    shell.appendChild(block);

    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'CodeBlock__copy font-meta';
    btn.textContent = COPY;
    btn.setAttribute('aria-label', 'Copy code to clipboard');

    btn.addEventListener('click', function () {
      var text = textOf(block);
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () { flash(btn, DONE, true); },
          function () { var ok = legacyCopy(text); flash(btn, ok ? DONE : FAIL, ok); }
        );
      } else {
        var ok = legacyCopy(text);
        flash(btn, ok ? DONE : FAIL, ok);
      }
    });

    shell.appendChild(btn);
  }

  function init() {
    var blocks = document.querySelectorAll('.Post__content div.highlight');
    for (var i = 0; i < blocks.length; i++) attach(blocks[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
