const form = document.querySelector("form");

const botaoCancelar = document.querySelector(".btn-outline-secondary");

botaoCancelar.addEventListener("click", function () {
    form.reset();
});