const formularioCadastro = document.getElementById("formCadastro");

if (formularioCadastro) {
    formularioCadastro.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim().toLowerCase();
        const senha = document.getElementById("senha").value;
        const confirmarSenha = document.getElementById("confirmarSenha").value;

        const mensagem = document.getElementById("mensagem-cadastro");

        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {
            mensagem.textContent = "As senhas não são iguais.";
            mensagem.style.color = "red";
            return;
        }

        // Verifica tamanho da senha
        if (senha.length < 6) {
            mensagem.textContent = "A senha precisa ter pelo menos 6 caracteres.";
            mensagem.style.color = "red";
            return;
        }

        // Cria o objeto do usuário
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        // Salva a conta
        localStorage.setItem("usuarioBlueLock", JSON.stringify(usuario));

        mensagem.textContent = "Conta criada com sucesso!";
        mensagem.style.color = "green";

        // Vai para a tela de login
        setTimeout(function () {
            window.location.href = "entrar-conta.html";
        }, 1000);
    });
}

