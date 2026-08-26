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
});
