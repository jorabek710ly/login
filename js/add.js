
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const sidebar = document.querySelector('.sidebar');
  const topbar = document.querySelector('.topbar');
  const mainContent = document.querySelector('.main-content');

  // Saqlangan rejimni yuklash
  if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    sidebar.classList.add('dark-mode');
    topbar.classList.add('dark-mode');
    mainContent.classList.add('dark-mode');
    toggle.checked = true;
  }

  // Rejimni o‘zgartirish
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      body.classList.add('dark-mode');
      sidebar.classList.add('dark-mode');
      topbar.classList.add('dark-mode');
      mainContent.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      sidebar.classList.remove('dark-mode');
      topbar.classList.remove('dark-mode');
      mainContent.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
    }
  });

