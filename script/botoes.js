function cancelarFormulario() {
    form?.reset();
    redirecionar("tela-geral-home.html");
}

function sairDoSistema(event) {
    event.preventDefault();

    const confirmarSaida = confirm(
        "Admin João, você realmente deseja sair do sistema?"
    );

    if (confirmarSaida) {
        redirecionar("index.html");
    }
}

botaoCancelar?.addEventListener("click", cancelarFormulario);
botaoSair?.addEventListener("click", sairDoSistema);