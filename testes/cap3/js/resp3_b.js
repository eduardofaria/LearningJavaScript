function calcularMulta() {
    //DOM
    var inPermitida = document.getElementById("inPermitida");
    var inCondutor = document.getElementById("inCondutor");
    var outMulta = document.getElementById("outMulta");
    
    // capturar valores
    var limite = Number(inPermitida.value);
    var velocidade = Number(inCondutor.value);

    //validação dos campos
    if (limite == 0 || velocidade == 0 || isNaN(limite) || isNaN(velocidade)) {
        alert("Preencha os campos corretamente.");
        inPermitida.value = "";
        inCondutor.value = "";
        inPermitida.focus();
        return;
    }

    // cálculo da multa
    if (velocidade <= limite) {
        outMulta.textContent = "Sem Multa";
        outMulta.style.color = "green";
    }

    if (velocidade > limite && velocidade <= (limite + (limite * 0.2))) {
        outMulta.textContent = "Multa Leve";
        outMulta.style.color = "orange";
    }

    if (velocidade > (limite + (limite * 0.2))) {
        outMulta.textContent = "Multa Grave";
        outMulta.style.color = "red";
    }
}

//Acão do botão
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularMulta);