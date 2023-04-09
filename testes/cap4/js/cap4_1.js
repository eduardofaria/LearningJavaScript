function mostrarTabuada() {
  //DOMs
  var inNumero = document.getElementById("inNumero");
  var outTabuada = document.getElementById("outTabuada");

  //variáveis
  var numero = Number(inNumero.value);
  var tabuada = "";
  //Geração da Tabuada
  for (var i = 1; i <= 10; i++) {
    tabuada = tabuada + numero + " x " + i + " = " + (numero * i) + "\n";
/**
 * DÚVIDA:
 * POR QUE? tabuada = tabuada + numero + " x " + i + " = " + (numero * i) + "\n";
 * NÃO DEVERIA SER: tabuada = numero + " x " + i + " = " + (numero * i) + "\n";
 */

  }
  outTabuada.textContent = tabuada;
}

//botão
var btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", mostrarTabuada);
