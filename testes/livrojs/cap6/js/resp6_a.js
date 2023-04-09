function criptografarMensagem() {
  // cria referência ao campo de entrada e obtém conteúdo
  var inMensagem = document.getElementById("inMensagem");
  var mensagem = inMensagem.value;

  if (mensagem == "") {
    alert("Informe a mensagem...");
    inMensagem.focus();
    return;
  }

  var resposta = "";
  var tam = mensagem.length;

  // laço para pegar as letras das posições pares (na programação, ímpares)
  for (var i = 1; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  // laço para pegar as letras das posições ímpares (na programação, pares)
  for (var i = 0; i < tam; i = i + 2) {
    resposta += mensagem.charAt(i);
  }

  document.getElementById("outResposta").textContent = resposta;
}
// cria referência ao botão e após associa function ao evento click
var btCripto = document.getElementById("btCripo");
btCripto.addEventListener("click", criptografarMensagem);


function decriptografarMensagem() {
  // cria referência ao campo de entrada e obtém conteúdo
  var inMensagem = document.getElementById("inMensagem");
  var mensagem = inMensagem.value;

  if (mensagem == "") {
    alert("Informe a mensagem...");
    inMensagem.focus();
    return;
  }

  var tam = mensagem.length;
  var metade = Math.floor(tam / 2);
  var resposta = "";

  if (tam % 2 == 0) {
    for (var i = metade; i < tam; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
  } else {
    for (var i = metade; i < tam - 1; i++) {
      resposta += mensagem.charAt(i);
      resposta += mensagem.charAt(i - metade);
    }
    resposta += mensagem.charAt(i);
  }

  document.getElementById("outResposta").textContent = resposta;
}
// cria referência ao botão e após associa function ao evento click
var btDecripto = document.getElementById("btDecripo");
btDecripto.addEventListener("click", decriptografarMensagem);