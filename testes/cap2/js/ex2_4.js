// Restaurant JS
function ValorPagar() {
  // seletores do formulário
  var inValorKilo = document.getElementById("inValorKilo");
  var inConsumoGr = document.getElementById("inConsumoGr");
  var outTotal = document.getElementById("outTotal");

  //inputs do formulário
  var precoKilo = Number(inValorKilo.value);
  var totalGramas = Number(inConsumoGr.value);
  var totalPagamento = outTotal;
  //Converter gramas em Kilo
  var total = (totalGramas / 1000) * precoKilo;
  // Escrever o preço total
  totalPagamento.textContent = "Valor a pagar R$: " + total.toFixed(2);
}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", ValorPagar);
