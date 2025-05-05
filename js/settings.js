
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const settingsPanel = document.querySelector('.settings-panel');

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    settingsPanel.classList.add('dark-mode');
    themeToggle.checked = true;
}

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.classList.add('dark-mode');
        settingsPanel.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        settingsPanel.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});
