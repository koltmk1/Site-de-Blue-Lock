
const formularioLogin =
    document.getElementById("formLogin");

const mensagemLogin =
    document.getElementById("mensagem-login");


formularioLogin.addEventListener("submit", function(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();

    const senha =
        document.getElementById("senha").value;


    // =========================
    // PEGAR CONTA SALVA
    // =========================

    const usuario =
        JSON.parse(
            localStorage.getItem("usuarioBlueLock")
        );


    // =========================
    // VERIFICAR SE EXISTE
    // =========================

    if (!usuario) {

        mensagemLogin.textContent =
            "Nenhuma conta foi encontrada.";

        mensagemLogin.style.color = "#ff4d4d";

        return;

    }


    // =========================
    // VERIFICAR LOGIN
    // =========================

    if (
        usuario.email !== email ||
        usuario.senha !== senha
    ) {

        mensagemLogin.textContent =
            "E-mail ou senha incorretos.";

        mensagemLogin.style.color = "#ff4d4d";

        return;

    }


    // =========================
    // CRIAR SESSÃO
    // =========================

    localStorage.setItem(
        "usuarioLogado",
        "true"
    );


    localStorage.setItem(
        "usuarioAtual",
        JSON.stringify(usuario)
    );


    mensagemLogin.textContent =
        "Login realizado com sucesso!";

    mensagemLogin.style.color = "#00cfff";


    // =========================
    // IR PARA O PERFIL
    // =========================

    setTimeout(function() {

        window.location.href = "inicial.html";

    }, 1000);

});

