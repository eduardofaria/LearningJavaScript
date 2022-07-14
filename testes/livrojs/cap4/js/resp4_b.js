function mostrarEvolucao() {
  // cria referencia aos elementos da página
  var inChin = document.getElementById("inChin");
  var inAnos = document.getElementById("inAnos");
  var outEvolucao = document.getElementById("outEvolucao");
  
  // obtém os dados de entrada
  var chin = Number(inChin.value);
  var anos = Number(inAnos.value);

  // valida os números (deve ser, no mínimo, um casal)
  if (chin < 2 || isNaN(chin) || anos == 0 || isNaN(anos)) {
    alert("Informe corretamente os dados...");
    inChin.focus();
    return;
  }

  // cria uma variável do tipo String, que irá concatenar a resposta
  var resposta = "";
  var total = chin;

  // define o laço de repetição
  for (var i = 1; i <= anos; i++) {    
    resposta = resposta + i + "º Ano: " + total + " Chinchilas\n";
    total = total * 3;
  }

  // altera o conteúdo da tag de resposta
  outEvolucao.textContent = resposta;
}
// cria referência ao botão e após associa function ao evento click
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarEvolucao);