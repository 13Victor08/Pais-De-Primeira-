document.addEventListener("DOMContentLoaded", function () {
    const botaoCalcular = document.getElementById("btn-calcular");
    
    if (botaoCalcular) {
        botaoCalcular.addEventListener("click", calcularGravidez);
    }
});

function calcularGravidez() {
    const inputData = document.getElementById("data-dum").value;
    const resultadoDiv = document.getElementById("resultado-calculadora");

    if (!inputData) {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, insira a data da sua última menstruação.</p>";
        return;
    }

    // Converte a data inserida e a data atual
    const dataDum = new Date(inputData);
    const dataHoje = new Date();
    
    // Zera as horas para o cálculo ser exato por dias
    dataDum.setHours(0,0,0,0);
    dataHoje.setHours(0,0,0,0);

    // Validação: a data não pode ser no futuro
    if (dataDum > dataHoje) {
        resultadoDiv.innerHTML = "<p style='color: red;'>A data da última menstruação não pode ser maior que a data de hoje.</p>";
        return;
    }

    // Calcula a diferença em milissegundos e converte para dias
    const diferencaTempo = dataHoje.getTime() - dataDum.getTime();
    const diferencaDias = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));

    // Calcula semanas e dias restantes
    const semanas = Math.floor(diferencaDias / 7);
    const diasRestantes = diferencaDias % 7;

    // Validação médica padrão: gestação humana dura cerca de 40 semanas (280 dias)
    if (semanas > 42) {
        resultadoDiv.innerHTML = "<p style='color: orange;'>De acordo com a data inserida, o bebê já deve ter nascido! Revise a data informada.</p>";
        return;
    }

    // Calcula a Data Provável do Parto (DUM + 280 dias)
    const dataDpp = new Date(dataDum);
    dataDpp.setDate(dataDpp.getDate() + 280);

    // Formata a data de parto para o padrão brasileiro (DD/MM/AAAA)
    const opcoesFormato = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const dppFormatada = dataDpp.toLocaleDateString('pt-BR', opcoesFormato);

    // Exibe o resultado final na tela
    resultadoDiv.innerHTML = `
        <div style="background-color: #f0f8ff; padding: 15px; border-radius: 8px; margin-top: 15px; border: 1px solid #b0e0e6;">
            <h3 style="color: #008b8b; margin-top: 0;">Seu Resultado:</h3>
            <p><strong>Idade Gestacional Atual:</strong> ${semanas} semanas e ${diasRestantes} dias.</p>
            <p><strong>Data Provável do Parto (DPP):</strong> ${dppFormatada}</p>
            <small style="color: #666; display: block; margin-top: 10px;">
                *Este cálculo é baseado na regra padrão e tem fins educativos. Certifique-se de confirmar as informações com o rótulo físico e exames médicos.
            </small>
        </div>
    `;
}

<div class="calculadora-container">
    <h2>Calculadora da Gravidez</h2>
    <p>Insira a data da sua Última Menstruação (DUM) para acompanhar sua gestação:</p>
    
    <!-- Campo de Entrada da Data -->
    <input type="date" id="data-dum" class="form-input">
    
    <!-- Botão de Disparo -->
    <button id="btn-calcular" class="btn-principal">Calcular minha gestação</button>
    
    <!-- Local onde o JavaScript vai injetar a resposta -->
    <div id="resultado-calculadora"></div>
</div>

<!-- Não esqueça de puxar o arquivo JS antes de fechar a tag </body> -->
<script src="calculadora.js"></script>
  
