// =========================
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
