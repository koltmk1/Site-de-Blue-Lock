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
        tecnica: 85,
        velocidade: 79,
        visao: 91,

        biografia: "Isagi Yoichi é um dos principais jogadores do projeto Blue Lock. Seu maior diferencial é sua capacidade de leitura do campo e posicionamento.",

        habilidades: [
            {
                descricao: "Poder de finalização e presença ofensiva."
            },
            {
                descricao: "Chute Direto: Chutes rápidos sem dominar a bola."
            },
            {
                descricao: "Constância em sua velocidade."
            },
            {
                descricao: "Meta Vision: Lê o campo inteiro e prevê as jogadas."
            }
        ],

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 77
            },
            {
                fase: "Segunda Seleção",
                overall: 80
            },
            {
                fase: "Neo Egoist League",
                overall: 88
            }
        ]
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
        biografia: "Chigiri é conhecido principalmente por sua velocidade excepcional e pela capacidade de explorar espaços no campo.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 76
            },
            {
                fase: "Segunda Seleção",
                overall: 81
            },
            {
                fase: "Neo Egoist League",
                overall: 87
            }
        ],

        habilidades: [
            { descricao: "Velocidade explosiva nas arrancadas." },
            { descricao: "Drible em alta velocidade." },
            { descricao: "Infiltrações pela ponta esquerda." },
            { descricao: "Aceleração capaz de quebrar linhas defensivas." }
        ],
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
        biografia: "Gagamaru possui capacidades físicas excepcionais e se destaca pela sua habilidade como goleiro.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 75
            },
            {
                fase: "Segunda Seleção",
                overall: 79
            },
            {
                fase: "Neo Egoist League",
                overall: 84
            }
        ],

        habilidades: [
            { descricao: "Reflexos excepcionais como goleiro." },
            { descricao: "Defesas acrobáticas." },
            { descricao: "Alcance impressionante." },
            { descricao: "Leitura rápida das finalizações." }
        ],

    },

   {
    id: "fukako",
    nome: "Fukako Gen",
    raridade: "Comum",
    imagem: "Gacha-Fukako.jpg",

    // IMPORTANTE: use GK em maiúsculo
    posicoes: ["GK"],

    altura: "191 CM",

    overall: 73,
    ataque: 67,
    tecnica: 76,
    velocidade: 73,
    visao: 62,

    desempenho: {
        partidas: 0,
        vitorias: 0,
        derrotas: 0,
        gols: 0,
        assistencias: 0
    },

    evolucao: [
        {
            fase: "Segunda Seleção",
            overall: 71
        },
        {
            fase: "Neo Egoist League",
            overall: 79
        }
    ],

    habilidades: [
        {
            descricao: "Defende mesmo sob pressão."
        },
        {
            descricao: "Alcance impressionante."
        },
        {
            descricao: "Velocidade na defesa."
        }
    ],

    biografia:
        "Fukako é o goleiro titular do Sub-20 do Japão e se destacou como um dos goleiros do projeto Blue Lock."
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
        biografia: "Raichi é um jogador agressivo e extremamente dedicado à marcação e ao confronto físico.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 73
            },
            {
                fase: "Segunda Seleção",
                overall: 76
            },
            {
                fase: "Neo Egoist League",
                overall: 81
            }
        ],

        habilidades: [
            { descricao: "Pressão intensa sobre o adversário." },
            { descricao: "Marcação física constante." },
            { descricao: "Resistência elevada." },
            { descricao: "Recuperação de bola agressiva." }
        ],

    },

    {
        id: "igarashi",
        nome: "Igarashi Gurimu",
        raridade: "Comum",
        overall: 6,
        imagem: "Gacha-Igarachi.jpg",
        posicoes: "FW",
        pe: "Direito",
        altura: "172 CM",
        ataque: 67,
        tecnica: 65,
        velocidade: 70,
        visao: 66,
        biografia: "Igarashi busca sobreviver ao projeto utilizando inteligência e estratégias próprias.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 67
            },
            {
                fase: "Segunda Seleção",
                overall: 69
            },
            {
                fase: "Neo Egoist League",
                overall: 72
            }
        ],

        habilidades: [
            { descricao: "Boa movimentação sem bola." },
            { descricao: "Aproveita oportunidades inesperadas." },
            { descricao: "Persistência durante a partida." },
            { descricao: "Capacidade de cavar faltas." }
        ],
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
        biografia: "Kuon possui boa leitura de jogo e capacidade de organização.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 71
            },
        ],
        habilidades: [
            { descricao: "Bom posicionamento ofensivo." },
            { descricao: "Jogo aéreo eficiente." },
            { descricao: "Organização tática." },
            { descricao: "Presença em bolas paradas." }
        ],
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
        biografia: "Nanase é um jogador esforçado e versátil.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 70
            },
            {
                fase: "Segunda Seleção",
                overall: 74
            },
            {
                fase: "Neo Egoist League",
                overall: 78
            }
        ],

        habilidades: [
            { descricao: "Versatilidade em campo." },
            { descricao: "Passe seguro." },
            { descricao: "Movimentação constante." },
            { descricao: "Boa participação coletiva." }
        ],
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
        biografia: "Naruhaya utiliza sua movimentação e velocidade para encontrar espaços.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 69
            },
            {
                fase: "Segunda Seleção",
                overall: 72
            },
        ],

        habilidades: [
            { descricao: "Infiltrações inteligentes." },
            { descricao: "Boa leitura de espaços." },
            { descricao: "Agilidade ofensiva." },
            { descricao: "Apoio constante ao ataque." }
        ],
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
        biografia: "Bachira é um jogador extremamente criativo, conhecido por seus dribles e estilo imprevisível.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 80
            },
            {
                fase: "Segunda Seleção",
                overall: 84
            },
            {
                fase: "Neo Egoist League",
                overall: 90
            }
        ],

        habilidades: [
            { descricao: "Dribles imprevisíveis." },
            { descricao: "Controle de bola excepcional." },
            { descricao: "Criatividade ofensiva." },
            { descricao: "Joga guiado pelo seu 'Monstro'." }
        ],
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
        biografia: "Reo possui grande versatilidade e capacidade de adaptar seu estilo de jogo.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 79
            },
            {
                fase: "Segunda Seleção",
                overall: 83
            },
            {
                fase: "Neo Egoist League",
                overall: 89
            }
        ],

        habilidades: [
            { descricao: "Cópia de movimentos adversários." },
            { descricao: "Grande versatilidade." },
            { descricao: "Passe refinado." },
            { descricao: "Excelente adaptação em campo." }
        ],
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
        biografia: "Hiori é conhecido pela precisão de seus passes e excelente leitura do campo.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 78
            },
            {
                fase: "Segunda Seleção",
                overall: 84
            },
            {
                fase: "Neo Egoist League",
                overall: 88
            }
        ],

        habilidades: [
            { descricao: "Passes extremamente precisos." },
            { descricao: "Controle do ritmo da partida." },
            { descricao: "Visão privilegiada." },
            { descricao: "Criação inteligente de jogadas." }
        ],
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
        biografia: "Tokimitsu possui força física e resistência excepcionais.",

        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 77
            },
            {
                fase: "Segunda Seleção",
                overall: 78
            },
            {
                fase: "Neo Egoist League",
                overall: 79
            }
        ],

        habilidades: [
            { descricao: "Força física impressionante." },
            { descricao: "Resistência elevada." },
            { descricao: "Explosão em corridas." },
            { descricao: "Pressão constante sobre o adversário." }
        ],
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
        biografia: "Zantetsu é conhecido por sua aceleração e velocidade.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 76
            },
            {
                fase: "Segunda Seleção",
                overall: 79
            },
            {
                fase: "Neo Egoist League",
                overall: 84
            }
        ],

        habilidades: [
            { descricao: "Aceleração instantânea." },
            { descricao: "Arrancadas explosivas." },
            { descricao: "Ataques em velocidade." },
            { descricao: "Infiltrações rápidas." }
        ],
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
        biografia: "Niko possui uma das melhores capacidades de leitura do campo entre os jogadores.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 78
            },
            {
                fase: "Segunda Seleção",
                overall: 79
            },
            {
                fase: "Neo Egoist League",
                overall: 84
            }
        ],
        habilidades: [
            { descricao: "Leitura excepcional do campo." },
            { descricao: "Interceptações inteligentes." },
            { descricao: "Marcação organizada." },
            { descricao: "Antecipação de jogadas." }
        ],
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
        biografia: "Nagi possui um talento natural extraordinário, especialmente no controle da bola.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 82
            },
            {
                fase: "Segunda Seleção",
                overall: 86
            },
            {
                fase: "Neo Egoist League",
                overall: 89
            }
        ],
        habilidades: [
            { descricao: "Controle de bola perfeito." },
            { descricao: "Domínio impossível de prever." },
            { descricao: "Finalizações naturais." },
            { descricao: "Execução extremamente precisa." }
        ],
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
        biografia: "Barou possui uma mentalidade extremamente dominante e busca assumir o protagonismo do jogo.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 85
            },
            {
                fase: "Segunda Seleção",
                overall: 88
            },
            {
                fase: "Neo Egoist League",
                overall: 90
            }
        ],
        habilidades: [
            { descricao: "Finalização extremamente poderosa." },
            { descricao: "Presença ofensiva dominante." },
            { descricao: "Chutes de longa distância." },
            { descricao: "Mentalidade de Rei." }
        ],
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
        biografia: "Kunigami é um atacante poderoso com excelente físico e chute de longa distância.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 81
            },
            {
                fase: "Segunda Seleção",
                overall: 83
            },
            {
                fase: "Neo Egoist League",
                overall: 89
            }
        ],
        habilidades: [
            { descricao: "Chute de canhão." },
            { descricao: "Grande força física." },
            { descricao: "Ataques diretos." },
            { descricao: "Presença constante na área." }
        ],
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
        biografia: "Aryu possui grande alcance físico e capacidade defensiva.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 80
            },
            {
                fase: "Segunda Seleção",
                overall: 82
            },
            {
                fase: "Neo Egoist League",
                overall: 86
            }
        ],
        habilidades: [
            { descricao: "Jogo aéreo dominante." },
            { descricao: "Grande alcance corporal." },
            { descricao: "Defesa elegante." },
            { descricao: "Cobertura eficiente." }
        ],
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
        biografia: "Otoya é especialista em movimentação e infiltrações silenciosas.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 82
            },
            {
                fase: "Segunda Seleção",
                overall: 84
            },
            {
                fase: "Neo Egoist League",
                overall: 87
            }
        ],
        habilidades: [
            { descricao: "Movimentação silenciosa." },
            { descricao: "Infiltrações inesperadas." },
            { descricao: "Velocidade nas costas da defesa." },
            { descricao: "Aparece onde ninguém espera." }
        ],
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
        biografia: "Yukimiya combina velocidade, drible e capacidade ofensiva.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 82
            },
            {
                fase: "Segunda Seleção",
                overall: 83
            },
            {
                fase: "Neo Egoist League",
                overall: 87
            }
        ],
        habilidades: [
            { descricao: "Dribles refinados." },
            { descricao: "Ataques perigosos." },
            { descricao: "Grande explosão." },
            { descricao: "Finalizações precisas." }
        ],
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
        biografia: "Kiyora possui boa técnica e capacidade de criar jogadas.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 78
            },
            {
                fase: "Segunda Seleção",
                overall: 78
            },
            {
                fase: "Neo Egoist League",
                overall: 81
            }
        ],
        habilidades: [
            { descricao: "Bom domínio de bola." },
            { descricao: "Movimentação ofensiva." },
            { descricao: "Agilidade constante." },
            { descricao: "Participação coletiva." }
        ],
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
        biografia: "Kurona possui grande velocidade e excelente capacidade de combinação.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 79
            },
            {
                fase: "Segunda Seleção",
                overall: 79
            },
            {
                fase: "Neo Egoist League",
                overall: 83
            }
        ],
        habilidades: [
            { descricao: "Tabelas extremamente rápidas." },
            { descricao: "Entrosamento perfeito." },
            { descricao: "Corridas explosivas." },
            { descricao: "Apoio ofensivo constante." }
        ],
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
        biografia: "Shidou é um atacante extremamente explosivo, conhecido por sua capacidade de finalização.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 89
            },
            {
                fase: "Segunda Seleção",
                overall: 90
            },
            {
                fase: "Neo Egoist League",
                overall: 91
            }
        ],
        habilidades: [
            { descricao: "Finalizações acrobáticas." },
            { descricao: "Execução imprevisível." },
            { descricao: "Instinto goleador." },
            { descricao: "Explosão ofensiva." }
        ],
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
        biografia: "Rin é um dos jogadores mais completos do Blue Lock e possui enorme capacidade de leitura do jogo.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 90
            },
            {
                fase: "Segunda Seleção",
                overall: 90
            },
            {
                fase: "Neo Egoist League",
                overall: 93
            }
        ],
        habilidades: [
            { descricao: "Precisão absoluta nas finalizações." },
            { descricao: "Controle técnico impecável." },
            { descricao: "Leitura completa do jogo." },
            { descricao: "Execução fria e calculada." }
        ],
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
        biografia: "Aiku é um defensor de alto nível conhecido por sua leitura defensiva.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 87
            },
            {
                fase: "Neo Egoist League",
                overall: 90
            }
        ],
        habilidades: [
            { descricao: "Leitura defensiva excepcional." },
            { descricao: "Interceptações precisas." },
            { descricao: "Liderança defensiva." },
            { descricao: "Cobertura eficiente." }
        ],
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
        biografia: "Karasu é um jogador inteligente que explora as fraquezas dos adversários.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 85
            },
            {
                fase: "Segunda Seleção",
                overall: 86
            },
            {
                fase: "Neo Egoist League",
                overall: 89
            }
        ],
        habilidades: [
            { descricao: "Explora as fraquezas do adversário." },
            { descricao: "Controle refinado." },
            { descricao: "Marcação inteligente." },
            { descricao: "Domínio do meio-campo." }
        ],
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
        biografia: "Charles possui enorme talento para criação de jogadas e passes.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 86
            },
            {
                fase: "Neo Egoist League",
                overall: 90
            }
        ],
        habilidades: [
            { descricao: "Passes geniais." },
            { descricao: "Criação extraordinária de jogadas." },
            { descricao: "Visão de elite." },
            { descricao: "Controle do ritmo ofensivo." }
        ],
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
        biografia: "Agi possui excelente físico e grande capacidade técnica.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 87
            },
            {
                fase: "Neo Egoist League",
                overall: 89
            }
        ],
        habilidades: [
            { descricao: "Presença física dominante." },
            { descricao: "Controle refinado." },
            { descricao: "Finalizações consistentes." },
            { descricao: "Boa movimentação ofensiva." }
        ],
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
        biografia: "Ness é um excelente criador de jogadas e possui grande precisão técnica.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 84
            },

            {
                fase: "Neo Egoist League",
                overall: 85
            }
        ],
        habilidades: [
            { descricao: "Passe extremamente preciso." },
            { descricao: "Controle elegante da bola." },
            { descricao: "Criação refinada de jogadas." },
            { descricao: "Grande sintonia com Kaiser." }
        ],
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
        biografia: "Julian Loki é considerado um dos maiores talentos jovens do futebol.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 93
            },
            {
                fase: "Neo Egoist League",
                overall: 95
            }
        ],
        habilidades: [
            { descricao: "Velocidade praticamente imparável." },
            { descricao: "Finalizações devastadoras." },
            { descricao: "Domínio perfeito da bola." },
            { descricao: "Leitura ofensiva excepcional." }
        ],
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
        biografia: "Vivilian Hugo é um jogador de alto nível internacional.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 92
            },
        ],
        habilidades: [
            { descricao: "Defesa refinada." },
            { descricao: "Cobertura extremamente rápida." },
            { descricao: "Excelente posicionamento." },
            { descricao: "Leitura defensiva de elite." }
        ],
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
        biografia: "Bunny Iglesias é um atacante de enorme potencial ofensivo.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 91
            },
        ],
        habilidades: [
            { descricao: "Grande presença ofensiva." },
            { descricao: "Finalizações precisas." },
            { descricao: "Movimentos explosivos." },
            { descricao: "Boa leitura do ataque." }
        ],
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
        biografia: "Michael Kaiser é um dos atacantes mais talentosos do projeto.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 94
            },
            {
                fase: "Neo Egoist League",
                overall: 95
            }
        ],
        habilidades: [
            { descricao: "Kaiser Impact: finalização de nível mundial." },
            { descricao: "Execução perfeita." },
            { descricao: "Domínio absoluto da área." },
            { descricao: "Ataques extremamente rápidos." }
        ],
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
        biografia: "Itoshi Sae é um meio-campista de nível internacional conhecido por sua técnica e visão.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 90
            },
            {
                fase: "Segunda Seleção",
                overall: 94
            },
        ],
        habilidades: [
            { descricao: "Passe de nível internacional." },
            { descricao: "Controle de bola impecável." },
            { descricao: "Visão extraordinária." },
            { descricao: "Comando absoluto do meio-campo." }
        ],
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
        biografia: "Don Lorenzo é um defensor extremamente habilidoso e imprevisível.",
        desempenho: {
            partidas: 0,
            vitorias: 0,
            derrotas: 0,
            gols: 0,
            assistencias: 0
        },

        evolucao: [
            {
                fase: "Primeira Aparição",
                overall: 93
            },
            {
                fase: "Neo Egoist League",
                overall: 94
            }
        ],
        habilidades: [
            { descricao: "Leitura defensiva extraordinária." },
            { descricao: "Marcação imprevisível." },
            { descricao: "Cobertura extremamente rápida." },
            { descricao: "Inicia contra-ataques com precisão." }
        ],
    },

// Mestres

{
    id: "Noa",

    nome: "Noel Noa",

    raridade: "Mestres",

    imagem: "Gacha-Noa.jpg",

    posicoes: ["ST", "CF"],

    altura: "188 CM",

    overall: 99,

    ataque: 99,

    tecnica: 97,

    velocidade: 96,

    visao: 98,
    biografia:"Noel Noa é considerado um dos maiores atacantes do mundo e o principal jogador da Bastard München. Conhecido por sua inteligência, precisão e domínio dos fundamentos, ele é um jogador extremamente completo que serve como referência para os atacantes do Blue Lock.",

    desempenho: {
        partidas: 0,
        vitorias: 0,
        derrotas: 0,
        gols: 0,
        assistencias: 0
    },

    evolucao: [
        {
            fase: "Primeira Aparição",
            overall: 99
        }
    ],

    habilidades: [
        { descricao: "Finalização extremamente precisa" },
        { descricao: "Excelente leitura do campo" },
        { descricao: "Domínio completo dos fundamentos" }
    ]
},

{
    id: "Lavinho",

    nome: "Lavinho",

    raridade: "Mestres",

    imagem: "Gacha-Lavinho.jpg",

    posicoes: ["ST", "CAM"],

    altura: "186 CM",

    overall: 98,

    ataque: 96,

    tecnica: 99,

    velocidade: 97,

    visao: 93,
     biografia:"Lavinho é um dos melhores atacantes do mundo e o Mestre responsável por comandar o FC Barcha. Conhecido por seu estilo criativo e seus dribles imprevisíveis, ele utiliza sua técnica para quebrar as defesas e criar oportunidades de gol.",

    desempenho: {
        partidas: 0,
        vitorias: 0,
        derrotas: 0,
        gols: 0,
        assistencias: 0
    },

    evolucao: [
        {
            fase: "Primeira Aparição",
            overall: 98
        }
    ],

    habilidades: [
        { descricao: "Dribles extremamente imprevisíveis" },
        { descricao: "Controle de bola excepcional" },
        { descricao: "Movimentação acrobática" }
    ]
},

{
    id: "Snuffy",

    nome: "Marc Snuffy",

    raridade: "Mestres",

    imagem: "Gacha-Snuffy.jpg",

    posicoes: ["ST", "CF"],

    altura: "187 CM",

    overall: 98,

    ataque: 95,

    tecnica: 96,

    velocidade: 91,

    visao: 99,
     biografia:"Marc Snuffy é um dos melhores jogadores do mundo e o Mestre responsável pelo treinamento do Ubers. Conhecido por sua inteligência e visão de jogo, ele utiliza estratégias extremamente elaboradas para transformar seus companheiros em uma equipe organizada e eficiente.",

    desempenho: {
        partidas: 0,
        vitorias: 0,
        derrotas: 0,
        gols: 0,
        assistencias: 0
    },

    evolucao: [
        {
            fase: "Primeira Aparição",
            overall: 98
        }
    ],

    habilidades: [
        { descricao: "Leitura excepcional do jogo" },
        { descricao: "Grande capacidade estratégica" },
        { descricao: "Excelente posicionamento ofensivo" }
    ]
},

{
    id: "Prince",

    nome: "Chris Prince",

    raridade: "Mestres",

    imagem: "Gacha-Prince.jpg",

    posicoes: ["ST", "CF"],

    altura: "187 CM",

    overall: 98,

    ataque: 98,

    tecnica: 95,

    velocidade: 99,

    visao: 92,
    biografia:"Chris Prince é um dos melhores atacantes do mundo e o Mestre responsável pelo Manshine City. Conhecido por seu físico excepcional e sua velocidade, ele utiliza seu treinamento e conhecimento corporal para desenvolver jogadores capazes de alcançar seu máximo potencial.",

    desempenho: {
        partidas: 0,
        vitorias: 0,
        derrotas: 0,
        gols: 0,
        assistencias: 0
    },

    evolucao: [
        {
            fase: "Primeira Aparição",
            overall: 98
        }
    ],

    habilidades: [
        { descricao: "Velocidade física impressionante" },
        { descricao: "Força e condicionamento excepcionais" },
        { descricao: "Finalização poderosa" }
    ]
},

];

/* ========================================
   ELEMENTOS
======================================== */

const listaJogadores =
    document.getElementById("listaJogadores");

const perfilJogador =
    document.getElementById("perfilJogador");

const pesquisa =
    document.getElementById("pesquisaJogador");

const contador =
    document.getElementById("contadorJogadores");


/* ========================================
   VARIÁVEIS
======================================== */

let filtroAtual = "todos";

let jogadorAtual = null;

let abaAtual = "biografia";


/* ========================================
   UTILITÁRIOS
======================================== */

function normalizarTexto(texto) {

    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


function formatarPosicoes(posicoes) {

    if (Array.isArray(posicoes)) {

        return posicoes.join(" / ");

    }

    return posicoes || "N/A";

}


/* ========================================
   ATRIBUTOS
======================================== */

function criarAtributo(nome, valor) {

    const numero = Number(valor) || 0;

    return `

        <div class="atributo">

            <div class="atributo-header">

                <span>${nome}</span>

                <strong>${numero}</strong>

            </div>

            <div class="barra-atributo">

                <div style="width:${numero}%"></div>

            </div>

        </div>

    `;

}


/* ========================================
   BIBLIOTECA
======================================== */

function mostrarBiblioteca() {

    if (!listaJogadores) return;

    listaJogadores.innerHTML = "";

    const textoPesquisa = pesquisa
        ? normalizarTexto(pesquisa.value)
        : "";


    /*
       Garante que o filtro TODOS
       sempre funcione.
    */

    const raridadeSelecionada =
        normalizarTexto(filtroAtual || "todos");


    /*
       Filtra os personagens
    */

    const jogadoresFiltrados = personagens.filter(
        personagem => {

            const nomePersonagem =
                normalizarTexto(personagem.nome);


            const raridadePersonagem =
                normalizarTexto(personagem.raridade);


            const combinaBusca =
                nomePersonagem.includes(textoPesquisa);


            /*
               TODOS não filtra por raridade.
            */

            const combinaRaridade =
                raridadeSelecionada === "todos" ||
                raridadePersonagem ===
                raridadeSelecionada;


            return combinaBusca && combinaRaridade;

        }
    );


    /*
       Contador
    */

    if (contador) {

        contador.textContent =
            `${jogadoresFiltrados.length} JOGADORES`;

    }


    /*
       Criação dos cards
    */

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

                    ${formatarPosicoes(
                        personagem.posicoes
                    )}

                </p>

                <div class="card-overall">

                    OVR ${personagem.overall}

                </div>

            </div>

        `;


        /*
           Clique no card
        */

        card.addEventListener("click", () => {

            mostrarPerfil(personagem.id);

        });


        listaJogadores.appendChild(card);

    });


    destacarJogadorSelecionado();

}


/* ========================================
   DESTAQUE DO CARD SELECIONADO
======================================== */

function destacarJogadorSelecionado() {

    document
        .querySelectorAll(".card-biblioteca")
        .forEach(card => {

            card.classList.toggle(

                "selecionado",

                jogadorAtual &&
                card.dataset.id === jogadorAtual.id

            );

        });

}


/* ========================================
   PESQUISA
======================================== */

if (pesquisa) {

    pesquisa.addEventListener(
        "input",
        mostrarBiblioteca
    );

}


/* ========================================
   FILTROS
======================================== */

document
    .querySelectorAll(".filtro")
    .forEach(botao => {

        botao.addEventListener("click", () => {


            /*
               Remove ativo de todos
            */

            document
                .querySelectorAll(".filtro")
                .forEach(btn => {

                    btn.classList.remove("ativo");

                });


            botao.classList.add("ativo");


            /*
               Pega a raridade do botão
            */

            const valorFiltro =
                botao.dataset.raridade;


            /*
               Se o botão não tiver
               data-raridade, usa TODOS.
            */

            filtroAtual =
                valorFiltro
                    ? normalizarTexto(valorFiltro)
                    : "todos";


            mostrarBiblioteca();

        });

    });


/* ========================================
   PERFIL DO JOGADOR
======================================== */

function mostrarPerfil(id) {

    const personagem =
        personagens.find(
            p => p.id === id
        );


    if (!personagem || !perfilJogador) return;


    jogadorAtual = personagem;

    abaAtual = "biografia";


    perfilJogador.innerHTML = `

        <div class="perfil-principal">


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

                    ${formatarPosicoes(
                        personagem.posicoes
                    )}

                </p>


                <div class="overall-perfil">

                    <span>OVERALL</span>

                    <strong>

                        ${personagem.overall}

                    </strong>

                </div>

            </div>


            <div class="info-perfil">

                <h3 class="titulo-info">

                    VISÃO GERAL

                </h3>


                <div class="info-grid">


                    <div class="info-box-perfil">

                        <span>POSIÇÃO</span>

                        <strong>

                            ${formatarPosicoes(
                                personagem.posicoes
                            )}

                        </strong>

                    </div>


                    <div class="info-box-perfil">

                        <span>PÉ DOMINANTE</span>

                        <strong>

                            ${personagem.pe || "N/A"}

                        </strong>

                    </div>


                    <div class="info-box-perfil">

                        <span>ALTURA</span>

                        <strong>

                            ${personagem.altura || "N/A"}

                        </strong>

                    </div>


                    <div class="info-box-perfil">

                        <span>RARIDADE</span>

                        <strong>

                            ${personagem.raridade}

                        </strong>

                    </div>


                </div>


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


        <div class="abas-perfil">


            <button
                class="aba-perfil ativa"
                data-aba="biografia"
            >

                BIOGRAFIA

            </button>


            <button
                class="aba-perfil"
                data-aba="habilidades"
            >

                HABILIDADES

            </button>


            <button
                class="aba-perfil"
                data-aba="evolucao"
            >

                EVOLUÇÃO

            </button>


            <button
                class="aba-perfil"
                data-aba="desempenho"
            >

                DESEMPENHO

            </button>


        </div>


        <div
            class="conteudo-aba"
            id="conteudo-aba"
        ></div>

    `;


    /*
       Eventos das abas
    */

    perfilJogador
        .querySelectorAll(".aba-perfil")
        .forEach(botao => {

            botao.addEventListener("click", () => {

                trocarAba(
                    botao.dataset.aba
                );

            });

        });


    renderizarAba();

    destacarJogadorSelecionado();

}


/* ========================================
   TROCA DE ABAS
======================================== */

function trocarAba(aba) {

    abaAtual = aba;


    perfilJogador
        .querySelectorAll(".aba-perfil")
        .forEach(botao => {

            botao.classList.toggle(

                "ativa",

                botao.dataset.aba === aba

            );

        });


    renderizarAba();

}


/* ========================================
   CONTEÚDO DAS ABAS
======================================== */

function renderizarAba() {

    const conteudo =
        document.getElementById("conteudo-aba");


    if (!conteudo || !jogadorAtual) return;


    switch (abaAtual) {


        /* ========================================
           BIOGRAFIA
        ======================================== */

        case "biografia":

            conteudo.innerHTML = `

                <p>

                    ${jogadorAtual.biografia ||
                    "Sem biografia cadastrada."}

                </p>

            `;

            break;


        /* ========================================
           HABILIDADES
        ======================================== */

        case "habilidades": {

            const habilidades =
                Array.isArray(
                    jogadorAtual.habilidades
                )
                    ? jogadorAtual.habilidades
                    : [];


            conteudo.innerHTML = habilidades.length

                ? habilidades.map(habilidade => `

                    <div class="linha-info">

                        <p>

                            ${habilidade.descricao}

                        </p>

                    </div>

                `).join("")

                : `

                    <p>

                        Sem habilidades cadastradas.

                    </p>

                `;

            break;

        }


        /* ========================================
           EVOLUÇÃO
        ======================================== */

        case "evolucao": {

            const evolucao =
                Array.isArray(
                    jogadorAtual.evolucao
                )
                    ? jogadorAtual.evolucao
                    : [];


            conteudo.innerHTML = evolucao.length

                ? evolucao.map(fase => `

                    <div class="fase-card">

                        <span>

                            ${fase.fase}

                        </span>

                        <strong>

                            OVR ${fase.overall}

                        </strong>

                    </div>

                `).join("")

                : `

                    <p>

                        Sem evolução cadastrada.

                    </p>

                `;

            break;

        }


        /* ========================================
           DESEMPENHO
        ======================================== */

        case "desempenho": {

            const d =
                jogadorAtual.desempenho || {

                    partidas: 0,

                    vitorias: 0,

                    derrotas: 0,

                    gols: 0,

                    assistencias: 0

                };


            conteudo.innerHTML = `

                <div class="grid-desempenho">


                    <div class="stat-card">

                        <span>PARTIDAS</span>

                        <strong>

                            ${d.partidas || 0}

                        </strong>

                    </div>


                    <div class="stat-card">

                        <span>VITÓRIAS</span>

                        <strong>

                            ${d.vitorias || 0}

                        </strong>

                    </div>


                    <div class="stat-card">

                        <span>DERROTAS</span>

                        <strong>

                            ${d.derrotas || 0}

                        </strong>

                    </div>


                    <div class="stat-card">

                        <span>GOLS</span>

                        <strong>

                            ${d.gols || 0}

                        </strong>

                    </div>


                    <div class="stat-card">

                        <span>ASSISTÊNCIAS</span>

                        <strong>

                            ${d.assistencias || 0}

                        </strong>

                    </div>


                </div>

            `;

            break;

        }

    }

}


/* ========================================
   INICIALIZAÇÃO
======================================== */

function inicializarJogadores() {

    /*
       Garante que TODOS seja
       o filtro inicial.
    */

    filtroAtual = "todos";


    /*
       Marca o botão TODOS
       como ativo.
    */

    document
        .querySelectorAll(".filtro")
        .forEach(botao => {

            const valor =
                normalizarTexto(
                    botao.dataset.raridade
                );


            botao.classList.toggle(

                "ativo",

                valor === "todos"

            );

        });


    mostrarBiblioteca();


    /*
       Abre o Isagi por padrão,
       caso ele exista.
    */

    const isagi =
        personagens.find(
            p => p.id === "isagi"
        );


    if (isagi) {

        mostrarPerfil("isagi");

    }

}


inicializarJogadores();