// Função para copiar texto para a área de transferência
function copyToClipboard(elementId) {
    var copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
}

// Função para abrir o popup
function openPopup() {
    document.getElementById('infoPopup').style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
    document.getElementById('infoPopup').style.display = 'none';
}

// Função para abrir o site do iframe em uma nova janela em tela cheia
function abrirEmTelaCheia() {
    const url = 'https://vendamais.tiappstecnologia.com.br'; // URL do iframe
    const novaJanela = window.open(url, '_blank', 'toolbar=no,scrollbars=yes,resizable=yes,fullscreen=yes');
    novaJanela.moveTo(0, 0);
    novaJanela.resizeTo(screen.width, screen.height); // Ajusta a nova janela para ocupar toda a tela
}
