function mostrarPromocao() {
  // cria referência aos elementos da página
  var inMedicamento = document.getElementById("inMedicamento");
  var inPreco = document.getElementById("inPreco");
  var outMedicamento = document.getElementById("outMedicamento");
  var outPromocao = document.getElementById("outPromocao");

  // obtém conteúdo dos campos de entrada
  var medicamento = inMedicamento.value;
  var preco = Number(inPreco.value);

  // calcula valor da promoção (arredonda para baixo)
  var promocao = Math.floor(preco * 2);

  // exibe a resposta
  outMedicamento.textContent = "Promoção de " + medicamento;
  outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}
// cria referência ao botão e associa function mostrarPromocao à ocorrência do evento click neste botão
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarPromocao);