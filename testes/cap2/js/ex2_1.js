//
function mostrarOla() {
  //pega nome
  var nome = document.getElementById("nome").value;
  //mostra nome
  document.getElementById("resposta").textContent = "Olá " + nome;
}
// ativa o botão
var mostrar = document.getElementById("mostrar");
//listener para o botão
mostrar.addEventListener("click", mostrarOla);
