const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

const adminEmail = "admin@gmail.com";
const adminSenha = "12344321";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    mensagem.textContent = "Preencha todos os campos.";
    mensagem.style.color = "red";
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    mensagem.textContent =
      "Informe um email válido no formato nome@gmail.com";
    mensagem.style.color = "red";
    return;
  }

  if (senha.length < 8) {
    mensagem.textContent =
      "A senha precisa ter no mínimo 8 caracteres.";
    mensagem.style.color = "red";
    return;
  }

  if (email === adminEmail && senha === adminSenha) {
    mensagem.textContent = "Login realizado com sucesso.";
    mensagem.style.color = "lightgreen";
  } else {
    mensagem.textContent = "Email ou senha incorretos.";
    mensagem.style.color = "red";
  }
});

function validarFormulario(nome, cargo, email, telefone) {

    if (
        nome === "" ||
        cargo === "Selecione o cargo" ||
        email === "" ||
        telefone === ""
    ) {
        alert("Preencha todos os campos!");
        return false;
    }

    return true;
}