const formularioLogin = document.getElementById("formLogin");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value.trim().toLowerCase();
        const senha = document.getElementById("senha").value;

        const mensagem = document.getElementById("mensagem-login");

        // Procura a conta salva
        const usuarioSalvo = localStorage.getItem("usuarioBlueLock");

        // Caso não exista nenhuma conta
        if (!usuarioSalvo) {
            mensagem.textContent = "Nenhuma conta foi cadastrada ainda.";
            mensagem.style.color = "red";
            return;
        }

        let usuario;

        try {
            usuario = JSON.parse(usuarioSalvo);
        } catch (erro) {
            mensagem.textContent = "Erro ao carregar a conta.";
            mensagem.style.color = "red";
            return;
        }

        // Verifica e-mail e senha
        if (usuario.email !== email || usuario.senha !== senha) {
            mensagem.textContent = "E-mail ou senha incorretos.";
            mensagem.style.color = "red";
            return;
        }

        // Login realizado
        localStorage.setItem("usuarioLogado", "true");
        localStorage.setItem("usuarioAtual", JSON.stringify(usuario));

        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";

        // Vai para a página inicial
        setTimeout(function () {
            window.location.href = "Inicial.html";
        }, 1000);
    });
}