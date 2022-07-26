// Quer com rato em click ou ao clicar na letra correspondente, passa audio e faz efeito de click na imagem

var botaoClicado;

function playSound(letra) {
    switch (letra) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            var audio = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            var audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            break;
    }
    audio.play();
}

const botoes = document.querySelectorAll('.drum');
botoes.forEach((botao) => {
    botao.addEventListener('click', e => {
        botaoClicado = e.target.innerText;
        playSound(botaoClicado);
        animacaoBotoes(botaoClicado)
    })
});

document.addEventListener('keydown', e => {
    playSound(e.key);
    animacaoBotoes(e.key);
})

function animacaoBotoes(letra) {
    var botaoAtivo = document.querySelector('.' + letra);
    botaoAtivo.classList.add('pressed');

    setTimeout(() => {
        botaoAtivo.classList.remove('pressed');
    }, 100);
}