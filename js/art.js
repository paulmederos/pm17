/**
 * Art Collection Page
 * Shuffle + Search functionality
 */

(function() {
  'use strict';

  // -----------------------------
  // Fisher-Yates Shuffle
  // -----------------------------
  function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // -----------------------------
  // Shuffle DOM Elements
  // -----------------------------
  function shuffleMosaic() {
    const mosaic = document.getElementById('art-mosaic');
    if (!mosaic) return;

    const items = Array.from(mosaic.children);
    const shuffledItems = shuffleArray(items);
    
    // Clear and re-append in shuffled order
    mosaic.innerHTML = '';
    shuffledItems.forEach(item => mosaic.appendChild(item));
  }

  // -----------------------------
  // Search Functionality
  // -----------------------------
  function initSearch() {
    const searchInput = document.getElementById('art-search-input');
    const clearButton = document.getElementById('art-search-clear');
    const mosaic = document.getElementById('art-mosaic');
    
    if (!searchInput || !mosaic) return;

    const items = Array.from(mosaic.querySelectorAll('.ArtItem'));

    // Debounce helper
    function debounce(fn, delay) {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    // Filter items based on search query
    function filterItems(query) {
      const normalizedQuery = query.toLowerCase().trim();
      
      if (!normalizedQuery) {
        // Show all items
        items.forEach(item => item.classList.remove('is-hidden'));
        return;
      }

      items.forEach(item => {
        const title = item.dataset.title || '';
        const body = item.dataset.body || '';
        const tags = item.dataset.tags || '';
        const attribution = item.dataset.attribution || '';
        
        // Check if query matches any searchable field
        const searchableText = `${title} ${body} ${tags} ${attribution}`;
        const isMatch = searchableText.includes(normalizedQuery);
        
        item.classList.toggle('is-hidden', !isMatch);
      });
    }

    // Toggle clear button visibility
    function updateClearButton() {
      if (clearButton) {
        clearButton.classList.toggle('is-visible', searchInput.value.length > 0);
      }
    }

    // Event listeners
    searchInput.addEventListener('input', debounce(function() {
      filterItems(this.value);
      updateClearButton();
    }, 150));

    if (clearButton) {
      clearButton.addEventListener('click', function() {
        searchInput.value = '';
        filterItems('');
        updateClearButton();
        searchInput.focus();
      });
    }

    // Keyboard shortcut: "/" to focus search
    document.addEventListener('keydown', function(e) {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
      }
      
      // Escape to clear and blur
      if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        filterItems('');
        updateClearButton();
        searchInput.blur();
      }
    });
  }

  // -----------------------------
  // Initialize
  // -----------------------------
  function init() {
    shuffleMosaic();
    initSearch();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

