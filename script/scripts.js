const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const resultado = validarLogin(email, senha);

    if (resultado === "sucesso") {

        mensagem.textContent = "Login realizado com sucesso.";
        mensagem.style.color = "lightgreen";

        window.location.href = "tela-geral-home.html";

    } else {

        mensagem.textContent = resultado;
        mensagem.style.color = "red";
    }
});