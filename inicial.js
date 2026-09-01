document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

const raridades = {
    comum: ["Isagi", "Kunigami", "Chigiri"],
    raro: ["Bachira", "Nagi"],
    epico: ["Rin", "Barou"],
    lendario: ["Shidou"],
    newgen: ["Loki", "Hugo", "Bunny"]
};

const personagens = [
    {
        nome: "Isagi",
        raridade: "Comum",
        chance: 60,
        imagem: "./img/Primeira fase.jpg"
    },
    {
        nome: "Bachira",
        raridade: "Raro",
        chance: 25,
        imagem: "./img/Linguinha.jpg"
    },
    {
        nome: "Rin",
        raridade: "Épico",
        chance: 10,
        imagem: "./img/Corte de água.jpg"
    },
    {
        nome: "Shidou",
        raridade: "Lendário",
        chance: 4,
        imagem: "./img/shidou.webp"
    },
    {
        nome: "Loki",
        raridade: "New Gen",
        chance: 1,
        imagem: "./img/loki pro site.jpg"
    }
];

function sortearPersonagem() {
    let numero = Math.random() * 100;
    let acumulado = 0;

    for (let personagem of personagens) {
        acumulado += personagem.chance;

        if (numero <= acumulado) {
            return personagem;
        }
    }
}

const botao = document.getElementById("girar");

botao.addEventListener("click", revelar);

function revelar() {
    const personagem = sortearPersonagem();

    document.getElementById("imgPersonagem").src = personagem.imagem;
    document.getElementById("nomePersonagem").textContent = personagem.nome;
    document.getElementById("raridade").textContent = personagem.raridade;
}

function revelar() {

    const img = document.getElementById("imgPersonagem");

    img.classList.add("abrindo");

    setTimeout(() => {

        const personagem = sortearPersonagem();

        img.src = personagem.imagem;
        document.getElementById("nomePersonagem").textContent = personagem.nome;
        document.getElementById("raridade").textContent = personagem.raridade;

        img.classList.remove("abrindo");

    }, 2000);

}