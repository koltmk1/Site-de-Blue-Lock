const personagens = [

    {
        nome: "Isagi",
        raridade: "Comum",
        imagem: "./img/Primeira fase.jpg"
    },

    {
        nome: "Kunigami",
        raridade: "Comum",
        imagem: "./img/Kunigami.jpg"
    },

    {
        nome: "Chigiri",
        raridade: "Comum",
        imagem: "./img/Pantera Vermelha.jpg"
    },

    {
        nome: "Bachira",
        raridade: "Raro",
        imagem: "./img/Linguinha.jpg"
    },

    {
        nome: "Nagi",
        raridade: "Raro",
        imagem: "./img/Gênio Preguiçoso.jpg"
    },

    {
        nome: "Rin",
        raridade: "Épico",
        imagem: "./img/Corte de água.jpg"
    },

    {
        nome: "Shidou",
        raridade: "Lendário",
        imagem: "./img/shidou.webp"
    },

    {
        nome: "Loki",
        raridade: "New Gen",
        imagem: "./img/Loki pro site.jpeg"
    },

    {
        nome: "Hugo",
        raridade: "New Gen",
        imagem: "./img/Hugo pro site.jpeg"
    },

    {
        nome: "Bunny",
        raridade: "New Gen",
        imagem: "./img/Bunny pro site.jpeg"
    },

    {
        nome: "Michael Kaiser",
        raridade: "New Gen",
        imagem: "./img/Kaiser pro site.jpeg"
    }

];

let personagem; 

do {

    const aleatorio = Math.floor(
        Math.random() * personagensAnimacao.length
    );

    personagem = personagensAnimacao[aleatorio];

} while (personagem === ultimoPersonagem);

ultimoPersonagem = personagem;


function sortearRaridade() {

    const numero = Math.random() * 100;

    if (numero <= 60) {
        return "Comum";
    }

    if (numero <= 85) {
        return "Raro";
    }

    if (numero <= 95) {
        return "Épico";
    }

    if (numero <= 99) {
        return "Lendário";
    }

    return "New Gen";
}

function sortearPersonagem() {

    const raridadeSorteada = sortearRaridade();

    const disponiveis = personagens.filter(
        personagem => personagem.raridade === raridadeSorteada
    );

    const indice = Math.floor(
        Math.random() * disponiveis.length
    );

    return disponiveis[indice];
}


function animarGacha(personagemFinal) {

    const img = document.getElementById("imgPersonagem");

    const personagensAnimacao = personagens.filter(
        personagem => personagem !== personagemFinal
    );

    let quantidadeTrocas = 20;

    let contador = 0;

    function trocarImagem() {

        if (contador >= quantidadeTrocas) {

            finalizarGacha(personagemFinal);

            return;
        }

        const aleatorio = Math.floor(
            Math.random() * personagensAnimacao.length
        );

        const personagem =
            personagensAnimacao[aleatorio];

        img.src = personagem.imagem;

        contador++;

        let velocidade;

        velocidade = 50 + (contador * 15);

        setTimeout(trocarImagem, velocidade);
    }

    trocarImagem();
}

function finalizarGacha(personagem) {

    const img = document.getElementById("imgPersonagem");

    img.src = personagem.imagem;

    document.getElementById("nomePersonagem").textContent =
        personagem.nome;

    document.getElementById("raridade").textContent =
        personagem.raridade;

    img.classList.add("resultado-final");
}

const botao = document.getElementById("girar");

botao.addEventListener("click", iniciarGacha);

function iniciarGacha() {

    botao.disabled = true;

    const personagemFinal = sortearPersonagem();

    animarGacha(personagemFinal);

    setTimeout(() => {

        botao.disabled = false;

    }, 5000);
}

img.src = personagem.imagem;

document.getElementById("nomePersonagem").textContent =
    personagem.nome;

document.getElementById("raridade").textContent =
    personagem.raridade;

let ultimoPersonagem = null;
