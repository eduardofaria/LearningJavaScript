function mostrarPromocao() {
  // Seletores dos elementos HTML
  var inVeiculo = document.getElementById("inVeiculo");
  var inPreco = document.getElementById("inPreco");
  var outPromo = document.getElementById("outPromo");
  var outPagamento = document.getElementById("outPagamento");
  var outParcelas = document.getElementById("outParcelas");

  //Captura dados
  var veiculo = inVeiculo.value;
  var preco = Number(inPreco.value);

  //Escrever nome do Veículo
  outPromo.textContent = "Promoção: " + veiculo;

  // Calcular Pagamento
  var pagamento = preco * 0.5;
  var parcelamento = preco - pagamento;
  var parcelas = parcelamento / 12;

  // Escrever o pagamento
  outPagamento.textContent = "Entrada de R$ " + pagamento.toFixed(2);
  outParcelas.textContent = "+ 12x de R$ " + parcelas.toFixed(2);


}

//Seletor BTN
var btnPromo = document.getElementById("btnPromo");
// Ação do botão
btnPromo.addEventListener("click", mostrarPromocao);



/*Dica aprendida:

COLOQUE SEMPRE O NOME DO QUE VC QUER USAR PRIMEIRO,
DEPOIS É QUE VC COLOCA A AÇÃO QUE QUER FAZER COM ELE. EX:

Correto - btnPromo.addEventListener("click", mostrarPromocao);
ERRADO - addEventListener.btnPromo("click", mostrarPromocao);

Correto - outPromo.textContent = "Promoção: " + veiculo;
ERRADO - textContent.outPromo = "Promoção: " + veiculo;

CORRETO:
textContent.outPromo = ""
ERRADO:
textContent.outPromo("")

*/
