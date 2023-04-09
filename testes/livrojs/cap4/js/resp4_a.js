function repetirFruta() {
  var inFruta = document.getElementById("inFruta");
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var fruta = inFruta.value;
  var num = Number(inNumero.value);

  if (fruta == "" || num == 0 || isNaN(num)) {
    alert("Informe corretamente os dados");
    inFruta.focus();
    return;
  }

  // variável que vai acumular o número repetido das frutas
  var resposta = "";   

  // cria uma repetição e...
  for (var i=1; i<num; i++) {
    // ... a cada volta, adiciona uma fruta
    resposta = resposta + fruta + " * ";
  }

  // isola a última fruta, para não exibir * no final
  resposta = resposta + fruta;

  outResposta.textContent = resposta;
}
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);