function verPromocao() {
  // cria referência aos elementos da página
  var inProduto = document.getElementById("inProduto");
  var inPreco = document.getElementById("inPreco");
  var outPromocao = document.getElementById("outPromocao");
  var outPrecoTerceiro = document.getElementById("outPrecoTerceiro");

  // obtém conteúdo dos campos de entrada
  var produto = inProduto.value;
  var preco = Number(inPreco.value);

  // calcula valores
  var terceiro = preco / 2;
  var total = (preco * 2) + terceiro;

  // exibe resposta
  outPromocao.textContent = produto + " - Promoção: Leve 3 por R$: " + total.toFixed(2);
  outPrecoTerceiro.textContent = "O 3º produto custa apenas R$: " + terceiro.toFixed(2);
}
// cria referência ao botão e associa function à ocorrência do evento click neste botão
var btVer = document.getElementById("btVer");
btVer.addEventListener("click", verPromocao);