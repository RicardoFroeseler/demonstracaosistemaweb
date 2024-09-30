function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen(); // Ativa o modo de tela cheia
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); // Desativa o modo de tela cheia
        }
    }
}
