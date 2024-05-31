document.getElementById('enterButton').addEventListener('click', function() {
    // 播放背景音乐
    var backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().then(() => {
        console.log('Background music started playing.');
        localStorage.setItem('musicStatus', 'Background music started playing.');
    }).catch((error) => {
        console.log('Failed to play background music:', error);
        localStorage.setItem('musicStatus', 'Failed to play background music: ' + error.message);
    }).finally(() => {
        // 跳转到新页面
        window.location.href = 'second.html';  // 请将 'new_page.html' 替换为你实际的跳转页面地址
    });
});
