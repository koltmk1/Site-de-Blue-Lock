/* =========================================
   BANCO DE PERSONAGENS
========================================= */

const personagens = [

    /* =========================
       COMUM
    ========================== */

    {
        id: "isagi",
        nome: "Isagi Yoichi",
        raridade: "Comum",
        overall: 77,
        imagem: "Gacha-Isagi.jpg",
        posicoes: "ST / FW / CAM",
        pe: "Direito",
        altura: "175 CM",
        ataque: 96,
        tecnica: 91,
        velocidade: 79,
        visao: 85,
        biografia: "Isagi Yoichi é um dos principais jogadores do projeto Blue Lock. Seu maior diferencial é sua capacidade de leitura do campo e posicionamento."
    },

    {
        id: "chigiri",
        nome: "Chigiri Hyoma",
        raridade: "Comum",
        overall: 76,
        imagem: "Gacha-Chigiri.jpg",
        posicoes: "LW / RW",
        pe: "Direito",
        altura: "177 CM",
        ataque: 82,
        tecnica: 85,
        velocidade: 97,
        visao: 78,
        biografia: "Chigiri é conhecido principalmente por sua velocidade excepcional e pela capacidade de explorar espaços no campo."
    },

    {
        id: "gagamaru",
        nome: "Gagamaru Gin",
        raridade: "Comum",
        overall: 75,
        imagem: "Gacha-Gagamaru.jpg",
        posicoes: "GK",
        pe: "Direito",
        altura: "191 CM",
        ataque: 70,
        tecnica: 75,
        velocidade: 82,
        visao: 76,
        biografia: "Gagamaru possui capacidades físicas excepcionais e se destaca pela sua habilidade como goleiro."
    },

    {
        id: "raichi",
        nome: "Raichi Jingo",
        raridade: "Comum",
        overall: 73,
        imagem: "Gacha-Raichi.jpg",
        posicoes: "CM / FW / ST",
        pe: "Direito",
        altura: "182 CM",
        ataque: 79,
        tecnica: 72,
        velocidade: 78,
        visao: 70,
        biografia: "Raichi é um jogador agressivo e extremamente dedicado à marcação e ao confronto físico."
    },

    {
        id: "igarashi",
        nome: "Igarashi Gurimu",
        raridade: "Comum",
        overall: 67,
        imagem: "Gacha-Igarachi.jpg",
        posicoes: "FW",
        pe: "Direito",
        altura: "172 CM",
        ataque: 67,
        tecnica: 65,
        velocidade: 70,
        visao: 66,
        biografia: "Igarashi busca sobreviver ao projeto utilizando inteligência e estratégias próprias."
    },

    {
        id: "kuon",
        nome: "Kuon Wataru",
        raridade: "Comum",
        overall: 71,
        imagem: "Gacha-Kuon.jpg",
        posicoes: "FW / MF",
        pe: "Direito",
        altura: "185 CM",
        ataque: 74,
        tecnica: 70,
        velocidade: 72,
        visao: 75,
        biografia: "Kuon possui boa leitura de jogo e capacidade de organização."
    },

    {
        id: "nanase",
        nome: "Nanase Nijiro",
        raridade: "Comum",
        overall: 70,
        imagem: "Gacha-Nanase.jpg",
        posicoes: "MF",
        pe: "Direito",
        altura: "177 CM",
        ataque: 68,
        tecnica: 72,
        velocidade: 74,
        visao: 70,
        biografia: "Nanase é um jogador esforçado e versátil."
    },

    {
        id: "naruhaya",
        nome: "Naruhaya Asahi",
        raridade: "Comum",
        overall: 69,
        imagem: "Gacha-Naruhaya.jpg",
        posicoes: "FW",
        pe: "Direito",
        altura: "168 CM",
        ataque: 72,
        tecnica: 66,
        velocidade: 75,
        visao: 65,
        biografia: "Naruhaya utiliza sua movimentação e velocidade para encontrar espaços."
    },


    /* =========================
       RARO
    ========================== */

    {
        id: "bachira",
        nome: "Bachira Meguru",
        raridade: "Raro",
        overall: 80,
        imagem: "Gacha-Bachira.jpg",
        posicoes: "RW / FW",
        pe: "Direito",
        altura: "176 CM",
        ataque: 88,
        tecnica: 95,
        velocidade: 87,
        visao: 82,
        biografia: "Bachira é um jogador extremamente criativo, conhecido por seus dribles e estilo imprevisível."
    },

    {
        id: "reo",
        nome: "Reo Mikage",
        raridade: "Raro",
        overall: 79,
        imagem: "Gacha-Reo.jpg",
        posicoes: "CM / CAM",
        pe: "Direito",
        altura: "185 CM",
        ataque: 80,
        tecnica: 86,
        velocidade: 78,
        visao: 83,
        biografia: "Reo possui grande versatilidade e capacidade de adaptar seu estilo de jogo."
    },

    {
        id: "hiori",
        nome: "Hiori Yo",
        raridade: "Raro",
        overall: 78,
        imagem: "Gacha-Hiori.jpg",
        posicoes: "CAM / RW",
        pe: "Esquerdo",
        altura: "183 CM",
        ataque: 76,
        tecnica: 90,
        velocidade: 76,
        visao: 88,
        biografia: "Hiori é conhecido pela precisão de seus passes e excelente leitura do campo."
    },

    {
        id: "tokimitsu",
        nome: "Tokimitsu Aoshi",
        raridade: "Raro",
        overall: 77,
        imagem: "Gacha-Tokimitsu.jpg",
        posicoes: "CB / RB",
        pe: "Direito",
        altura: "188 CM",
        ataque: 78,
        tecnica: 70,
        velocidade: 86,
        visao: 69,
        biografia: "Tokimitsu possui força física e resistência excepcionais."
    },

    {
        id: "zantetsu",
        nome: "Zantetsu Tsurugi",
        raridade: "Raro",
        overall: 76,
        imagem: "Gacha-Zantetsu.jpg",
        posicoes: "RW / FW",
        pe: "Esquerdo",
        altura: "188 CM",
        ataque: 77,
        tecnica: 71,
        velocidade: 91,
        visao: 68,
        biografia: "Zantetsu é conhecido por sua aceleração e velocidade."
    },

    {
        id: "niko",
        nome: "Niko Ikki",
        raridade: "Raro",
        overall: 78,
        imagem: "Gacha-Niko.jpg",
        posicoes: "CB / DM",
        pe: "Direito",
        altura: "173 CM",
        ataque: 69,
        tecnica: 78,
        velocidade: 72,
        visao: 91,
        biografia: "Niko possui uma das melhores capacidades de leitura do campo entre os jogadores."
    },


    /* =========================
       ÉPICO
    ========================== */

    {
        id: "nagi",
        nome: "Nagi Seishiro",
        raridade: "Épico",
        overall: 82,
        imagem: "Gacha-Nagi.jpg",
        posicoes: "ST / CAM",
        pe: "Direito",
        altura: "190 CM",
        ataque: 91,
        tecnica: 96,
        velocidade: 75,
        visao: 80,
        biografia: "Nagi possui um talento natural extraordinário, especialmente no controle da bola."
    },

    {
        id: "barou",
        nome: "Barou Shouei",
        raridade: "Épico",
        overall: 85,
        imagem: "Gacha-Barou.jpg",
        posicoes: "ST",
        pe: "Direito",
        altura: "187 CM",
        ataque: 96,
        tecnica: 88,
        velocidade: 84,
        visao: 77,
        biografia: "Barou possui uma mentalidade extremamente dominante e busca assumir o protagonismo do jogo."
    },

    {
        id: "kunigami",
        nome: "Kunigami Rensuke",
        raridade: "Épico",
        overall: 81,
        imagem: "Gacha-Kunigami.jpg",
        posicoes: "ST / LW",
        pe: "Esquerdo",
        altura: "188 CM",
        ataque: 89,
        tecnica: 79,
        velocidade: 83,
        visao: 74,
        biografia: "Kunigami é um atacante poderoso com excelente físico e chute de longa distância."
    },

    {
        id: "aryu",
        nome: "Aryu Jyubei",
        raridade: "Épico",
        overall: 80,
        imagem: "Gacha-Aryu.jpg",
        posicoes: "CB",
        pe: "Direito",
        altura: "195 CM",
        ataque: 70,
        tecnica: 76,
        velocidade: 74,
        visao: 79,
        biografia: "Aryu possui grande alcance físico e capacidade defensiva."
    },

    {
        id: "otoya",
        nome: "Otoya Eita",
        raridade: "Épico",
        overall: 82,
        imagem: "Gacha-Otoya.jpg",
        posicoes: "RW / FW",
        pe: "Direito",
        altura: "177 CM",
        ataque: 85,
        tecnica: 87,
        velocidade: 91,
        visao: 78,
        biografia: "Otoya é especialista em movimentação e infiltrações silenciosas."
    },

    {
        id: "yukimiya",
        nome: "Yukimiya Kenyu",
        raridade: "Épico",
        overall: 82,
        imagem: "Gacha-Yukimiya.jpg",
        posicoes: "LW / FW",
        pe: "Direito",
        altura: "184 CM",
        ataque: 89,
        tecnica: 88,
        velocidade: 86,
        visao: 76,
        biografia: "Yukimiya combina velocidade, drible e capacidade ofensiva."
    },

    {
        id: "kiyora",
        nome: "Kiyora Jin",
        raridade: "Épico",
        overall: 78,
        imagem: "Gacha-Kiyora.jpg",
        posicoes: "LB / MF",
        pe: "Esquerdo",
        altura: "165 CM",
        ataque: 76,
        tecnica: 80,
        velocidade: 84,
        visao: 74,
        biografia: "Kiyora possui boa técnica e capacidade de criar jogadas."
    },

    {
        id: "kurona",
        nome: "Kurona Ranze",
        raridade: "Épico",
        overall: 79,
        imagem: "Gacha-Kurona.jpg",
        posicoes: "RB / RW",
        pe: "Direito",
        altura: "168 CM",
        ataque: 75,
        tecnica: 82,
        velocidade: 88,
        visao: 79,
        biografia: "Kurona possui grande velocidade e excelente capacidade de combinação."
    },


    /* =========================
       LENDÁRIO
    ========================== */

    {
        id: "shidou",
        nome: "Shidou Ryusei",
        raridade: "Lendário",
        overall: 89,
        imagem: "Gacha-Shidou.jpg",
        posicoes: "ST",
        pe: "Direito",
        altura: "185 CM",
        ataque: 98,
        tecnica: 92,
        velocidade: 88,
        visao: 86,
        biografia: "Shidou é um atacante extremamente explosivo, conhecido por sua capacidade de finalização."
    },

    {
        id: "rin",
        nome: "Itoshi Rin",
        raridade: "Lendário",
        overall: 90,
        imagem: "Corte de água.jpg",
        posicoes: "ST / CAM",
        pe: "Direito",
        altura: "186 CM",
        ataque: 96,
        tecnica: 94,
        velocidade: 89,
        visao: 95,
        biografia: "Rin é um dos jogadores mais completos do Blue Lock e possui enorme capacidade de leitura do jogo."
    },

    {
        id: "aiku",
        nome: "Aiku Oliver",
        raridade: "Lendário",
        overall: 87,
        imagem: "Gacha-Aiku.jpg",
        posicoes: "CB",
        pe: "Direito",
        altura: "190 CM",
        ataque: 72,
        tecnica: 84,
        velocidade: 79,
        visao: 94,
        biografia: "Aiku é um defensor de alto nível conhecido por sua leitura defensiva."
    },

    {
        id: "karasu",
        nome: "Karasu Tabito",
        raridade: "Lendário",
        overall: 85,
        imagem: "Gacha-Karasu.jpg",
        posicoes: "CM / DM",
        pe: "Direito",
        altura: "183 CM",
        ataque: 82,
        tecnica: 88,
        velocidade: 81,
        visao: 89,
        biografia: "Karasu é um jogador inteligente que explora as fraquezas dos adversários."
    },

    {
        id: "charles",
        nome: "Charles Chevalier",
        raridade: "Lendário",
        overall: 86,
        imagem: "Gacha-Charles.jpg",
        posicoes: "CAM",
        pe: "Direito",
        altura: "178 CM",
        ataque: 79,
        tecnica: 94,
        velocidade: 82,
        visao: 96,
        biografia: "Charles possui enorme talento para criação de jogadas e passes."
    },

    {
        id: "agi",
        nome: "Agi",
        raridade: "Lendário",
        overall: 87,
        imagem: "Gacha-Agi.jpg",
        posicoes: "ST",
        pe: "Direito",
        altura: "195 CM",
        ataque: 91,
        tecnica: 89,
        velocidade: 82,
        visao: 81,
        biografia: "Agi possui excelente físico e grande capacidade técnica."
    },

    {
        id: "ness",
        nome: "Alexis Ness",
        raridade: "Lendário",
        overall: 84,
        imagem: "Gacha-Ness.jpg",
        posicoes: "CAM / CM",
        pe: "Direito",
        altura: "181 CM",
        ataque: 76,
        tecnica: 92,
        velocidade: 79,
        visao: 90,
        biografia: "Ness é um excelente criador de jogadas e possui grande precisão técnica."
    },


    /* =========================
       NEW GEN
    ========================== */

    {
        id: "loki",
        nome: "Julian Loki",
        raridade: "New Gen",
        overall: 95,
        imagem: "Gacha-Loki.jpg",
        posicoes: "ST / RW",
        pe: "Direito",
        altura: "178 CM",
        ataque: 98,
        tecnica: 96,
        velocidade: 99,
        visao: 94,
        biografia: "Julian Loki é considerado um dos maiores talentos jovens do futebol."
    },

    {
        id: "hugo",
        nome: "Vivilian Hugo",
        raridade: "New Gen",
        overall: 92,
        imagem: "Gacha-Hugo.jpg",
        posicoes: "CB",
        pe: "Direito",
        altura: "190 CM",
        ataque: 75,
        tecnica: 90,
        velocidade: 84,
        visao: 94,
        biografia: "Vivilian Hugo é um jogador de alto nível internacional."
    },

    {
        id: "bunny",
        nome: "Bunny Iglesias",
        raridade: "New Gen",
        overall: 91,
        imagem: "Gacha-Bunny.jpg",
        posicoes: "FW",
        pe: "Direito",
        altura: "183 CM",
        ataque: 94,
        tecnica: 91,
        velocidade: 88,
        visao: 86,
        biografia: "Bunny Iglesias é um atacante de enorme potencial ofensivo."
    },

    {
        id: "kaiser",
        nome: "Michael Kaiser",
        raridade: "New Gen",
        overall: 94,
        imagem: "Kaiser pro site.jpeg",
        posicoes: "ST",
        pe: "Direito",
        altura: "186 CM",
        ataque: 99,
        tecnica: 96,
        velocidade: 90,
        visao: 92,
        biografia: "Michael Kaiser é um dos atacantes mais talentosos do projeto."
    },

    {
        id: "sae",
        nome: "Itoshi Sae",
        raridade: "New Gen",
        overall: 94,
        imagem: "Gacha-Sae.jpg",
        posicoes: "CAM / CM",
        pe: "Direito",
        altura: "180 CM",
        ataque: 88,
        tecnica: 99,
        velocidade: 91,
        visao: 98,
        biografia: "Itoshi Sae é um meio-campista de nível internacional conhecido por sua técnica e visão."
    },

    {
        id: "lorenzo",
        nome: "Don Lorenzo",
        raridade: "New Gen",
        overall: 93,
        imagem: "Gacha-Lorenzo.jpg",
        posicoes: "CB / DM",
        pe: "Direito",
        altura: "190 CM",
        ataque: 82,
        tecnica: 94,
        velocidade: 91,
        visao: 97,
        biografia: "Don Lorenzo é um defensor extremamente habilidoso e imprevisível."
    }

    // Mestres 

];


/* =========================================
   ELEMENTOS
========================================= */


const listaJogadores =
    document.getElementById("listaJogadores");

const perfilJogador =
    document.getElementById("perfilJogador");

const pesquisa =
    document.getElementById("pesquisaJogador");

const contador =
    document.getElementById("contadorJogadores");

console.log("listaJogadores:", listaJogadores);
console.log("perfilJogador:", perfilJogador);
console.log("pesquisa:", pesquisa);

let filtroAtual = "Todos";


/* =========================================
   MOSTRAR BIBLIOTECA
========================================= */

function mostrarBiblioteca() {

    listaJogadores.innerHTML = "";


    const textoPesquisa =
        pesquisa.value.toLowerCase();


    const jogadoresFiltrados =
        personagens.filter(personagem => {

            const combinaNome =
                personagem.nome
                    .toLowerCase()
                    .includes(textoPesquisa);


            const combinaRaridade =
                filtroAtual === "Todos" ||
                personagem.raridade === filtroAtual;


            return combinaNome && combinaRaridade;

        });


    contador.textContent =
        `${jogadoresFiltrados.length} JOGADORES`;


    jogadoresFiltrados.forEach(personagem => {

        const card =
            document.createElement("div");


        card.className =
            "card-biblioteca";


        card.dataset.id =
            personagem.id;


        card.innerHTML = `

            <img
                src="${personagem.imagem}"
                alt="${personagem.nome}"
            >

            <div class="card-info">

                <h3>
                    ${personagem.nome}
                </h3>

                <p>
                    ${personagem.raridade}
                    •
                    ${personagem.posicoes}
                </p>

                <div class="card-overall">
                    OVR ${personagem.overall}
                </div>

            </div>

        `;


        card.addEventListener("click", () => {

            mostrarPerfil(personagem.id);

        });


        listaJogadores.appendChild(card);

    });

}


/* =========================================
   MOSTRAR PERFIL
========================================= */

function mostrarPerfil(id) {

    const personagem =
        personagens.find(
            jogador => jogador.id === id
        );


    if (!personagem) return;


    perfilJogador.innerHTML = `

        <div class="perfil-principal">


            <!-- PERSONAGEM -->

            <div class="personagem-perfil">

                <div class="imagem-perfil">

                    <img
                        src="${personagem.imagem}"
                        alt="${personagem.nome}"
                    >

                </div>


                <h3>
                    ${personagem.nome.toUpperCase()}
                </h3>


                <p class="raridade-perfil">

                    ${personagem.raridade}
                    •
                    ${personagem.posicoes}

                </p>


                <div class="overall-perfil">

                    <span>
                        OVERALL
                    </span>

                    <strong>
                        ${personagem.overall}
                    </strong>

                </div>

            </div>



            <!-- INFORMAÇÕES -->

            <div class="info-perfil">

                <h3 class="titulo-info">
                    VISÃO GERAL
                </h3>


                <div class="info-grid">


                    <div class="info-box-perfil">

                        <span>
                            POSIÇÃO
                        </span>

                        <strong>
                            ${personagem.posicoes}
                        </strong>

                    </div>


                    <div class="info-box-perfil">

                        <span>
                            PÉ DOMINANTE
                        </span>

                        <strong>
                            ${personagem.pe}
                        </strong>

                    </div>


                    <div class="info-box-perfil">

                        <span>
                            ALTURA
                        </span>

                        <strong>
                            ${personagem.altura}
                        </strong>

                    </div>


                    <div class="info-box-perfil">

                        <span>
                            RARIDADE
                        </span>

                        <strong>
                            ${personagem.raridade}
                        </strong>

                    </div>

                </div>



                <!-- ATRIBUTOS -->

                <h3 class="atributos-titulo">
                    ATRIBUTOS
                </h3>


                ${criarAtributo(
                    "ATAQUE",
                    personagem.ataque
                )}


                ${criarAtributo(
                    "TÉCNICA",
                    personagem.tecnica
                )}


                ${criarAtributo(
                    "VELOCIDADE",
                    personagem.velocidade
                )}


                ${criarAtributo(
                    "VISÃO",
                    personagem.visao
                )}

            </div>

        </div>



        <!-- ABAS -->

        <div class="abas-perfil">

            <button class="aba-perfil ativa">
                BIOGRAFIA
            </button>

            <button class="aba-perfil">
                HABILIDADES
            </button>

            <button class="aba-perfil">
                EVOLUÇÃO
            </button>

            <button class="aba-perfil">
                DESEMPENHO
            </button>

        </div>


        <div class="conteudo-aba">

            ${personagem.biografia}

        </div>

    `;


    /* DESTACA O CARD SELECIONADO */

    document
        .querySelectorAll(".card-biblioteca")
        .forEach(card => {

            card.classList.remove(
                "selecionado"
            );

        });


    const cardSelecionado =
        document.querySelector(
            `.card-biblioteca[data-id="${id}"]`
        );


    if (cardSelecionado) {

        cardSelecionado.classList.add(
            "selecionado"
        );

    }

}


/* =========================================
   CRIAR ATRIBUTO
========================================= */

function criarAtributo(nome, valor) {

    return `

        <div class="atributo">

            <div class="atributo-header">

                <span>
                    ${nome}
                </span>

                <strong>
                    ${valor}
                </strong>

            </div>


            <div class="barra-atributo">

                <div
                    style="width: ${valor}%;">
                </div>

            </div>

        </div>

    `;

}


/* =========================================
   PESQUISA
========================================= */

if (pesquisa) {

    pesquisa.addEventListener(
        "input",
        mostrarBiblioteca
    );

}


/* =========================================
   FILTROS
========================================= */

document
    .querySelectorAll(".filtro")
    .forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filtro")
                    .forEach(btn => {

                        btn.classList.remove(
                            "ativo"
                        );

                    });


                botao.classList.add("ativo");


                filtroAtual =
                    botao.dataset.raridade;


                mostrarBiblioteca();

            }
        );

    });


/* =========================================
   INICIALIZAÇÃO
========================================= */

mostrarBiblioteca();

mostrarPerfil("isagi");