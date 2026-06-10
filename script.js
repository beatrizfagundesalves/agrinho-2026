// Seleção dos elementos do HTML
const btnSaibaMais = document.getElementById('btn-saiba-mais');
const modalTexto = document.getElementById('modal-texto');
const btnFechar = document.getElementById('btn-fechar');

// Abrir o texto explicativo ao clicar no botão
btnSaibaMais.addEventListener('click', () => {
    modalTexto.classList.remove('escondido');
});

// Fechar o texto explicativo ao clicar no X
btnFechar.addEventListener('click', () => {
    modalTexto.classList.add('escondido');
});

// Fechar o texto se o usuário clicar fora da caixinha branca
window.addEventListener('click', (event) => {
    if (event.target === modalTexto) {
        modalTexto.classList.add('escondido');
    }
});

