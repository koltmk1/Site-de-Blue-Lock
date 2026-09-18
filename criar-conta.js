const formularioCadastro =
    document.getElementById("formCadastro");

const formularioLogin =
    document.getElementById("formLogin");


// ========================================
// SISTEMA DE CADASTRO
// ========================================

if (formularioCadastro) {

    formularioCadastro.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome = document
            .getElementById("nome")
            .value
            .trim();

        const email = document
            .getElementById("email")
            .value
            .trim()
            .toLowerCase();

        const senha = document
            .getElementById("senha")
            .value;

        const confirmarSenha = document
            .getElementById("confirmarSenha")
            .value;

        const mensagemCadastro =
            document.getElementById("mensagem-cadastro");


        // Verifica se as senhas são iguais
        if (senha !== confirmarSenha) {

            mensagemCadastro.textContent =
                "As senhas não são iguais.";

            mensagemCadastro.style.color =
                "#ff4d4d";

            return;
        }


        // Verifica se a senha tem pelo menos 6 caracteres
        if (senha.length < 6) {

            mensagemCadastro.textContent =
                "A senha precisa ter pelo menos 6 caracteres.";

            mensagemCadastro.style.color =
                "#ff4d4d";

            return;
        }


        // Cria o objeto da conta
        const usuario = {

            nome: nome,
            email: email,
            senha: senha

        };


        // Salva a conta no navegador
        localStorage.setItem(
            "usuarioBlueLock",
            JSON.stringify(usuario)
        );


        mensagemCadastro.textContent =
            "Conta criada com sucesso!";

        mensagemCadastro.style.color =
            "#00cfff";


        // Envia para a página de login
        setTimeout(function () {

            window.location.href = "login.html";

        }, 1000);

    });

}


// ========================================
// SISTEMA DE LOGIN
// ========================================

if (formularioLogin) {

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

        const mensagemLogin =
            document.getElementById("mensagem-login");


        // Procura a conta salva
        const usuarioSalvo =
            localStorage.getItem("usuarioBlueLock");


        if (!usuarioSalvo) {

            mensagemLogin.textContent =
                "Nenhuma conta encontrada. Crie uma conta primeiro.";

            mensagemLogin.style.color =
                "#ff4d4d";

            return;
        }


        const usuario =
            JSON.parse(usuarioSalvo);


        // Confere os dados
        if (
            usuario.email !== email ||
            usuario.senha !== senha
        ) {

            mensagemLogin.textContent =
                "E-mail ou senha incorretos.";

            mensagemLogin.style.color =
                "#ff4d4d";

            return;
        }


        // Salva a sessão
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

        mensagemLogin.style.color =
            "#00cfff";


        setTimeout(function () {

            window.location.href = "Inicial.html";

        }, 1000);

    });

}