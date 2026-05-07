const botaoCancelar = document.querySelector(".btn-outline-secondary");

if (botaoCancelar) {
    botaoCancelar.addEventListener("click", function () {
        const form = document.querySelector("form");
        if (form) form.reset();
        window.location.href = "tela-geral-home.html";
    });
}

const botaoSair = document.getElementById("linkSair");

if (botaoSair) {
    botaoSair.addEventListener("click", function (event) {
        event.preventDefault(); 
        if (confirm("Admin João, você realmente deseja sair do sistema?")) {
            window.location.href = "index.html"; 
        }
    });
}