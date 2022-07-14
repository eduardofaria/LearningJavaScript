var numeros = [];       // declara vetor global

function adicionarNumero() {
  // referencia elementos da página
  var inNum = document.getElementById("inNum");
  var outLista = document.getElementById("outLista");
  var outOrdem = document.getElementById("outOrdem");

  var num = Number(inNum.value);   // obtém número informado

  // verifica preenchimento do número
  if (num == 0 || isNaN(num) || numeros.indexOf(num) >= 0) {
    alert("Informe um número válido e inexistente na lista");
    inNum.focus();
    return;
  }

  numeros.push(num);    // adiciona o num no final do vetor

  outLista.textContent = "Números: " + numeros.join(", ");

  // limpa mensagem (se já clicou em verificar...)
  outOrdem.textContent = "";

  // limpa campo e posiciona cursor em inNum
  inNum.value = "";
  inNum.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNumero);


function verificarOrdem() {
  // verifica se vetor numeros está vazio 
  if (numeros.length == 0) {
    alert("Não há números na lista...");
    inNum.focus();
    return;
  }

  var outOrdem = document.getElementById("outOrdem");

  // flag indicativa
  var ordem = true;

  // percorre os elementos do vetor (até penúltimo) 
  for (i = 0; i < numeros.length - 1; i++) {
    if (numeros[i] > numeros[i + 1]) {
      ordem = false;
      break;
    }
  }

  // modifica conteúdo de outOrdem a partir de um operador ternário 
  outOrdem.textContent = ordem ? "Ok! Números estão em ordem crescente" : "Atenção... Números não estão em ordem crescente";
}
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);