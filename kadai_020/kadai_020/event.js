const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', () => {
    const a = document.createElement('h2');
    a.textContent = 'ボタンをクリックしました';
    parentlist.appendChild(a);
});