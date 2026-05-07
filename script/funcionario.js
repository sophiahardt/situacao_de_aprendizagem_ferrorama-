const formFuncionario = document.getElementById("formFuncionario");

formFuncionario.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const formularioValido = validarFormulario(
        nome,
        cargo,
        email,
        telefone
    );

    if (formularioValido) {

        alert("Funcionário cadastrado com sucesso!");

        formFuncionario.reset();

        window.location.href = "tela-geral-home.html";
    }
});