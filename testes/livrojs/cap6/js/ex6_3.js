function inverterPalavra() {
  // cria referência aos elementos da página
  var inPalavra = document.getElementById("inPalavra");
  var outInverso = document.getElementById("outInverso");

  // obtém conteúdo do campo de entrada
  var palavra = inPalavra.value;

  // se vazio, exibe alerta, posiciona e retorna
  if (palavra == "") {
    alert("Informe a palavra...");
    inPalavra.focus();
    return;
  }

  var tam = palavra.length;      // obtém tamanho da palavra
  // obtém a última letra, convertendo-a para maiúscula
  var inverso = palavra.charAt(tam - 1).toUpperCase();

  // percorre da penúltima letra até o início
  for (var i = tam - 2; i >= 0; i--) {
    // obtém os demais caracteres, convertendo-os em minúsculas
    inverso += palavra.charAt(i).toLowerCase();
  }

  // exibe a palavra invertida
  outInverso.textContent = "Invertida: " + inverso;
}
// cria referência ao botão e após associa function ao evento click
var btInverter = document.getElementById("btInverter");
btInverter.addEventListener("click", inverterPalavra);