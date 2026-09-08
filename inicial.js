const personagens = [

    // =========================
    // COMUNS
    // =========================

    {
        id: "isagi",
        nome: "Isagi Yoichi",
        raridade: "Comum",
        imagem: "Gacha-Isagi.jpg",
        posicoes: ["ST", "FW", "CAM"],
        overall: 94,
        atributos: {
            ataque: 96,
            tecnica: 91,
            velocidade: 88,
            visao: 99
        },
        qualidades: [
            "Visão de jogo",
            "Posicionamento",
            "Finalização"
        ]
    },

    {
        id: "chigiri",
        nome: "Hyoma Chigiri",
        raridade: "Comum",
        imagem: "Gacha-Chigiri.jpg",
        posicoes: ["LW", "RW", "LM", "RM"],
        overall: 90,
        atributos: {
            ataque: 88,
            tecnica: 87,
            velocidade: 99,
            visao: 84
        },
        qualidades: [
            "Velocidade",
            "Arrancada",
            "Drible"
        ]
    },

    {
        id: "gagamaru",
        nome: "Gin Gagamaru",
        raridade: "Comum",
        imagem: "Gacha-Gagamaru.jpg",
        posicoes: ["GK"],
        overall: 88,
        atributos: {
            ataque: 72,
            tecnica: 82,
            velocidade: 90,
            visao: 88
        },
        qualidades: [
            "Reflexos",
            "Elasticidade",
            "Defesas acrobáticas"
        ]
    },

    {
        id: "raichi",
        nome: "Jingo Raichi",
        raridade: "Comum",
        imagem: "Gacha-Raichi.jpg",
        posicoes: ["CM", "CDM", "CB"],
        overall: 82,
        atributos: {
            ataque: 76,
            tecnica: 75,
            velocidade: 81,
            visao: 78
        },
        qualidades: [
            "Marcação",
            "Resistência",
            "Pressão"
        ]
    },

    {
        id: "igarashi",
        nome: "Igarashi",
        raridade: "Comum",
        imagem: "Gacha-Igarashi.jpg",
        posicoes: ["ST", "FW"],
        overall: 70,
        atributos: {
            ataque: 69,
            tecnica: 65,
            velocidade: 73,
            visao: 62
        },
        qualidades: [
            "Malícia",
            "Persistência",
            "Movimentação"
        ]
    },

    {
        id: "kuon",
        nome: "Wataru Kuon",
        raridade: "Comum",
        imagem: "Gacha-Kuon.jpg",
        posicoes: ["CM", "CAM"],
        overall: 76,
        atributos: {
            ataque: 70,
            tecnica: 72,
            velocidade: 75,
            visao: 80
        },
        qualidades: [
            "Estratégia",
            "Passe",
            "Visão de jogo"
        ]
    },

    {
        id: "nanase",
        nome: "Nijiro Nanase",
        raridade: "Comum",
        imagem: "Gacha-Nanase.jpg",
        posicoes: ["CM", "RM", "LM"],
        overall: 78,
        atributos: {
            ataque: 70,
            tecnica: 78,
            velocidade: 79,
            visao: 76
        },
        qualidades: [
            "Passe",
            "Trabalho em equipe",
            "Movimentação"
        ]
    },

    {
        id: "naruhaya",
        nome: "Asahi Naruhaya",
        raridade: "Comum",
        imagem: "Gacha-Naruhaya.jpg",
        posicoes: ["ST", "LW", "RW"],
        overall: 74,
        atributos: {
            ataque: 76,
            tecnica: 70,
            velocidade: 78,
            visao: 68
        },
        qualidades: [
            "Movimentação",
            "Velocidade",
            "Desmarcação"
        ]
    },


    // =========================
    // RAROS
    // =========================

    {
        id: "bachira",
        nome: "Meguru Bachira",
        raridade: "Raro",
        imagem: "Gacha-Bachira.jpg",
        posicoes: ["RW", "LW", "CAM"],
        overall: 92,
        atributos: {
            ataque: 91,
            tecnica: 99,
            velocidade: 91,
            visao: 90
        },
        qualidades: [
            "Drible",
            "Criatividade",
            "Controle de bola"
        ]
    },

    {
        id: "reo",
        nome: "Mikage Reo",
        raridade: "Raro",
        imagem: "Gacha-Reo.jpg",
        posicoes: ["CM", "CAM", "CB", "RB", "LB"],
        overall: 91,
        atributos: {
            ataque: 85,
            tecnica: 91,
            velocidade: 84,
            visao: 92
        },
        qualidades: [
            "Versatilidade",
            "Passe",
            "Cópia de habilidades"
        ]
    },

    {
        id: "hiori",
        nome: "Yo Hiori",
        raridade: "Raro",
        imagem: "Gacha-Hiori.jpg",
        posicoes: ["CM", "CAM"],
        overall: 89,
        atributos: {
            ataque: 82,
            tecnica: 94,
            velocidade: 79,
            visao: 96
        },
        qualidades: [
            "Passe",
            "Visão de jogo",
            "Precisão"
        ]
    },

    {
        id: "tokimitsu",
        nome: "Aoshi Tokimitsu",
        raridade: "Raro",
        imagem: "Gacha-Tokimitsu.jpg",
        posicoes: ["CM", "CDM", "CB"],
        overall: 84,
        atributos: {
            ataque: 78,
            tecnica: 76,
            velocidade: 87,
            visao: 74
        },
        qualidades: [
            "Força física",
            "Resistência",
            "Velocidade"
        ]
    },

    {
        id: "zantetsu",
        nome: "Zantetsu Tsurugi",
        raridade: "Raro",
        imagem: "Gacha-Zantetsu.jpg",
        posicoes: ["RW", "LW", "RM", "LM"],
        overall: 83,
        atributos: {
            ataque: 80,
            tecnica: 75,
            velocidade: 96,
            visao: 70
        },
        qualidades: [
            "Velocidade",
            "Aceleração",
            "Arrancada"
        ]
    },

    {
        id: "niko",
        nome: "Ikki Niko",
        raridade: "Raro",
        imagem: "Gacha-Niko.jpg",
        posicoes: ["CB", "CDM", "CM"],
        overall: 86,
        atributos: {
            ataque: 70,
            tecnica: 82,
            velocidade: 78,
            visao: 96
        },
        qualidades: [
            "Leitura de jogo",
            "Interceptação",
            "Visão"
        ]
    },


    // =========================
    // ÉPICOS
    // =========================

    {
        id: "nagi",
        nome: "Seishiro Nagi",
        raridade: "épico",
        imagem: "Gacha-Nagi.jpg",
        posicoes: ["ST", "FW", "CAM"],
        overall: 95,
        atributos: {
            ataque: 97,
            tecnica: 99,
            velocidade: 82,
            visao: 91
        },
        qualidades: [
            "Controle de bola",
            "Finalização",
            "Trapping"
        ]
    },

    {
        id: "barou",
        nome: "Barou Shoei",
        raridade: "épico",
        imagem: "Gacha-Barou.jpg",
        posicoes: ["ST", "FW", "RW"],
        overall: 95,
        atributos: {
            ataque: 99,
            tecnica: 94,
            velocidade: 91,
            visao: 87
        },
        qualidades: [
            "Finalização",
            "Potência",
            "Chute de longa distância"
        ]
    },

    {
        id: "kunigami",
        nome: "Kunigami Rensuke",
        raridade: "épico",
        imagem: "Gacha-Kunigami.jpg",
        posicoes: ["ST", "LW", "FW"],
        overall: 91,
        atributos: {
            ataque: 94,
            tecnica: 86,
            velocidade: 88,
            visao: 78
        },
        qualidades: [
            "Força física",
            "Finalização",
            "Chute de esquerda"
        ]
    },

    {
        id: "aryu",
        nome: "Jumbei Aryu",
        raridade: "épico",
        imagem: "Gacha-Aryu.jpg",
        posicoes: ["CB"],
        overall: 88,
        atributos: {
            ataque: 65,
            tecnica: 77,
            velocidade: 80,
            visao: 84
        },
        qualidades: [
            "Altura",
            "Jogo aéreo",
            "Alcance"
        ]
    },

    {
        id: "otoya",
        nome: "Eita Otoya",
        raridade: "épico",
        imagem: "Gacha-Otoya.jpg",
        posicoes: ["RW", "LW", "RM", "LM"],
        overall: 88,
        atributos: {
            ataque: 84,
            tecnica: 88,
            velocidade: 94,
            visao: 81
        },
        qualidades: [
            "Velocidade",
            "Infiltração",
            "Movimentação"
        ]
    },

    {
        id: "yukimiya",
        nome: "Kenyu Yukimiya",
        raridade: "épico",
        imagem: "Gacha-Yukimiya.jpg",
        posicoes: ["LW", "RW", "ST"],
        overall: 90,
        atributos: {
            ataque: 91,
            tecnica: 95,
            velocidade: 91,
            visao: 82
        },
        qualidades: [
            "Drible",
            "Finalização",
            "Velocidade"
        ]
    },

    {
        id: "kiyora",
        nome: "Jin Kiyora",
        raridade: "épico",
        imagem: "Gacha-Kiyora.jpg",
        posicoes: ["LB", "RB", "CM"],
        overall: 82,
        atributos: {
            ataque: 72,
            tecnica: 82,
            velocidade: 87,
            visao: 76
        },
        qualidades: [
            "Defesa",
            "Velocidade",
            "Equilíbrio"
        ]
    },

    {
        id: "kurona",
        nome: "Kurona Ranze",
        raridade: "épico",
        imagem: "Gacha-Kurona.jpg",
        posicoes: ["RB", "LB", "RM", "LM"],
        overall: 84,
        atributos: {
            ataque: 74,
            tecnica: 84,
            velocidade: 89,
            visao: 83
        },
        qualidades: [
            "Velocidade",
            "Passe",
            "Combinação"
        ]
    },


    // =========================
    // LENDÁRIOS
    // =========================

    {
        id: "shidou",
        nome: "Ryusei Shidou",
        raridade: "Lendário",
        imagem: "Gacha-Shidou.jpg",
        posicoes: ["ST", "FW"],
        overall: 97,
        atributos: {
            ataque: 100,
            tecnica: 98,
            velocidade: 94,
            visao: 92
        },
        qualidades: [
            "Finalização",
            "Instinto",
            "Acrobacias"
        ]
    },

    {
        id: "rin",
        nome: "Itoshi Rin",
        raridade: "Lendário",
        imagem: "Gacha-Rin.jpg",
        posicoes: ["ST", "LW", "CAM"],
        overall: 96,
        atributos: {
            ataque: 98,
            tecnica: 97,
            velocidade: 94,
            visao: 95
        },
        qualidades: [
            "Visão de jogo",
            "Finalização",
            "Controle de bola"
        ]
    },

    {
        id: "aiku",
        nome: "Oliver Aiku",
        raridade: "Lendário",
        imagem: "Gacha-Aiku.jpg",
        posicoes: ["CB"],
        overall: 93,
        atributos: {
            ataque: 70,
            tecnica: 88,
            velocidade: 85,
            visao: 97
        },
        qualidades: [
            "Defesa",
            "Interceptação",
            "Leitura de jogo"
        ]
    },

    {
        id: "karasu",
        nome: "Tabito Karasu",
        raridade: "Lendário",
        imagem: "Gacha-Karasu.jpg",
        posicoes: ["CM", "CDM", "CAM"],
        overall: 91,
        atributos: {
            ataque: 84,
            tecnica: 94,
            velocidade: 85,
            visao: 93
        },
        qualidades: [
            "Controle de bola",
            "Passe",
            "Leitura do adversário"
        ]
    },

    {
        id: "charles",
        nome: "Charles Chevalier",
        raridade: "Lendário",
        imagem: "Gacha-Charles.jpg",
        posicoes: ["CAM", "CM"],
        overall: 92,
        atributos: {
            ataque: 83,
            tecnica: 96,
            velocidade: 87,
            visao: 98
        },
        qualidades: [
            "Passe",
            "Visão de jogo",
            "Criatividade"
        ]
    },

    {
        id: "agi",
        nome: "Agi",
        raridade: "Lendário",
        imagem: "Gacha-Agi.jpg",
        posicoes: ["ST", "FW", "CAM"],
        overall: 92,
        atributos: {
            ataque: 94,
            tecnica: 91,
            velocidade: 86,
            visao: 89
        },
        qualidades: [
            "Finalização",
            "Técnica",
            "Movimentação"
        ]
    },

    {
        id: "ness",
        nome: "Alexis Ness",
        raridade: "Lendário",
        imagem: "Gacha-Ness.jpg",
        posicoes: ["CAM", "CM"],
        overall: 89,
        atributos: {
            ataque: 78,
            tecnica: 95,
            velocidade: 81,
            visao: 94
        },
        qualidades: [
            "Passe",
            "Assistência",
            "Criatividade"
        ]
    },


    // =========================
    // NEW GEN
    // =========================

    {
        id: "loki",
        nome: "Julian Loki",
        raridade: "New Gen",
        imagem: "Gacha-Loki.jpg",
        posicoes: ["ST", "RW", "LW"],
        overall: 99,
        atributos: {
            ataque: 100,
            tecnica: 98,
            velocidade: 100,
            visao: 96
        },
        qualidades: [
            "Velocidade absurda",
            "Finalização",
            "Drible"
        ]
    },

    {
        id: "hugo",
        nome: "Vivian Hugo",
        raridade: "New Gen",
        imagem: "Gacha-Hugo.jpeg",
        posicoes: ["CB", "CDM"],
        overall: 94,
        atributos: {
            ataque: 70,
            tecnica: 91,
            velocidade: 88,
            visao: 95
        },
        qualidades: [
            "Defesa",
            "Leitura de jogo",
            "Força física"
        ]
    },

    {
        id: "bunny",
        nome: "Bunny Iglesias",
        raridade: "New Gen",
        imagem: "Gacha-Bunny.jpg",
        posicoes: ["ST", "RW", "LW"],
        overall: 95,
        atributos: {
            ataque: 97,
            tecnica: 95,
            velocidade: 93,
            visao: 91
        },
        qualidades: [
            "Finalização",
            "Drible",
            "Movimentação"
        ]
    },

    {
        id: "kaiser",
        nome: "Michael Kaiser",
        raridade: "New Gen",
        imagem: "Gacha-Kaiser.jpg",
        posicoes: ["ST", "FW"],
        overall: 99,
        atributos: {
            ataque: 100,
            tecnica: 99,
            velocidade: 94,
            visao: 97
        },
        qualidades: [
            "Kaiser Impact",
            "Finalização",
            "Posicionamento"
        ]
    },

    {
        id: "sae",
        nome: "Itoshi Sae",
        raridade: "New Gen",
        imagem: "Gacha-Sae.jpg",
        posicoes: ["CAM", "CM"],
        overall: 98,
        atributos: {
            ataque: 92,
            tecnica: 100,
            velocidade: 91,
            visao: 100
        },
        qualidades: [
            "Passe",
            "Visão de jogo",
            "Controle de bola"
        ]
    },

    {
        id: "lorenzo",
        nome: "Don Lorenzo",
        raridade: "New Gen",
        imagem: "Gacha-Lorenzo.jpg",
        posicoes: ["CB", "RB", "LB"],
        overall: 96,
        atributos: {
            ataque: 72,
            tecnica: 96,
            velocidade: 91,
            visao: 98
        },
        qualidades: [
            "Defesa",
            "Marcação",
            "Leitura de jogo"
        ]
    }

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


