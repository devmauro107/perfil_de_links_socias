const btn = document.getElementById('toggle-theme');
const body = document.body;

const themes = ['dark', 'light', 'colorful', 'cyberpunk', 'forest', 'ocean', 'sunset'];
let index = 0;

btn.addEventListener('click', () => {
    body.classList.remove(themes[index]);
    index = (index + 1) % themes.length;
    body.classList.add(themes[index]);

    if (themes[index] === 'light') btn.textContent = '☀️';
    else if (themes[index] === 'colorful') btn.textContent = '🌈';
    else btn.textContent = '🌙';

const icons = {
    dark: '🌙',
    light: '☀️',
    colorful: '🌈',
    cyberpunk: '⚡',
    forest: '🌿',
    ocean: '🌊',
    sunset: '🌇'
};

btn.textContent = icons[themes[index]];
});