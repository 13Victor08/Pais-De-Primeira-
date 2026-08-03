function calcularGestacao() {
    alert("A função foi executada!");

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
