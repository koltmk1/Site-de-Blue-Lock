
const personagens = [

    // =====================================================
    // PERSONAGENS COMUNS
    // =====================================================

    {
        id: "isagi",
        nome: "Isagi Yoichi",
        raridade: "Comum",
        imagem: "Gacha-Isagi.jpg",
        posicoes: ["ST", "FW", "CAM"],
        overall: 68,
        atributos: {
            ataque: 70,
            tecnica: 64,
            velocidade: 62,
            visao: 78
        },
        qualidades: [
            "Visão espacial",
            "Posicionamento",
            "Finalização"
        ]
    },

    {
        id: "chigiri",
        nome: "Hyoma Chigiri",
        raridade: "Comum",
        imagem: "Gacha-Chigiri.jpg",
        posicoes: ["LW", "LM", "FW"],
        overall: 72,
        atributos: {
            ataque: 68,
            tecnica: 65,
            velocidade: 91,
            visao: 61
        },
        qualidades: [
            "Velocidade",
            "Arranque",
            "Drible"
        ]
    },

    {
        id: "gagamaru",
        nome: "Gin Gagamaru",
        raridade: "Comum",
        imagem: "Gacha-Gagamaru.jpg",
        posicoes: ["ST", "GK"],
        overall: 70,
        atributos: {
            ataque: 67,
            tecnica: 61,
            velocidade: 70,
            visao: 65
        },
        qualidades: [
            "Atletismo",
            "Reflexos",
            "Elasticidade"
        ]
    },

    {
        id: "raichi",
        nome: "Jingo Raichi",
        raridade: "Comum",
        imagem: "Gacha-Raichi.jpg",
        posicoes: ["ST", "MF"],
        overall: 69,
        atributos: {
            ataque: 68,
            tecnica: 61,
            velocidade: 66,
            visao: 58
        },
        qualidades: [
            "Resistência",
            "Marcação",
            "Físico"
        ]
    },

    {
        id: "igarashi",
        nome: "Igarashi Gurimu",
        raridade: "Comum",
        imagem: "Gacha-Igarashi.jpg",
        posicoes: ["FW"],
        overall: 57,
        atributos: {
            ataque: 52,
            tecnica: 48,
            velocidade: 57,
            visao: 51
        },
        qualidades: [
            "Persistência",
            "Malícia",
            "Sobrevivência"
        ]
    },

    {
        id: "kuon",
        nome: "Wataru Kuon",
        raridade: "Comum",
        imagem: "Gacha-Kuon.jpg",
        posicoes: ["MF", "FW"],
        overall: 65,
        atributos: {
            ataque: 62,
            tecnica: 59,
            velocidade: 64,
            visao: 72
        },
        qualidades: [
            "Inteligência",
            "Posicionamento",
            "Estratégia"
        ]
    },

    {
        id: "nanase",
        nome: "Nijiro Nanase",
        raridade: "Comum",
        imagem: "Gacha-Nanase.jpg",
        posicoes: ["MF", "FW"],
        overall: 62,
        atributos: {
            ataque: 57,
            tecnica: 60,
            velocidade: 63,
            visao: 55
        },
        qualidades: [
            "Passe",
            "Movimentação",
            "Cooperação"
        ]
    },

    {
        id: "naruhaya",
        nome: "Asahi Naruhaya",
        raridade: "Comum",
        imagem: "Gacha-Naruhaya.jpg",
        posicoes: ["FW"],
        overall: 61,
        atributos: {
            ataque: 61,
            tecnica: 55,
            velocidade: 66,
            visao: 53
        },
        qualidades: [
            "Movimentação sem bola",
            "Velocidade",
            "Posicionamento"
        ]
    },


    // =====================================================
    // PERSONAGENS RAROS
    // =====================================================

    {
        id: "bachira",
        nome: "Meguru Bachira",
        raridade: "Raro",
        imagem: "Gacha-Bachira.jpg",
        posicoes: ["RW", "FW", "CAM"],
        overall: 76,
        atributos: {
            ataque: 75,
            tecnica: 88,
            velocidade: 72,
            visao: 79
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
        posicoes: ["MF", "CAM", "FW"],
        overall: 74,
        atributos: {
            ataque: 69,
            tecnica: 76,
            velocidade: 68,
            visao: 73
        },
        qualidades: [
            "Versatilidade",
            "Passe",
            "Controle de bola"
        ]
    },

    {
        id: "hiori",
        nome: "Yo Hiori",
        raridade: "Raro",
        imagem: "Gacha-Hiori.jpg",
        posicoes: ["CM", "CAM", "MF"],
        overall: 72,
        atributos: {
            ataque: 61,
            tecnica: 79,
            velocidade: 65,
            visao: 84
        },
        qualidades: [
            "Passe",
            "Visão de jogo",
            "Controle de bola"
        ]
    },

    {
        id: "tokimitsu",
        nome: "Aoshi Tokimitsu",
        raridade: "Raro",
        imagem: "Gacha-Tokimitsu.jpg",
        posicoes: ["ST", "FW"],
        overall: 75,
        atributos: {
            ataque: 72,
            tecnica: 65,
            velocidade: 76,
            visao: 55
        },
        qualidades: [
            "Físico",
            "Resistência",
            "Velocidade"
        ]
    },

    {
        id: "zantetsu",
        nome: "Zantetsu Tsurugi",
        raridade: "Raro",
        imagem: "Gacha-Zantetsu.jpg",
        posicoes: ["RW", "FW"],
        overall: 70,
        atributos: {
            ataque: 65,
            tecnica: 60,
            velocidade: 88,
            visao: 54
        },
        qualidades: [
            "Aceleração",
            "Velocidade",
            "Explosão"
        ]
    },

    {
        id: "niko",
        nome: "Ikki Niko",
        raridade: "Raro",
        imagem: "Gacha-Niko.jpg",
        posicoes: ["DF", "MF"],
        overall: 71,
        atributos: {
            ataque: 55,
            tecnica: 65,
            velocidade: 60,
            visao: 86
        },
        qualidades: [
            "Visão de jogo",
            "Interceptação",
            "Leitura defensiva"
        ]
    },


    // =====================================================
    // PERSONAGENS ÉPICOS
    // =====================================================

    {
        id: "nagi",
        nome: "Seishiro Nagi",
        raridade: "Épico",
        imagem: "Gacha-Nagi.jpg",
        posicoes: ["ST", "FW"],
        overall: 77,
        atributos: {
            ataque: 76,
            tecnica: 94,
            velocidade: 59,
            visao: 63
        },
        qualidades: [
            "Controle de bola",
            "Trap",
            "Talento natural"
        ]
    },

    {
        id: "barou",
        nome: "Barou Shoei",
        raridade: "Épico",
        imagem: "Gacha-Barou.jpg",
        posicoes: ["ST", "FW"],
        overall: 78,
        atributos: {
            ataque: 87,
            tecnica: 72,
            velocidade: 72,
            visao: 62
        },
        qualidades: [
            "Finalização",
            "Chute de longa distância",
            "Físico"
        ]
    },

    {
        id: "kunigami",
        nome: "Kunigami Rensuke",
        raridade: "Épico",
        imagem: "Gacha-Kunigami.jpg",
        posicoes: ["ST", "FW", "LW"],
        overall: 73,
        atributos: {
            ataque: 76,
            tecnica: 65,
            velocidade: 68,
            visao: 58
        },
        qualidades: [
            "Chute de esquerda",
            "Físico",
            "Potência"
        ]
    },

    {
        id: "aryu",
        nome: "Jyubei Aryu",
        raridade: "Épico",
        imagem: "Gacha-Aryu.jpg",
        posicoes: ["CB", "DF", "ST"],
        overall: 76,
        atributos: {
            ataque: 67,
            tecnica: 61,
            velocidade: 68,
            visao: 64
        },
        qualidades: [
            "Altura",
            "Alcance",
            "Jogo aéreo"
        ]
    },

    {
        id: "otoya",
        nome: "Eita Otoya",
        raridade: "Épico",
        imagem: "Gacha-Otoya.jpg",
        posicoes: ["RW", "FW"],
        overall: 75,
        atributos: {
            ataque: 71,
            tecnica: 75,
            velocidade: 82,
            visao: 63
        },
        qualidades: [
            "Velocidade",
            "Movimentação",
            "Infiltração"
        ]
    },

    {
        id: "yukimiya",
        nome: "Kenyu Yukimiya",
        raridade: "Épico",
        imagem: "Gacha-Yukimiya.jpg",
        posicoes: ["LW", "FW"],
        overall: 77,
        atributos: {
            ataque: 76,
            tecnica: 82,
            velocidade: 84,
            visao: 61
        },
        qualidades: [
            "Drible",
            "Velocidade",
            "Finalização"
        ]
    },

    {
        id: "kiyora",
        nome: "Jin Kiyora",
        raridade: "Épico",
        imagem: "Gacha-Kiyora.jpg",
        posicoes: ["LB", "MF"],
        overall: 68,
        atributos: {
            ataque: 60,
            tecnica: 67,
            velocidade: 72,
            visao: 59
        },
        qualidades: [
            "Equilíbrio",
            "Drible",
            "Movimentação"
        ]
    },

    {
        id: "kurona",
        nome: "Kurona Ranze",
        raridade: "Épico",
        imagem: "Gacha-Kurona.jpg",
        posicoes: ["RB", "MF"],
        overall: 70,
        atributos: {
            ataque: 62,
            tecnica: 72,
            velocidade: 78,
            visao: 70
        },
        qualidades: [
            "Velocidade",
            "Passe",
            "Combinação"
        ]
    },


    // =====================================================
    // PERSONAGENS LENDÁRIOS
    // =====================================================

    {
        id: "shidou",
        nome: "Ryusei Shidou",
        raridade: "Lendário",
        imagem: "Gacha-Shidou.jpg",
        posicoes: ["ST", "FW"],
        overall: 86,
        atributos: {
            ataque: 94,
            tecnica: 83,
            velocidade: 81,
            visao: 76
        },
        qualidades: [
            "Finalização",
            "Instinto",
            "Posicionamento"
        ]
    },

    {
        id: "rin",
        nome: "Itoshi Rin",
        raridade: "Lendário",
        imagem: "Gacha-Rin.jpg",
        posicoes: ["ST", "FW", "CAM"],
        overall: 87,
        atributos: {
            ataque: 89,
            tecnica: 86,
            velocidade: 80,
            visao: 88
        },
        qualidades: [
            "Controle de jogo",
            "Finalização",
            "Visão"
        ]
    },

    {
        id: "aiku",
        nome: "Oliver Aiku",
        raridade: "Lendário",
        imagem: "Gacha-Aiku.jpg",
        posicoes: ["CB", "DF"],
        overall: 84,
        atributos: {
            ataque: 52,
            tecnica: 75,
            velocidade: 77,
            visao: 91
        },
        qualidades: [
            "Defesa",
            "Leitura de jogo",
            "Marcação"
        ]
    },

    {
        id: "karasu",
        nome: "Tabito Karasu",
        raridade: "Lendário",
        imagem: "Gacha-Karasu.jpg",
        posicoes: ["CM", "CAM", "MF"],
        overall: 82,
        atributos: {
            ataque: 72,
            tecnica: 83,
            velocidade: 70,
            visao: 87
        },
        qualidades: [
            "Análise",
            "Controle de bola",
            "Posicionamento"
        ]
    },

    {
        id: "charles",
        nome: "Charles Chevalier",
        raridade: "Lendário",
        imagem: "Gacha-Charles.jpg",
        posicoes: ["CAM", "MF"],
        overall: 83,
        atributos: {
            ataque: 67,
            tecnica: 86,
            velocidade: 72,
            visao: 94
        },
        qualidades: [
            "Passe",
            "Visão",
            "Criatividade"
        ]
    },

    {
        id: "agi",
        nome: "Agi",
        raridade: "Lendário",
        imagem: "Gacha-Agi.jpg",
        posicoes: ["ST", "FW"],
        overall: 84,
        atributos: {
            ataque: 84,
            tecnica: 82,
            velocidade: 79,
            visao: 76
        },
        qualidades: [
            "Finalização",
            "Físico",
            "Movimentação"
        ]
    },

    {
        id: "ness",
        nome: "Alexis Ness",
        raridade: "Lendário",
        imagem: "Gacha-Ness.jpg",
        posicoes: ["CAM", "MF"],
        overall: 81,
        atributos: {
            ataque: 66,
            tecnica: 88,
            velocidade: 70,
            visao: 87
        },
        qualidades: [
            "Passe",
            "Criatividade",
            "Controle de bola"
        ]
    },


    // =====================================================
    // NEW GENERATION
    // =====================================================

    {
        id: "loki",
        nome: "Julian Loki",
        raridade: "New Gen",
        imagem: "Gacha-Loki.jpg",
        posicoes: ["ST", "FW"],
        overall: 92,
        atributos: {
            ataque: 91,
            tecnica: 87,
            velocidade: 99,
            visao: 83
        },
        qualidades: [
            "Velocidade",
            "Aceleração",
            "Finalização"
        ]
    },

    {
        id: "hugo",
        nome: "Vivian Hugo",
        raridade: "New Gen",
        imagem: "Gacha-Hugo.jpg",
        posicoes: ["MF", "CAM"],
        overall: 88,
        atributos: {
            ataque: 76,
            tecnica: 87,
            velocidade: 79,
            visao: 90
        },
        qualidades: [
            "Passe",
            "Visão",
            "Controle de jogo"
        ]
    },

    {
        id: "bunny",
        nome: "Bunny Iglesias",
        raridade: "New Gen",
        imagem: "Gacha-Bunny.jpeg",
        posicoes: ["ST", "FW"],
        overall: 88,
        atributos: {
            ataque: 91,
            tecnica: 82,
            velocidade: 84,
            visao: 76
        },
        qualidades: [
            "Finalização",
            "Físico",
            "Movimentação"
        ]
    },

    {
        id: "kaiser",
        nome: "Michael Kaiser",
        raridade: "New Gen",
        imagem: "Kaiser pro site.jpeg",
        posicoes: ["ST", "FW"],
        overall: 91,
        atributos: {
            ataque: 96,
            tecnica: 91,
            velocidade: 83,
            visao: 88
        },
        qualidades: [
            "Kaiser Impact",
            "Movimentação",
            "Finalização"
        ]
    },

    {
        id: "sae",
        nome: "Itoshi Sae",
        raridade: "New Gen",
        imagem: "Gacha-Sae.jpg",
        posicoes: ["CAM", "MF"],
        overall: 91,
        atributos: {
            ataque: 82,
            tecnica: 96,
            velocidade: 84,
            visao: 98
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
        posicoes: ["CB", "DF"],
        overall: 90,
        atributos: {
            ataque: 61,
            tecnica: 91,
            velocidade: 84,
            visao: 94
        },
        qualidades: [
            "Marcação",
            "Drible",
            "Leitura defensiva"
        ]
    }

];




// =====================================================
// SISTEMA DE RARIDADES
// =====================================================

function sortearRaridade() {
    const numero = Math.random() * 100;

    if (numero <= 30) return "Comum";
    if (numero <= 55) return "Raro";
    if (numero <= 70) return "épico";
    if (numero <= 80) return "Lendário";

    return "New Gen";
}


// =====================================================
// SORTEIO DE PERSONAGEM
// =====================================================

function sortearPersonagem() {
    const raridadeSorteada = sortearRaridade();

    const disponiveis = personagens.filter(
        personagem => personagem.raridade === raridadeSorteada
    );

    if (disponiveis.length === 0) {
        console.error(
            "Nenhum personagem encontrado para a raridade:",
            raridadeSorteada
        );

        return personagens[0];
    }

    const indice = Math.floor(
        Math.random() * disponiveis.length
    );

    return disponiveis[indice];
}


// =====================================================
// SORTEIO DE 10 PERSONAGENS
// =====================================================
```
function sortearDezPersonagens() {
    const resultados = [];

    for (let i = 0; i < 10; i++) {
        resultados.push(sortearPersonagem());
    }

    return resultados;
}

function adicionarJogadorAoElenco(personagem) {
    const lista = document.getElementById("listaJogadores");

    if (!lista || !personagem) {
        return;
    }

    // Evita adicionar o mesmo jogador duas vezes
    const jogadorJaExiste = [...lista.children].some(card => {
        return card.dataset.nome === personagem.nome;
    });

    if (jogadorJaExiste) {
        return;
    }

    const card = document.createElement("article");

    card.classList.add("player-card");

    // Guarda o nome do personagem no próprio card
    card.dataset.nome = personagem.nome;

    card.innerHTML = 

        <div class="player-card-image">
            <img
                src="${personagem.imagem}"
                alt="${personagem.nome}"
            >
        </div>

        <div class="player-card-info">
            <span class="player-rarity">
                ${personagem.raridade}
            </span>

            

            <p class="player-overall">
                OVERALL: <strong>??</strong>
            </p>

            <button
                class="button-add-team"
                type="button"
            >
                COLOCAR NO TIME
            </button>
        </div>
    `;

    lista.appendChild(card);



// =====================================================
// SISTEMA DE DIAMANTES
// =====================================================

// =====================================================
// SISTEMA DE DIAMANTES
// =====================================================

let diamantes = 12450;

const custoRoleta1 = 150;
const custoRoleta10 = 1350;


// =====================================================
// ATUALIZAR DIAMANTES NA TELA
// =====================================================

function atualizarDiamantes() {
    const elemento = document.getElementById(
        "quantidadeDiamantes"
    );

    if (elemento) {
        elemento.textContent =
            diamantes.toLocaleString("pt-BR") + " ◆";
    }
}


// =====================================================
// GASTAR DIAMANTES
// =====================================================

function gastarDiamantes(custo) {
    // Garante que os valores sejam números
    diamantes = Number(diamantes);
    custo = Number(custo);

    console.log("Diamantes disponíveis:", diamantes);
    console.log("Custo da roleta:", custo);

    if (!Number.isFinite(diamantes)) {
        console.error("Quantidade de diamantes inválida:", diamantes);

        diamantes = 12450;
        atualizarDiamantes();
        salvarEstado();
    }

    if (!Number.isFinite(custo)) {
        console.error("Custo da roleta inválido:", custo);
        return false;
    }

    if (diamantes < custo) {
        alert(
            "Você não possui diamantes suficientes!\n" +
            "Diamantes: " + diamantes +
            "\nCusto: " + custo
        );

        return false;
    }

    diamantes -= custo;

    atualizarDiamantes();
    salvarEstado();

    return true;
}


// =====================================================
// SALVAR DIAMANTES
// =====================================================

function salvarEstado() {
    localStorage.setItem(
        "diamantes",
        String(diamantes)
    );
}


// =====================================================
// CARREGAR DIAMANTES
// =====================================================

function carregarEstado() {
    const dadosSalvos = localStorage.getItem(
        "diamantes"
    );

    if (dadosSalvos !== null) {
        const valorSalvo = Number(dadosSalvos);

        if (Number.isFinite(valorSalvo)) {
            diamantes = valorSalvo;
        } else {
            diamantes = 12450;
        }
    }

    atualizarDiamantes();
}

// =====================================================
// SALVAR E CARREGAR DIAMANTES
// =====================================================

function salvarEstado() {
    localStorage.setItem(
        "diamantes",
        diamantes
    );
}


function carregarEstado() {
    const dadosSalvos = localStorage.getItem("diamantes");

    if (dadosSalvos !== null) {
        diamantes = Number(dadosSalvos);
    }

    atualizarDiamantes();
}


// =====================================================
// CRIAÇÃO DOS CARDS DA ROLETAX10
// =====================================================

async function criarCardsX10(resultados) {
    const container = document.getElementById(
        "resultadosX10"
    );

    if (!container) {
        console.error(
            "O elemento #resultadosX10 não foi encontrado."
        );

        return;
    }

    container.innerHTML = "";

    const tabela = document.createElement("table");

    tabela.classList.add("tabela-x10");

    tabela.innerHTML = `
        <thead>
            <tr>
                <th>Nº</th>
                <th>Personagem</th>
                <th>Nome</th>
                <th>Raridade</th>
            </tr>
        </thead>

        <tbody></tbody>
    `;

    const corpoTabela = tabela.querySelector("tbody");

    resultados.forEach((personagem, indice) => {
        const linha = document.createElement("tr");

        const raridadeClasse = personagem.raridade
            .toLowerCase()
            .replaceAll(" ", "-");

        linha.innerHTML = `
            <td class="numero-tabela-x10">
                ${String(indice + 1).padStart(2, "0")}
            </td>

            <td>
                <img
                    class="imagem-tabela-x10"
                    src="${personagem.imagem}"
                    alt="${personagem.nome}"
                >
            </td>

            <td class="nome-tabela-x10">
                ${personagem.nome}
            </td>

            <td>
                <span class="raridade-tabela-x10 raridade-${raridadeClasse}">
                    ${personagem.raridade}
                </span>
            </td>
        `;

        corpoTabela.appendChild(linha);
    });

    container.appendChild(tabela);
}

// =====================================================
// BOTÕES DA ROLETA
// =====================================================

const botao = document.getElementById("girar");
const botao10 = document.getElementById("girar10");


// =====================================================
// ROLETA X1
// =====================================================

async function iniciarGacha() {
    esconderResultadoX10();
    if (botao.disabled) {
        return;
    }

    // Verifica e desconta 150 diamantes
    if (!gastarDiamantes(custoRoleta1)) {
        return;
    }

    botao.disabled = true;

    try {
        const personagemFinal = sortearPersonagem();

        await animarGacha(personagemFinal);

        // Adiciona o personagem à seção JOGADORES
        adicionarJogadorAoElenco(personagemFinal);
    } catch (erro) {
        console.error(
            "ERRO NO GACHA X1:",
            erro
        );

        alert(
            "Ocorreu um erro durante a rolagem X1. " +
            "Abra o console (F12) para ver o erro."
        );
    } finally {
        botao.disabled = false;
    }
}


// =====================================================
// ROLETA X10
// =====================================================

// =====================================================
// ROLETA X10
// =====================================================

// =====================================================
// ROLETA X10
// =====================================================

async function iniciarGacha10() {
    esconderResultadoX10();
    if (!botao10) {
        console.error(
            'O botão com id="girar10" não foi encontrado.'
        );

        return;
    }

    if (botao10.disabled) {
        return;
    }

    // No seu computador, o modo administrador permite roletar
    if (!gastarDiamantes(custoRoleta10)) {
        return;
    }

    botao10.disabled = true;

    try {
        const resultados = sortearDezPersonagens();

        console.log(
            "Resultados X10:",
            resultados
        );

        for (const personagem of resultados) {
            if (!personagem) {
                throw new Error("Um dos personagens sorteados é inválido.");
            }

            await animarGacha10Vez(personagem);

            // Adiciona cada personagem à seção JOGADORES
            adicionarJogadorAoElenco(personagem);

            await esperar(200);
        }

    } catch (erro) {
        console.error(
            "ERRO REAL DA ROLETA X10:",
            erro
        );

        alert(
            "Ocorreu um erro durante a rolagem X10. " +
            "Abra o console (F12) para ver o erro."
        );

    } finally {
        botao10.disabled = false;
    }
}
// =====================================================
// EVENTOS DOS BOTÕES
// =====================================================

if (botao) {
    botao.addEventListener(
        "click",
        iniciarGacha
    );
}

if (botao10) {
    botao10.addEventListener(
        "click",
        iniciarGacha10
    );
}


// =====================================================
// ANIMAÇÃO DA ROLETA X1
// =====================================================

// =====================================================
// ANIMAÇÃO DA ROLETA X1
// =====================================================

function animarGacha(personagemFinal) {
    return new Promise(resolve => {
        const img = document.getElementById("imgPersonagem");
        const faixa = document.getElementById("nomesPassando");

        const personagensAnimacao = [...personagens];

        let contador = 0;
        const quantidadeTrocas = 20;

        // Inicia a animação dos nomes
        animarNomesX1(personagemFinal);

        // Mostra a faixa de nomes novamente
        if (faixa) {
            faixa.style.display = "flex";
            faixa.style.transform = "translateX(0)";
        }

        function trocarImagem() {
            if (contador >= quantidadeTrocas) {
                // Esconde a faixa de nomes
                if (faixa) {
                    faixa.innerHTML = "";
                    faixa.style.transform = "translateX(0)";
                    faixa.style.display = "none";
                }

                // Mostra o personagem sorteado
                finalizarGacha(personagemFinal);

                // Informa que a animação terminou
                resolve();

                return;
            }

            const aleatorio = Math.floor(
                Math.random() * personagensAnimacao.length
            );

            const personagem =
                personagensAnimacao[aleatorio];

            // Troca a imagem
            if (img) {
                img.src = personagem.imagem;
            }

            // Atualiza o nome temporário
            const nomeElemento =
                document.getElementById("nomePersonagem");

            if (nomeElemento) {
                nomeElemento.textContent =
                    personagem.nome;
            }

            // Atualiza a raridade temporária
            const raridadeElemento =
                document.getElementById("raridadeTexto");

            if (raridadeElemento) {
                raridadeElemento.textContent =
                    personagem.raridade;
            }

            contador++;

            // A animação desacelera no final
            const velocidade = 10 + contador * 2;

            setTimeout(
                trocarImagem,
                velocidade
            );
        }

        trocarImagem();
    });
}

// =====================================================
// ANIMAÇÃO DA ROLETA X10
// =====================================================

async function animarGacha10Vez(personagem) {
    // Usa exatamente a mesma animação da roleta X1
    await animarGacha(personagem);

    // Pequena pausa entre um personagem e outro
    await esperar(500);
}


// =====================================================
// MOSTRAR O PERSONAGEM FINAL
// =====================================================

function finalizarGacha(personagem) {
    const img = document.getElementById(
        "imgPersonagem"
    );

    img.src = personagem.imagem;

    document.getElementById(
        "nomePersonagem"
    ).textContent = personagem.nome;

    document.getElementById(
        "raridade"
    ).textContent = personagem.raridade;

    document.getElementById(
        "raridadeTexto"
    ).textContent = personagem.raridade;


    // Reinicia a animação visual do resultado
    img.classList.remove(
        "resultado-final"
    );

    void img.offsetWidth;

    img.classList.add(
        "resultado-final"
    );
}


// =====================================================
// ANIMAÇÃO DOS NOMES DA ROLETA X1
// =====================================================

function animarNomesX1(personagemFinal) {
    return new Promise(resolve => {
        const faixa = document.getElementById(
            "nomesPassando"
        );

        if (!faixa) {
            resolve();
            return;
        }

        faixa.innerHTML = "";


        const nomesAnimacao = [];

        for (let i = 0; i < 5; i++) {
            nomesAnimacao.push(
                ...personagens
            );
        }

        nomesAnimacao.push(
            personagemFinal
        );


        nomesAnimacao.forEach(personagem => {
            const nome = document.createElement(
                "span"
            );

            nome.classList.add(
                "nome-roleta"
            );

            nome.textContent =
                personagem.nome;

            faixa.appendChild(nome);
        });


        const nomes = faixa.querySelectorAll(
            ".nome-roleta"
        );

        let contador = 0;

        const quantidadeTrocas = 5;


        function passarNome() {
            if (contador >= quantidadeTrocas) {
                const nomeFinal =
                    nomes[nomes.length - 1];

                nomeFinal.classList.add(
                    "ativo"
                );

                const deslocamento =
                    nomeFinal.offsetLeft -
                    (faixa.parentElement.offsetWidth / 2) +
                    (nomeFinal.offsetWidth / 2);

                faixa.style.transform =
                    `translateX(-${deslocamento}px)`;

                resolve();

                return;
            }


            const nomeAtual =
                nomes[contador];

            const larguraFaixa =
                faixa.parentElement.offsetWidth;

            const deslocamento =
                nomeAtual.offsetLeft -
                (larguraFaixa / 2) +
                (nomeAtual.offsetWidth / 2);

            faixa.style.transform =
                `translateX(-${deslocamento}px)`;


            nomes.forEach(nome => {
                nome.classList.remove(
                    "ativo"
                );
            });

            nomeAtual.classList.add(
                "ativo"
            );


            contador++;

            const velocidade =
                50 + contador * 15;

            setTimeout(
                passarNome,
                velocidade
            );
        }


        passarNome();
    });
}

// =====================================================
// ESPERAR UM TEMPO
// =====================================================

function esperar(tempo) {
    return new Promise(resolve => {
        setTimeout(resolve, tempo);
    });
}


// =====================================================
// ANIMAÇÃO DE CADA PERSONAGEM DA X10
// =====================================================

async function animarGacha10Vez(personagem) {
    const img = document.getElementById("imgPersonagem");
    const nome = document.getElementById("nomePersonagem");
    const raridade = document.getElementById("raridade");
    const raridadeTexto = document.getElementById("raridadeTexto");

    if (!personagem) {
        throw new Error("Personagem inválido na roleta X10.");
    }

    if (img) {
        img.src = personagem.imagem;

        img.classList.remove("resultado-final");

        void img.offsetWidth;

        img.classList.add("resultado-final");
    }

    if (nome) {
        nome.textContent = personagem.nome;
    }

    if (raridade) {
        raridade.textContent = personagem.raridade;
    }

    if (raridadeTexto) {
        raridadeTexto.textContent = personagem.raridade;
    }

    // Tempo em que cada personagem fica aparecendo
    await esperar(800);
}


// =====================================================
// INICIAR O SISTEMA
// =====================================================

carregarEstado();

// =====================================================
// DIAMANTES INFINITOS APENAS PARA O ADMINISTRADOR
// =====================================================

const modoAdministrador =
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "localhost";

function gastarDiamantes(custo) {

    // No computador do administrador, não desconta diamantes
    if (modoAdministrador) {
        console.log(
            "Modo administrador ativado: diamantes infinitos."
        );

        atualizarDiamantes();

        return true;
    }

    // Para os jogadores, o sistema funciona normalmente
    if (diamantes < custo) {
        alert("Você não possui diamantes suficientes!");
        return false;
    }

    diamantes -= custo;

    atualizarDiamantes();
    salvarEstado();

    return true;
}

function esperar(tempo) {
    return new Promise(resolve => {
        setTimeout(resolve, tempo);
    });
}

function esconderResultadoX10() {
    const container = document.querySelector(".resultado-x10-container");
    const resultados = document.getElementById("resultadosX10");

    if (container) {
        container.style.display = "none";
    }

    if (resultados) {
        resultados.innerHTML = "";
    }
}

const LIMITE_JOGADORES = 6;

const botaoVerTodos = document.getElementById("verTodosJogadores");

let mostrandoTodos = false;

function atualizarListaJogadores() {

    const lista = document.getElementById("listaJogadores");
    const jogadores = [...lista.children];

    jogadores.forEach((card, indice) => {

        if (!mostrandoTodos && indice >= LIMITE_JOGADORES) {
            card.style.display = "none";
        } else {
            card.style.display = "";
        }

    });

    if (jogadores.length > LIMITE_JOGADORES) {

        botaoVerTodos.style.display = "block";

        if (mostrandoTodos) {
            botaoVerTodos.textContent = "OCULTAR JOGADORES";
        } else {
            botaoVerTodos.textContent = "VER TODOS OS JOGADORES";
        }

    } else {

        botaoVerTodos.style.display = "none";

    }
}

botaoVerTodos.addEventListener("click", () => {

    mostrandoTodos = !mostrandoTodos;

    atualizarListaJogadores();

});
