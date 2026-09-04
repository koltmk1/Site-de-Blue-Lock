const personagens = [

    {
        nome: "Isagi Yoichi",
        raridade: "Comum",
        imagem: "Gacha-Isagi.jpg"
    },

    {
        nome: "Hyoma Chigiri",
        raridade: "Comum",
        imagem: "Gacha-Chigiri.jpg"
    },

     {
        nome: "Gin Gagamaru",
        raridade: "Comum",
        imagem: "Gacha-Gagamaru.jpg"
    },

    {
        nome: "Jingo Raichi",
        raridade: "Comum",
        imagem: "Gacha-Raichi.jpg"
    },

       {
        nome: "Igarachi",
        raridade: "Comum",
        imagem: "Gacha-Igarachi.jpg"
    },

      {
        nome: "Wataru Kuon",
        raridade: "Comum",
        imagem: "Gacha-Kuon.jpg"
    },

    {
        nome: "Nijiro Nanase",
        raridade: "Comum",
        imagem: "Gacha-Nanase.jpg"
    },

     {
        nome: "Asahi Naruhaya",
        raridade: "Comum",
        imagem: "Gacha-Naruhaya.jpg"
    },

    // Personagens comuns

    {
        nome: "Meguru Bachira",
        raridade: "Raro",
        imagem: "Gacha-Bachira.jpg"
    },

      {
        nome: "Mikage Reo",
        raridade: "Raro",
        imagem: "Gacha-Reo.jpg"
    },

      {
        nome: "Yo Hiori",
        raridade: "Raro",
        imagem: "Gacha-Hiori.jpg"
    },

      {
        nome: "Aoshi Tokimitsu",
        raridade: "Raro",
        imagem: "Gacha-Tokimitsu.jpg"
    },

      {
        nome: "Zantetsu Tsurugi",
        raridade: "Raro",
        imagem: "Gacha-Zantetsu.jpg"
    },

        {
        nome: "Ikki Niko",
        raridade: "Raro",
        imagem: "Gacha-Niko.jpg"
    },

    // Personagens Raros
     {
        nome: "Seishiro Nagi",
        raridade: "épico",
        imagem: "Gacha-Nagi.jpg"
    },

     {
        nome: "Barou Shoei",
        raridade: "épico",
        imagem: "Gacha-Barou.jpg"
    },

    {
        nome: "Kunigami Rensuke",
        raridade: "épico",
        imagem: "Gacha-Kunigami.jpg"
    },

     {
        nome: "Jumbei Aryu",
        raridade: "épico",
        imagem: "Gacha-Aryu.jpg"
    },

     {
        nome: "Eita Otoya",
        raridade: "épico",
        imagem: "Gacha-Otoya.jpg"
    },

     {
        nome: "Kenyu Yukimiya",
        raridade: "épico",
        imagem: "Gacha-Yukimiya.jpg"
    },

    
     {
        nome: "Jin Kiyora",
        raridade: "épico",
        imagem: "Gacha-Kiyora.jpg"
    },
    
      {
        nome: "Kurona Ranze",
        raridade: "épico",
        imagem: "Gacha-Kurona.jpg"
    },
    


   // Personagens Épicos

    {
        nome: "Ryusei Shidou",
        raridade: "Lendário",
        imagem: "Gacha-Shidou.jpg"
    },

     {
        nome: "Itoshi Rin",
        raridade: "Lendário",
        imagem: "Gacha-Rin.jpg"
    },

        {
        nome: "Oliver Aiku",
        raridade: "Lendário",
        imagem: "Gacha-Aiku.jpg"
    },

       {
        nome: "Tabito Karasu",
        raridade: "Lendário",
        imagem: "Gacha-Karasu.jpg"
    },

    {
        nome: "Charles Chevalier",
        raridade: "Lendário",
        imagem: "Gacha-Charles.jpg"
    },

    {
        nome: "Agi",
        raridade: "Lendário",
        imagem: "Gacha-Agi.jpg"
    },

     {
        nome: "Alexis Ness",
        raridade: "Lendário",
        imagem: "Gacha-Ness.jpg"
    },
    

    // Personagens Lendários

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
    },

    {
        nome: "Itoshi Sae",
        raridade: "New Gen",
        imagem: "Gacha-Sae.jpg"
    },

    {
        nome: "Dom Lorenzo",
        raridade: "New Gen",
        imagem: "Gacha-Lorenzo.jpg"
    }

    // Personagens da Nova geração

];


function sortearRaridade() {

    const numero = Math.random() * 100;

    if (numero <= 30) return "Comum";
    if (numero <= 55) return "Raro";
    if (numero <= 70) return "épico";
    if (numero <= 80) return "Lendário";

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

    if (botao10.disabled) {
        return;
    }

    botao10.disabled = true;

    try {

        const resultados = sortearDezPersonagens();

        console.log("Resultados X10:", resultados);

        for (const personagem of resultados) {

            if (!personagem) {
                throw new Error("Um dos personagens sorteados é inválido.");
            }

            await animarGacha10Vez(personagem);

            await esperar(500);
        }

        criarCardsX10(resultados);

    } catch (erro) {

        console.error("ERRO NO GACHA X10:", erro);

        alert(
            "Ocorreu um erro durante a rolagem X10. " +
            "Abra o console (F12) para ver o erro."
        );

    } finally {

        botao10.disabled = false;
    }
}

async function animarGacha10Vez(personagemFinal) {

    if (!personagemFinal) {
        throw new Error("Personagem inválido no Gacha X10.");
    }

    const img = document.getElementById("imgPersonagem");
    const nome = document.getElementById("nomePersonagem");
    const raridade = document.getElementById("raridadeTexto");

    if (!img || !nome || !raridade) {
        throw new Error("Elementos do Gacha não encontrados no HTML.");
    }

    const personagensAnimacao = personagens.filter(
        personagem => personagem !== personagemFinal
    );

    const quantidadeTrocas = 10;

    for (let contador = 0; contador < quantidadeTrocas; contador++) {

        const aleatorio = Math.floor(
            Math.random() * personagensAnimacao.length
        );

        const personagem = personagensAnimacao[aleatorio];

        img.src = personagem.imagem;
        nome.textContent = personagem.nome;
        raridade.textContent = personagem.raridade;

        const velocidade = 20 + ((contador + 1) * 10);

        await esperar(velocidade);
    }

    finalizarGacha(personagemFinal);
}

function esperar(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


async function animarGacha(personagemFinal) {

    const img = document.getElementById("imgPersonagem");

    const personagensAnimacao = personagens.filter(
        personagem => personagem !== personagemFinal
    );

    let quantidadeTrocas = 20;
    let contador = 0;


    animarNomesX1(personagemFinal);

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

        personagens.forEach(personagem => {
        const img = new Image();
        img.src = personagem.imagem;
        });

        document.getElementById("nomePersonagem").textContent =
            personagem.nome;

        document.getElementById("raridadeTexto").textContent =
            personagem.raridade;

        contador++;

        const velocidade = 10 + (contador * 2);

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

async function iniciarGacha() {

    botao.disabled = true;

    try {
        const personagemFinal = sortearPersonagem();

        await animarGacha(personagemFinal);

    } finally {
        botao.disabled = false;
    }
}

function animarNomesX1(personagemFinal) {

    return new Promise(resolve => {

        const faixa = document.getElementById("nomesPassando");

        faixa.innerHTML = "";

        /*
        Cria vários nomes para dar a impressão
        de que eles estão passando infinitamente.
        */

        const nomesAnimacao = [];

        for (let i = 0; i < 5; i++) {
            nomesAnimacao.push(...personagens);
        }

        nomesAnimacao.push(personagemFinal);

        nomesAnimacao.forEach((personagem, indice) => {

            const nome = document.createElement("span");

            nome.classList.add("nome-roleta");

            nome.textContent = personagem.nome;

            faixa.appendChild(nome);

        });

        const nomes = faixa.querySelectorAll(".nome-roleta");

        let contador = 0;

        const quantidadeTrocas = 5;

        function passarNome() {

            if (contador >= quantidadeTrocas) {

                const nomeFinal = nomes[nomes.length - 1];

                nomeFinal.classList.add("ativo");

                const deslocamento =
                    nomeFinal.offsetLeft -
                    (faixa.parentElement.offsetWidth / 2) +
                    (nomeFinal.offsetWidth / 2);

                faixa.style.transform =
                    `translateX(-${deslocamento}px)`;

                resolve();

                return;
            }

            const nomeAtual = nomes[contador];

            const larguraFaixa =
                faixa.parentElement.offsetWidth;

            const deslocamento =
                nomeAtual.offsetLeft -
                (larguraFaixa / 2) +
                (nomeAtual.offsetWidth / 2);

            faixa.style.transform =
                `translateX(-${deslocamento}px)`;

            nomes.forEach(nome => {
                nome.classList.remove("ativo");
            });

            nomeAtual.classList.add("ativo");

            contador++;

            const velocidade = 50 + contador * 15;

            setTimeout(passarNome, velocidade);
        }

        passarNome();

    });

}
function salvarEstado() {
    localStorage.setItem(
        "estadoJogo",
        JSON.stringify(estadoJogo)
    );
}

function carregarEstado() {
    const dadosSalvos = localStorage.getItem("estadoJogo");

    if (dadosSalvos) {
        estadoJogo = JSON.parse(dadosSalvos);
    }

    atualizarDiamantes();
}

carregarEstado();

function atualizarDiamantes() {
    const elemento = document.getElementById("quantidadeDiamantes");

    if (elemento) {
        elemento.textContent = estadoJogo.diamantes;
    }
}




const jogadoresTime = [

    {
        id: "isagi",

        nome: "Isagi Yoichi",

        imagem: "Gacha-Isagi.jpg",

        posicoes: ["ST", "CAM"],

        overall: 94,

        qualidades: [
            "Visão de jogo",
            "Posicionamento",
            "Finalização"
        ]
    },

    {
        id: "rin",

        nome: "Itoshi Rin",

        imagem: "Corte de água.jpg",

        posicoes: ["ST", "LW"],

        overall: 97,

        qualidades: [
            "Finalização",
            "Velocidade",
            "Controle"
        ]
    },

    {
        id: "kaiser",

        nome: "Michael Kaiser",

        imagem: "Kaiser pro site.jpeg",

        posicoes: ["ST", "RW"],

        overall: 96,

        qualidades: [
            "Finalização",
            "Precisão",
            "Movimentação"
        ]
    },

    {
        id: "sae",

        nome: "Itoshi Sae",

        imagem: "Sae pro site.jpeg",

        posicoes: ["CAM", "CM"],

        overall: 95,

        qualidades: [
            "Passe",
            "Visão",
            "Controle"
        ]
    },

    {
        id: "bachira",

        nome: "Meguru Bachira",

        imagem: "Linguinha.jpg",

        posicoes: ["RW", "CAM", "CM"],

        overall: 91,

        qualidades: [
            "Drible",
            "Criatividade",
            "Velocidade"
        ]
    }

];
