import { perguntas } from './perguntas.js';
import { nome, aleatorio } from './aleatorio.js';

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const botaoJogarNovamente =
    document.querySelector(".novamente-btn");

const botaoIniciar =
    document.querySelector(".iniciar-btn");

const telaInicial =
    document.querySelector(".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {

    atual = 0;
    historiaFinal = "";

    telaInicial.style.display = 'none';

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent =
        perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativa =
            document.createElement("button");

        botaoAlternativa.textContent =
            alternativa.texto;

        botaoAlternativa.addEventListener(
            "click",
            () => respostaSelecionada(alternativa)
        );

        caixaAlternativas.appendChild(
            botaoAlternativa
        );
    }
}

function respostaSelecionada(opcaoSelecionada) {

    const afirmacao =
        aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {

        atual = opcaoSelecionada.proxima;

        mostraPergunta();

    } else {

        mostraResultado();
    }
}

function mostraResultado() {

    caixaPerguntas.textContent =
        `A verdade sobre ${nome}`;

    textoResultado.textContent =
        historiaFinal;

    caixaAlternativas.textContent = "";

    caixaResultado.classList.add("mostrar");

    botaoJogarNovamente.addEventListener(
        "click",
        jogaNovamente
    );
}

function jogaNovamente() {

    atual = 0;

    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}
const botao = document.querySelector(".iniciar-btn");

botao.addEventListener("click", function() {
    alert("Investigação iniciada!");
});

