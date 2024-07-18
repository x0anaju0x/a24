
//botão trailer
function abrirTrailer(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "flex";
}

function fecharTrailer(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none"; 
}


//carrossel 1
const img_ant = document.querySelector('#img_ant');
const img_prox = document.querySelector('#img_prox');
const destaque = document.querySelector('#destaque');

let posicao_carrossel = 0;

img_ant.addEventListener('click', funImagemAnterior);
img_prox.addEventListener('click', funProximaImagem);

function funImagemAnterior() {
    posicao_carrossel = posicao_carrossel + 100;
    if (posicao_carrossel > 0) {
        posicao_carrossel = -300;
    }
    destaque.style.transform = 'translateX(' + posicao_carrossel + '%)';
}

function funProximaImagem() {
    posicao_carrossel = posicao_carrossel - 100;
    if (posicao_carrossel < -300) {
        posicao_carrossel = 0;
    }
    destaque.style.transform = 'translateX(' + posicao_carrossel + '%)';
}


//carrossel 2
const img_ant2 = document.querySelector('#img_ant2');
const img_prox2 = document.querySelector('#img_prox2');
const destaque2 = document.querySelector('#destaque2');

let posicao_carrossel2 = 0;

img_ant2.addEventListener('click', funImagemAnterior2);
img_prox2.addEventListener('click', funProximaImagem2);

function funImagemAnterior2() {
    posicao_carrossel2 = posicao_carrossel2 + 100;
    if (posicao_carrossel2 > 0) {
        posicao_carrossel2 = -300;
    }
    destaque2.style.transform = 'translateX(' + posicao_carrossel2 + '%)';
}

function funProximaImagem2() {
    posicao_carrossel2 = posicao_carrossel2 - 100;
    if (posicao_carrossel2< -300) {
        posicao_carrossel2 = 0;
    }
    destaque2.style.transform = 'translateX(' + posicao_carrossel2 + '%)';
}

//carrossel 3
const img_ant3 = document.querySelector('#img_ant3');
const img_prox3 = document.querySelector('#img_prox3');
const destaque3 = document.querySelector('#destaque3');

let posicao_carrossel3 = 0;

img_ant3.addEventListener('click', funImagemAnterior3);
img_prox3.addEventListener('click', funProximaImagem3);

function funImagemAnterior3() {
    posicao_carrossel3 = posicao_carrossel3 + 100;
    if (posicao_carrossel3 > 0) {
        posicao_carrossel3 = -300;
    }
    destaque3.style.transform = 'translateX(' + posicao_carrossel3 + '%)';
}

function funProximaImagem3() {
    posicao_carrossel3 = posicao_carrossel3 - 100;
    if (posicao_carrossel3< -300) {
        posicao_carrossel3 = 0;
    }
    destaque3.style.transform = 'translateX(' + posicao_carrossel3 + '%)';
}


