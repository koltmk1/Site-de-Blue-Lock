


const formularioLogin = document.getElementById("formLogin");

const mensagemLogin = document.getElementById("mensagem-login");

formularioLogin.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document
        .getElementById("email")
        .value
        .trim()
        .toLowerCase();

    const senha = document
        .getElementById("senha")
        .value;

    // Busca a conta salva no navegador
    const usuarioSalvo = localStorage.getItem("usuarioBlueLock");

    // Verifica se existe alguma conta
    if (!usuarioSalvo) {

        mensagemLogin.textContent =
            "Nenhuma conta foi encontrada. Crie uma conta primeiro.";

        mensagemLogin.style.color = "#ff4d4d";

        return;
    }

    let usuario;

    try {

        usuario = JSON.parse(usuarioSalvo);

    } catch (erro) {

        mensagemLogin.textContent =
            "A conta salva está corrompida. Faça o cadastro novamente.";

        mensagemLogin.style.color = "#ff4d4d";

        localStorage.removeItem("usuarioBlueLock");

        return;
    }

    // Verifica e-mail e senha
    if (
        usuario.email.toLowerCase() !== email ||
        usuario.senha !== senha
    ) {

        mensagemLogin.textContent =
            "E-mail ou senha incorretos.";

        mensagemLogin.style.color = "#ff4d4d";

        return;
    }

    // Cria a sessão do usuário
    localStorage.setItem("usuarioLogado", "true");

    localStorage.setItem(
        "usuarioAtual",
        JSON.stringify(usuario)
    );

    mensagemLogin.textContent =
        "Login realizado com sucesso!";

    mensagemLogin.style.color = "#00cfff";

    // Redireciona para a página inicial
    setTimeout(function () {

        window.location.href = "Inicial.html";

    }, 1000);

});

const usuario = {
    nome: nome,
    email: email.toLowerCase(),
    senha: senha
};

localStorage.setItem(
    "usuarioBlueLock",
    JSON.stringify(usuario)
);
