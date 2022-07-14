// cria uma referência ao botão
var btExibir = document.getElementById("btExibir");
// ao clicar no botão, a programação da função anônima será executada
btExibir.addEventListener("click", function () {
  // cria referência aos elementos da página
  var inPreco = document.getElementById("inPreco");
  var outParcelas = document.getElementById("outParcelas");

  // obtém o conteúdo do campo de entrada
  var preco = Number(inPreco.value);

  // vai acumular as formas de pagamento
  var lista = "";

  // cria uma repetição para montar as opções de pagamento
  for (var i = 1; i <= 10; i++) {
    // acumula em lista o nº da parcela e o cálculo do valor
    lista += i + "x de R$: " + (preco / i).toFixed(2) + "\n";
  }

  // exibe a lista no elemento outParcelas
  outParcelas.textContent = "Opções de Pagamento\n\n" + lista;
});