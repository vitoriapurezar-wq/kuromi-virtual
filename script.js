
const kuromiBotao = document.getElementById("kuromiBotao");
const palco = document.getElementById("palco");
const mensagem = document.getElementById("mensagem");
const status = document.getElementById("status");
const contadorTexto = document.getElementById("contador");
const carinhoBtn = document.getElementById("carinhoBtn");
const sonoBtn = document.getElementById("sonoBtn");

let carinhos = 0;
let dormindo = false;

const mensagens = [
    "Aiii, mais carinho! ♡",
    "Você é minha pessoa favorita! 💜",
    "Hehe, eu gosto de você! >:3",
    "Me dá um docinho também! 🍬",
    "Não conta pra ninguém que sou fofa! 😈",
    "Mah, fica aqui comigo! ♡",
    "Você ganhou um abraço da Kuromi! 💗"
];

function fazerCarinho() {
    if (dormindo) {
        mensagem.textContent = "Shhh... estou dormindo! Zzz ♡";
        return;
    }

    carinhos++;
    contadorTexto.textContent = `${carinhos} 💗`;

    const indice = Math.floor(Math.random() * mensagens.length);
    mensagem.textContent = mensagens[indice];
    status.textContent = "♡ Kuromi está toda feliz!";

    criarCoracao();
}

function criarCoracao() {
    const coracoes = ["💗", "💜", "💕", "♡", "✨"];
    const coracao = document.createElement("span");

    coracao.className = "coracao";
    coracao.textContent =
        coracoes[Math.floor(Math.random() * coracoes.length)];

    coracao.style.left = `${15 + Math.random() * 70}%`;

    palco.appendChild(coracao);

    coracao.addEventListener("animationend", () => {
        coracao.remove();
    });
}

function alternarSono() {
    dormindo = !dormindo;
    palco.classList.toggle("dormindo", dormindo);

    if (dormindo) {
        mensagem.textContent = "Boa noite, Mah... Zzz 💤";
        status.textContent = "☾ Kuromi está dormindo";
        sonoBtn.textContent = "☀️ Acordar Kuromi";
    } else {
        mensagem.textContent = "Acordei! Sentiu minha falta? ♡";
        status.textContent = "♡ Kuromi acordou!";
        sonoBtn.textContent = "☾ Hora de dormir";
    }
}

kuromiBotao.addEventListener("click", fazerCarinho);
carinhoBtn.addEventListener("click", fazerCarinho);
sonoBtn.addEventListener("click", alternarSono);
