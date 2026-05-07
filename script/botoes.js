const botaoCancelar = document.querySelector(".btn-outline-secondary");

botaoCancelar.addEventListener("click", function () {

    const form = document.querySelector("form");

    form.reset();
});