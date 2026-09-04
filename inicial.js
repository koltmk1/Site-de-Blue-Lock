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
        nome: "Gagamaru",
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

   // Personagens Épicos

    {
        nome: "Shidou",
        raridade: "Lendário",
        imagem: "shidou.webp"
    },

     {
        nome: "Itoshi Rin",
        raridade: "Lendário",
        imagem: "Corte de água.jpg"
    },

     {
        nome: "Oliver Aiku",
        raridade: "Lendário",
        imagem: "Gacha-Aiku.jpg"
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
    }

    // Personagens da Nova geração

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

async function animarGacha(personagemFinal) {

    const img = document.getElementById("imgPersonagem");

    const personagensAnimacao = personagens.filter(
        personagem => personagem !== personagemFinal
    );

    let quantidadeTrocas = 20;
    let contador = 0;

    /*
    Inicia a animação dos nomes ao mesmo tempo
    que a animação das imagens.
    */

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

        /*
        Continua atualizando o nome e a raridade
        durante a animação.
        */

        document.getElementById("nomePersonagem").textContent =
            personagem.nome;

        document.getElementById("raridadeTexto").textContent =
            personagem.raridade;

        contador++;

        const velocidade = 50 + (contador * 15);

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

        const quantidadeTrocas = 20;

        function passarNome() {

            if (contador >= quantidadeTrocas) {

                /*
                Mostra o nome final exatamente
                no centro da faixa.
                */

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




