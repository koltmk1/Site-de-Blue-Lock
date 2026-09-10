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
        nome: "Julian Loki",
        raridade: "New Gen",
        imagem: "Gacha-Loki.jpg"
    },
    {
        nome: "Vivian Hugo",
        raridade: "New Gen",
        imagem: "Gacha-Hugo.jpg"
    },
    {
        nome: "Bunny Iglesias",
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
                throw new Error(
                    "Personagem inválido na roleta X10."
                );
            }

            // Executa a mesma animação da X1
            await animarGacha10Vez(personagem);
        }

        // Depois das 10 animações, cria os cards
        await criarCardsX10(resultados);

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
