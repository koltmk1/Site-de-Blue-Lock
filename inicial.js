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

const personagens = [
    {
        nome: "Isagi Yoichi",
        imagem: "Primeira fase.jpg",
        raridade: "Raro"
    },

    {
        nome: "Meguru Bachira",
        imagem: "Linguinha.jpg",
        raridade: "Raro"
    },

    {
        nome: "Nagi Seishiro",
        imagem: "Gênio Preguiçoso.jpg",
        raridade: "Épico"
    },

    {
        nome: "Hyoma Chigiri",
        imagem: "Pantera Vermelha.jpg",
        raridade: "Raro"
    }
];