//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//titulo.innerHTML = 'Escolha um número entre 1 a 10.';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10.');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Parabéns, você acertou o número secreto!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativa)
    document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'O número secreto é menor!');
    } else { 
        exibirTextoNaTela('h1', 'O número secreto é maior!');
    }
    tentativas++
    limparCampo();

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
exibirMensagemInicial();
tentativas = 1;
}
