function promoFarmacia() {
  // Seletor dos elementos
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outPromo = document.getElementById("outPromo");
  var outPreco = document.getElementById("outPreco");

  // Capturar valores
  var nomeMed = inMedicamento.value;
  var precoUni = Number(inPreco.value);

  // calcular promoFarmacia
  var totalUni = precoUni * 2;
  var desconto = Math.floor(totalUni);

  // escrever promoção
  var promoTitle = outPromo;
  var promoTotal = outPreco;
  promoTitle.textContent = "Promoção de " + nomeMed;
  promoTotal.textContent = "Leve 2 por apenas R$: " + desconto.toFixed(2);
}
var btnPromo = document.getElementById("btnPromo");
btnPromo.addEventListener("click", promoFarmacia);
