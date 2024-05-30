document.getElementById('enterButton').addEventListener('click', function() {
    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play().catch(error => {
        console.log("Music playback failed:", error);
    });

    // Redirect to second page
    window.location.href = 'second.html';
});
