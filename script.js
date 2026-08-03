function calcularGestacao() {

    const dum = document.getElementById("dum").value;

    if (!dum) {
        alert("Selecione a data da última menstruação.");
        return;
    }

    const inicio = new Date(dum);
    const hoje = new Date();

    const diferenca = hoje - inicio;
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(dias / 7);

    document.getElementById("resultado").style.display = "block";
    document.getElementById("semanas").innerHTML =
        "🤰 Você está com <strong>" + semanas + " semanas</strong> de gestação.";

}// =========================
// Pais de Primeira - v3.0
// =========================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Pais de Primeira carregado com sucesso!");

    const botoes = document.querySelectorAll(".botao");

    botoes.forEach((botao) => {
        botao.addEventListener("mouseenter", () => {
            botao.style.transform = "scale(1.05)";
        });

        botao.addEventListener("mouseleave", () => {
            botao.style.transform = "scale(1)";
        });
    });

});
