function toggleMenu() {
    const nav = document.getElementById('overlay-nav');
    if (nav.classList.contains('show')) {
        nav.classList.remove('show');
        setTimeout(() => {
            nav.style.display = 'none';
        }, 500); // アニメーション時間と同じ
    } else {
        nav.style.display = 'flex';
        setTimeout(() => {
            nav.classList.add('show');
        }, 10); // 少し遅らせてクラスを追加
    }
}
