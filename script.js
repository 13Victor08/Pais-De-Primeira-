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

