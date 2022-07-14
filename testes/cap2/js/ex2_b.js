function cobrarHoras() {
    //seletores html
    var inPreco = document.getElementById("inPreco");
    var inTempo = document.getElementById("inTempo");
    var outPagar = document.getElementById("outPagar");

    //capturando valores
    var precoSlice = Number(inPreco.value);
    var tempoTotal = Number(inTempo.value);
    //calculando
    var tempoSlices = Math.ceil(tempoTotal / 15);
    var precoTotal = tempoSlices * precoSlice;

    //escrever resultado
    outPagar.textContent = "Valor a Pagar R$: " + precoTotal.toFixed(2);

}
// Botão de cálculo
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", cobrarHoras);