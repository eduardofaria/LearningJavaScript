function cadastrarPalavras() {
  var inDica = document.getElementById("inDica");
  var divMensagem = document.getElementById("divMensagem");

  var palavra = inPalavra.value;
  var dica = inDica.value;

  if (palavra == "" || dica == "") {
    alert("Informe Palavra e Dica");
    inPalavra.focus();
    return;
  }

  // se já existe alguma palavra cadastrada
  if (localStorage.palavra) {
    localStorage.palavra += ";" + palavra;
    localStorage.dica += ";" + dica;
  } else {
    localStorage.palavra = palavra;
    localStorage.dica = dica;    
  }
  divMensagem.style.display = "inline";

  inPalavra.value = "";
  inDica.value = "";
  inPalavra.focus();  
}
var btInserir = document.getElementById("btInserir");
btInserir.addEventListener("click", cadastrarPalavras);

var inPalavra = document.getElementById("inPalavra");
inPalavra.addEventListener("blur", function() {
  var divMensagem = document.getElementById("divMensagem");
  divMensagem.style.display = "none";  
});