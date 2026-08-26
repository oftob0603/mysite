(function () {
  try {
    var saved = localStorage.getItem('avtoulov-theme');
    if (saved === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();

document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('themeToggle');

  function apply(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      btn.textContent = '☾';
    } else {
      document.documentElement.removeAttribute('data-theme');
      btn.textContent = '☀';
    }
  }

  var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  apply(current);

  btn.addEventListener('click', function () {
    current = current === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('avtoulov-theme', current);
    } catch (e) {}
    apply(current);
  });

  // scroll qilganda bo'limlar yumshoq chiqishi
  if ('IntersectionObserver' in window) {
    var sections = document.querySelectorAll('.section');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach(function (section) {
      section.classList.add('reveal');
      observer.observe(section);
    });
  }

  // savol-javob akkordeon
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      faqItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
