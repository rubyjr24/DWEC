const video = document.getElementById('video');
const logger = new Logger();

video.addEventListener('click', (e) => {
    if (video.paused) video.play();
    else video.pause();
});

video.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    logger.clear();
    logger.appendLine(`Duración: ${parseInt(video.duration)} segundos`);
});