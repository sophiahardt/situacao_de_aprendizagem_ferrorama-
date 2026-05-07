const form = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("validação rodando");

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    mensagem.textContent = "Preencha todos os campos.";
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    mensagem.textContent = "Informe um email válido no formato nome@gmail.com";
    return;
  }

  if (senha.length < 8) {
    mensagem.textContent = "A senha precisa ter no mínimo 8 caracteres.";
    return;
  }

  mensagem.textContent = "Login realizado com sucesso.";
});