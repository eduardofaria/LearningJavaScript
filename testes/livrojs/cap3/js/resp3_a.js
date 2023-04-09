function verificarNumero() {
  // cria uma referência aos elementos da página
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  // obtém e converte conteúdo do campo inNumero
  var numero = Number(inNumero.value);

  // se não preencheu ou Not-a-Number (NaN)
  if (numero == 0 || isNaN(numero)) {
    // exibe mensagem de advertência
    alert("Informe um número válido");
    // posiciona no campo de edição inNumero
    inNumero.focus();
    return;
  }

  // se resto da divisão do número por 2 for igual a 0 
  if (numero % 2 == 0) {
    outResposta.textContent = "Resposta: " + numero + " é Par";
  } else {
    outResposta.textContent = "Resposta: " + numero + " é Ímpar";
  }
}
// cria uma referência ao elemento btExibir (botão)
var btVerificar = document.getElementById("btVerificar");
// registra um evento associado ao botão, para carregar verificarNumero
btVerificar.addEventListener("click", verificarNumero);