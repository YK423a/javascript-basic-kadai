const btn = document.getElementById('btn');
const parentlist = document.getElementById('parent-list');
btn.addEventListener('click', () => {
    const a = document.createElement('p');
    a.textContent = 'ボタンをクリックしました';
    parentlist.appendChild(a);
});