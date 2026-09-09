const personagens = [
    // Personagens comuns
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

    // Personagens raros
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

    // Personagens épicos
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

    // Personagens lendários
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

    // Personagens New Gen
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
        nome: "Don Lorenzo",
        raridade: "New Gen",
        imagem: "Gacha-Lorenzo.jpg"
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

function sortearDezPersonagens() {
    const resultados = [];

    for (let i = 0; i < 10; i++) {
        resultados.push(sortearPersonagem());
    }

    return resultados;
}


// =====================================================
// SISTEMA DE DIAMANTES
// =====================================================

let diamantes = 12450;

// Use true apenas uma vez para resetar os diamantes
const resetarDiamantes = true;

if (resetarDiamantes) {
    localStorage.removeItem("diamantes");
}

const custoRoleta1 = 150;
const custoRoleta10 = 1350;


// Desconta os diamantes e atualiza a tela
function gastarDiamantes(custo) {
    if (diamantes < custo) {
        alert("Você não possui diamantes suficientes!");
        return false;
    }

    diamantes -= custo;

    atualizarDiamantes();

    salvarEstado();

    return true;
}


// Atualiza a quantidade exibida no HTML
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

    for (const personagem of resultados) {
        const card = document.createElement("div");

        card.classList.add(
            "card-resultado-x10"
        );

        card.innerHTML = `
            <img 
                src="${personagem.imagem}" 
                alt="${personagem.nome}"
            >

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


// =====================================================
// BOTÕES DA ROLETA
// =====================================================

const botao = document.getElementById("girar");
const botao10 = document.getElementById("girar10");


// =====================================================
// ROLETA X1
// =====================================================

async function iniciarGacha() {
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

async function iniciarGacha10() {
    if (botao10.disabled) {
        return;
    }

    // Verifica e desconta 1.350 diamantes
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
                throw new Error(
                    "Um dos personagens sorteados é inválido."
                );
            }

            await animarGacha10Vez(personagem);

            await esperar(500);
        }

        await criarCardsX10(resultados);

    } catch (erro) {
        console.error(
            "ERRO NO GACHA X10:",
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

function animarGacha(personagemFinal) {
    const img = document.getElementById(
        "imgPersonagem"
    );

    const personagensAnimacao = [
        ...personagens
    ];

    let contador = 0;

    const quantidadeTrocas = 20;

    // Inicia a animação dos nomes
    animarNomesX1(personagemFinal);


    function trocarImagem() {
        if (contador >= quantidadeTrocas) {

            // Remove qualquer nome que ainda esteja aparecendo
            const faixa = document.getElementById(
                "nomesPassando"
            );

            if (faixa) {
                faixa.innerHTML = "";

                faixa.style.transform =
                    "translateX(0)";

                faixa.style.display = "none";
            }

            // Mostra o personagem sorteado
            finalizarGacha(personagemFinal);

            return;
        }


        const aleatorio = Math.floor(
            Math.random() *
            personagensAnimacao.length
        );

        const personagem =
            personagensAnimacao[aleatorio];


        // Troca a imagem durante a animação
        img.src = personagem.imagem;


        // Atualiza o nome e a raridade temporariamente
        document.getElementById(
            "nomePersonagem"
        ).textContent = personagem.nome;

        document.getElementById(
            "raridadeTexto"
        ).textContent = personagem.raridade;


        contador++;


        // A animação fica mais lenta no final
        const velocidade = 10 + contador * 2;

        setTimeout(
            trocarImagem,
            velocidade
        );
    }


    // Garante que a faixa de nomes apareça
    const faixa = document.getElementById(
        "nomesPassando"
    );

    if (faixa) {
        faixa.style.display = "flex";

        faixa.style.transform =
            "translateX(0)";
    }


    trocarImagem();
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
// INICIAR O SISTEMA
// =====================================================

carregarEstado();