const personagens = [

    {
        nome: "Isagi",
        raridade: "Comum",
        imagem: "Gacha-Isagi.jpg"
    },

    {
        nome: "Chigiri",
        raridade: "Comum",
        imagem: "Gacha-Chigiri.jpg"
    },

    {
        nome: "Bachira",
        raridade: "Raro",
        imagem: "Gacha-Bachira.jpg"
    },

    {
        nome: "Nagi",
        raridade: "Raro",
        imagem: "Gacha-Nagi.jpg"
    },

    {
        nome: "Rin",
        raridade: "Épico",
        imagem: "Corte de água.jpg"
    },

    {
        nome: "Shidou",
        raridade: "Lendário",
        imagem: "shidou.webp"
    },

    {
        nome: "Loki",
        raridade: "New Gen",
        imagem: "Gacha-Loki.jpg"
    },

    {
        nome: "Hugo",
        raridade: "New Gen",
        imagem: "Gacha-Hugo.jpg"
    },

    {
        nome: "Bunny",
        raridade: "New Gen",
        imagem: "Gacha-Bunny.jpg"
    },

    {
        nome: "Michael Kaiser",
        raridade: "New Gen",
        imagem: "Kaiser pro site.jpeg"
    }

];


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

function sortearDezPersonagens() {

    const resultados = [];

    for (let i = 0; i < 10; i++) {

        resultados.push(
            sortearPersonagem()
        );

    }

    return resultados;
}

async function criarCardsX10(resultados) {

    const container =
        document.getElementById("resultadosX10");

    container.innerHTML = "";

    for (const personagem of resultados) {

        const card = document.createElement("div");

        card.classList.add("card-resultado-x10");

        card.innerHTML = `
            <img src="${personagem.imagem}" alt="${personagem.nome}">
            
            <div class="info-x10">

                <span class="raridade-x10">
                    ${personagem.raridade}
                </span>

                <h3>
                    ${personagem.nome}
                </h3>

            </div>
        `;

        container.appendChild(card);
    }
}
const botao10 =
    document.getElementById("girar10")

botao10.addEventListener(
    "click",
    iniciarGacha10
);


async function iniciarGacha10() {

    botao10.disabled = true;

    try {

        const resultados = sortearDezPersonagens();

        for (const personagem of resultados) {

            await animarGacha10Vez(personagem);

            await esperar(500);
        }

        await criarCardsX10(resultados);

    } finally {

        // Libera o botão novamente
        botao10.disabled = false;
    }
}

function animarGacha10Vez(personagemFinal) {

    return new Promise(resolve => {

        const img =
            document.getElementById("imgPersonagem");

        const personagensAnimacao =
            personagens.filter(
                personagem =>
                    personagem !== personagemFinal
            );

        let contador = 0;
        const quantidadeTrocas = 10;

        function trocarImagem() {

            if (contador >= quantidadeTrocas) {

                finalizarGacha(personagemFinal);

                resolve();

                return;
            }

            const aleatorio =
                Math.floor(
                    Math.random() *
                    personagensAnimacao.length
                );

            const personagem =
                personagensAnimacao[aleatorio];

            // TROCA A IMAGEM
            img.src = personagem.imagem;

            // TROCA O NOME
            document.getElementById("nomePersonagem").textContent =
                personagem.nome;

            // TROCA A RARIDADE
            document.getElementById("raridadeTexto").textContent =
                personagem.raridade;

            contador++;

            const velocidade =
                20 + (contador * 6);

            setTimeout(
                trocarImagem,
                velocidade
            );
        }

        trocarImagem();

    });
}

function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
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

    document.getElementById("raridadeTexto").textContent =
        personagem.raridade;

    img.classList.remove("resultado-final");

    void img.offsetWidth;

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

