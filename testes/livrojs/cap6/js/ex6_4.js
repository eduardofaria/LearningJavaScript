function gerarCracha() {
  // cria referência aos elementos da página 
  var inNome = document.getElementById("inNome");
  var outCracha = document.getElementById("outCracha");

  // obtém o conteúdo do campo de entrada
  var nome = inNome.value;

  // se vazio ou se não há espaço no nome
  if (nome == "" || nome.indexOf(" ") == -1) {
    alert("Informe o nome completo do participante...");
    inNome.focus();
    return;
  }

  var priEspaco = nome.indexOf(" ");        // posição do primeiro espaço
  var ultEspaco = nome.lastIndexOf(" ");    // posição do último espaço

  // copia nome e sobrenome usando os parâmetros do substr()
  var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

  // altera o texto identificado na página por outCracha
  outCracha.textContent = "Crachá: " + cracha;
}
// cria referência ao botão e após associa function ao evento click
var btGerar = document.getElementById("btGerar");
btGerar.addEventListener("click", gerarCracha);