function trocoParquimetro() {
    //DOMs
    var inPago = document.getElementById("inPago");
    var tempo = document.getElementById("outTempo");
    var troco = document.getElementById("outTroco");
    //Input de Valores
    var pago = Number(inPago.value);

    //tabela
    var t30 = 1;
    var t60 = 1.75;
    var t120 = 3;

    /*
    DÚVIDA

    Por que não funciona:
    var outTempo = document.getElementById("outTempo");
    var tempo = outTempo.textContent
    tempo = "teste"

    Funciona no alert, mas não escreve "teste" na tag com o ID;

    */


    // filtro
    if (pago == 0 || isNaN(pago)){
        alert("Insira um valor válido.");
        tempo.textContent = "";
        troco.textContent = "";
        inPago.value = "";
        inPago.focus;
        return;
    }

    // valor insuficiente
    if (pago < t30) {
        alert("Valor insuficiente.");
        tempo.textContent = "";
        troco.textContent = "";
        inPago.value = "";
        inPago.focus;
        return;
    }

    // cálculo & troco
    if (pago >= t30 && pago < t60) {
        tempo.textContent = "Tempo: 30 min";
        troco.textContent = "Troco R$: " + (pago - t30).toFixed(2);
    }

    if (pago >= t60 && pago < t120) {
        tempo.textContent = "Tempo: 60 min";
        troco.textContent = "Troco R$: " + (pago - t60).toFixed(2); 
    }

    if (pago >= t120) {
        tempo.textContent = "Tempo: 120 min";
        troco.textContent = "Troco R$: " + (pago - t120).toFixed(2);
    }
}

//Botão
var calcular = document.getElementById("btnCalcular");
calcular.addEventListener("click", trocoParquimetro);