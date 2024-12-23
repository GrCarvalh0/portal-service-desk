document.querySelectorAll('.install-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtém o caminho do vídeo do atributo data-video
        const videoSrc = button.getAttribute('data-video');
        if (!videoSrc) {
            console.error("O atributo data-video não foi encontrado para este botão.");
            return;
        }

        // Seleciona o elemento <video> no modal
        const videoElement = document.querySelector('.modal video');
        const sourceElement = videoElement.querySelector('source');
        
        // Define a nova fonte do vídeo e recarrega
        sourceElement.src = videoSrc;
        videoElement.load();

        // Exibe o modal e o overlay
        document.querySelector('.overlay').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';
    });
});

// Fecha o modal
document.querySelector('#close-modal').addEventListener('click', () => {
    // Oculta o modal e o overlay
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';

    // Pausa o vídeo
    const videoElement = document.querySelector('.modal video');
    videoElement.pause();
});
