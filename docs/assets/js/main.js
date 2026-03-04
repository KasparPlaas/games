// ============================================
// 🎮 Mängude Õppeplaan — Main JavaScript
// ============================================

(function () {
  'use strict';

  // --- Theme Toggle ---
  const THEME_KEY = 'gamedev-theme';

  function getPreferredTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function initTheme() {
    setTheme(getPreferredTheme());
    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  // --- Progress Tracking ---
  const PROGRESS_KEY = 'gamedev-progress';

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress(data) {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
  }

  function toggleExercise(moduleId, exerciseIndex) {
    const progress = getProgress();
    if (!progress[moduleId]) progress[moduleId] = [];

    const idx = progress[moduleId].indexOf(exerciseIndex);
    if (idx === -1) {
      progress[moduleId].push(exerciseIndex);
    } else {
      progress[moduleId].splice(idx, 1);
    }

    saveProgress(progress);
    updateProgressUI();
    return idx === -1; // returns true if now checked
  }

  function isExerciseCompleted(moduleId, exerciseIndex) {
    const progress = getProgress();
    return (progress[moduleId] || []).includes(exerciseIndex);
  }

  function getCompletionStats() {
    const progress = getProgress();
    const totalExercises = getTotalExerciseCount();
    let completed = 0;

    for (const mod in progress) {
      completed += progress[mod].length;
    }

    return {
      completed,
      total: totalExercises,
      percent: totalExercises > 0 ? Math.round((completed / totalExercises) * 100) : 0,
    };
  }

  function getTotalExerciseCount() {
    // Count from DOM if available, otherwise use known total
    const exerciseItems = document.querySelectorAll('.exercise-checkbox');
    if (exerciseItems.length > 0) return exerciseItems.length;

    // Approximation from module data
    return MODULES.reduce((acc, m) => acc + (m.exercises || 0), 0);
  }

  function updateProgressUI() {
    const stats = getCompletionStats();
    const fill = document.querySelector('.progress-bar-fill');
    const text = document.querySelector('.progress-text');
    const count = document.querySelector('.progress-count');

    if (fill) fill.style.width = stats.percent + '%';
    if (text) text.textContent = stats.percent + '%';
    if (count) count.textContent = `${stats.completed} / ${stats.total} harjutust`;

    // Update module card statuses
    document.querySelectorAll('.module-card').forEach(card => {
      const moduleId = card.dataset.module;
      if (!moduleId) return;
      const progress = getProgress();
      const moduleProgress = (progress[moduleId] || []).length;
      const moduleTotal = parseInt(card.dataset.exercises) || 0;
      const statusEl = card.querySelector('.module-status');

      if (statusEl && moduleTotal > 0) {
        if (moduleProgress >= moduleTotal) {
          statusEl.className = 'module-status completed';
          statusEl.textContent = 'Tehtud ✓';
        } else if (moduleProgress > 0) {
          statusEl.className = 'module-status in-progress';
          statusEl.textContent = `${moduleProgress}/${moduleTotal}`;
        } else {
          statusEl.className = 'module-status not-started';
          statusEl.textContent = 'Alustamata';
        }
      }
    });
  }

  // --- Exercise Checkboxes ---
  function initExerciseCheckboxes() {
    document.querySelectorAll('.exercise-checkbox').forEach(btn => {
      const moduleId = btn.dataset.module;
      const index = parseInt(btn.dataset.index);

      // Set initial state
      if (isExerciseCompleted(moduleId, index)) {
        btn.classList.add('checked');
        btn.textContent = '✓';
      }

      btn.addEventListener('click', () => {
        const checked = toggleExercise(moduleId, index);
        btn.classList.toggle('checked', checked);
        btn.textContent = checked ? '✓' : '';
      });
    });
  }

  // --- Search ---
  function initSearch() {
    const input = document.querySelector('.search-input');
    if (!input) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.module-card');

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const match = !query || text.includes(query);
        card.style.display = match ? '' : 'none';
      });

      // Hide empty level groups
      document.querySelectorAll('.level-group').forEach(group => {
        const visibleCards = group.querySelectorAll('.module-card:not([style*="display: none"])');
        group.style.display = visibleCards.length > 0 ? '' : 'none';
      });
    });
  }

  // --- Mobile Menu ---
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.header-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
      btn.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.site-header')) {
        nav.classList.remove('open');
        btn.textContent = '☰';
      }
    });
  }

  // --- Code Copy ---
  function initCodeCopy() {
    document.querySelectorAll('.code-copy').forEach(btn => {
      btn.addEventListener('click', () => {
        const block = btn.closest('.code-block');
        const code = block.querySelector('code').textContent;

        navigator.clipboard.writeText(code).then(() => {
          btn.textContent = 'Kopeeritud!';
          setTimeout(() => { btn.textContent = 'Kopeeri'; }, 2000);
        });
      });
    });
  }

  // --- Scroll Animations ---
  function initScrollAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.module-card, .exercise-item').forEach(el => {
      observer.observe(el);
    });
  }

  // --- Module Data ---
  const MODULES = [
    { id: 'mod-01', exercises: 5 },
    { id: 'mod-02', exercises: 5 },
    { id: 'mod-03', exercises: 7 },
    { id: 'mod-03b', exercises: 5 },
    { id: 'mod-04', exercises: 6 },
    { id: 'mod-05', exercises: 8 },
    { id: 'mod-06', exercises: 6 },
    { id: 'mod-06b', exercises: 5 },
    { id: 'mod-07', exercises: 6 },
    { id: 'mod-07b', exercises: 5 },
    { id: 'mod-08', exercises: 6 },
    { id: 'mod-08b', exercises: 5 },
    { id: 'mod-09', exercises: 6 },
    { id: 'mod-09b', exercises: 5 },
    { id: 'mod-10', exercises: 7 },
    { id: 'mod-10b', exercises: 5 },
    { id: 'mod-11', exercises: 7 },
    { id: 'mod-11b', exercises: 5 },
    { id: 'mod-12', exercises: 6 },
    { id: 'mod-13', exercises: 6 },
    { id: 'mod-14', exercises: 7 },
    { id: 'mod-14b', exercises: 5 },
    { id: 'mod-15', exercises: 7 },
  ];

  // --- Init ---
  function init() {
    initTheme();
    initMobileMenu();
    initSearch();
    initExerciseCheckboxes();
    initCodeCopy();
    initScrollAnimations();
    updateProgressUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
