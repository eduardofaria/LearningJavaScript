function verSenha() {
  // cria referência aos elementos da página 
  var inSenha = document.getElementById("inSenha");
  var outResposta = document.getElementById("outResposta");

  // obtém o conteúdo do campo de entrada
  var senha = inSenha.value;

  var erros = [];    // vetor com erros

  // verifica o tamanho da senha é inválida
  if (senha.length < 8 || senha.length > 15) {
    erros.push("possuir entre 8 e 15 caracteres");
  }

  // verifica se não possui números 
  if (senha.match(/[0-9]/g) == null) {
    erros.push("possuir números (no mínimo, 1)");
  }

  // verifica se não possui letras minúsculas
  if (!senha.match(/[a-z]/g)) {
    erros.push("possuir letras minúsculas (no mínimo, 1)");
  }

  // verifica se não possui letras maiúsculas ou se possui apenas 1
  if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
    erros.push("possuir letras maiúsculas (no mínimo, 2)");
  }

  // verifica se não possui símbolos ou "_"
  if (!senha.match(/[\W|_]/g)) {
    erros.push("possuir símbolos (no mínimo, 1)");
  }

  // se vetor está vazio (significa que não foram encontrados erros)
  if (erros.length == 0) {
    outResposta.textContent = "Ok! Senha Válida"
  } else {
    outResposta.textContent = "Erro... A senha deve " + erros.join(", ");
  }
}
// cria referência ao botão e após associa function ao evento click
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verSenha);