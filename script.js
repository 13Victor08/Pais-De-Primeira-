/* ==========================================
   PAIS DE PRIMEIRA V7
   Desenvolvido por João Victor Souza
========================================== */

function calcularGestacao() {

    const dum = document.getElementById("dum").value;

    if (!dum) {
        alert("Selecione a data da última menstruação.");
        return;
    }

    const inicio = new Date(dum);
    const hoje = new Date();

    const dias = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));

    const semanas = Math.floor(dias / 7);

    const meses = (semanas / 4.345).toFixed(1);

    const parto = new Date(inicio);
    parto.setDate(parto.getDate() + 280);

    let fase = "";

    if (semanas <= 12) {
        fase = "🌱 Primeiro trimestre";
    } else if (semanas <= 27) {
        fase = "💙 Segundo trimestre";
    } else if (semanas <= 40) {
        fase = "👶 Terceiro trimestre";
    } else {
        fase = "🎉 A data prevista já passou. Consulte seu médico.";
    }

    document.getElementById("resultado").style.display = "block";

    document.getElementById("semanas").innerHTML =
        "<strong>Semanas:</strong> " + semanas;

    document.getElementById("meses").innerHTML =
        "<strong>Meses aproximados:</strong> " + meses;

    document.getElementById("parto").innerHTML =
        "<strong>Data provável do parto:</strong> " +
        parto.toLocaleDateString("pt-BR");

    document.getElementById("fase").innerHTML =
        "<strong>Fase da gravidez:</strong> " + fase;

    let progresso = (semanas / 40) * 100;

    if (progresso > 100) {
        progresso = 100;
    }

    document.getElementById("barra").style.width = progresso + "%";

}

/* ==========================================
   V7 - Inicialização do Site
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Pais de Primeira V7 carregado.");

});

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.id = "voltarTopo";

document.body.appendChild(botaoTopo);

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.background = "#2563eb";
botaoTopo.style.color = "#fff";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.display = "none";
botaoTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";
botaoTopo.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        botaoTopo.style.display = "block";

    } else {

        botaoTopo.style.display = "none";

    }

});

botaoTopo.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/* ==========================================
   ANIMAÇÃO DOS CARDS AO ROLAR A PÁGINA
========================================== */

const elementos = document.querySelectorAll(".card, .hero");

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "all .6s ease";

    observador.observe(elemento);

});

/* ==========================================
   ANO AUTOMÁTICO NO RODAPÉ
========================================== */

const ano = document.getElementById("ano");

if (ano) {
    ano.textContent = new Date().getFullYear();
}

/* ==========================================
   PAIS DE PRIMEIRA V7
   SCRIPT FINAL
========================================== */

/* Mensagem de boas-vindas */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ Pais de Primeira V7 carregado com sucesso!");

});


/* Rolagem suave para links internos */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* Efeito de destaque ao passar o mouse nos cards */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});
