var candidatos = [];      // declara vetor global

function adicionarCandidato() {
  // cria referência aos elementos de entrada de dados (campos)
  var inNome = document.getElementById("inNome");
  var inAcertos = document.getElementById("inAcertos");

  var nome = inNome.value;            // obtém conteúdo dos campos
  var acertos = Number(inAcertos.value);

  // verifica preenchimento dos campos
  if (nome == "" || inAcertos.value == "" || isNaN(acertos)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  // adiciona dados ao vetor de objetos
  candidatos.push({ nome: nome, acertos: acertos });

  // limpa campos e posiciona cursor em inNome
  inNome.value = "";
  inAcertos.value = "";
  inNome.focus();

  listarCandidatos();     // chama function que lista os candidatos
}
// cria referência ao btAdicionar e associa function ao evento click deste botão
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarCandidato);


function listarCandidatos() {
  // verifica se vetor está vazio
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var lista = "";     // para concatenar lista de candidatos

  // percorre os elementos do vetor
  for (var i = 0; i < candidatos.length; i++) {
    lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
  }

  // exibe a lista (em uma única instrução)
  document.getElementById("outLista").textContent = lista;
}
var btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarCandidatos);


function exibirAprovados() {
  // verifica se vetor está vazio
  if (candidatos.length == 0) {
    alert("Não há candidatos na lista");
    return;
  }

  var corte = Number(prompt("Número de Acertos para Aprovação? "));

  if (corte == 0 || isNaN(corte)) {
    alert("Número inválido");
    return;
  }

  // cria uma cópia do vetor candidatos 
  var copia = candidatos.slice();

  // ordena o vetor copia pelos acertos 
  copia.sort(function (a, b) { return a.acertos - b.acertos });

  // inverte a ordem dos elementos (para ficar decrescente)
  copia.reverse();

  var aprovados = "";     // para concatenar aprovados

  // percorre os elementos do vetor
  for (var i = 0; i < copia.length; i++) {
    if (copia[i].acertos >= corte) {
      aprovados += copia[i].nome + " - " + copia[i].acertos + " acertos\n";
    }
  }

  // cria referência ao elemento outLista
  var outLista = document.getElementById("outLista");

  if (aprovados == "") {
    outLista.textContent = "Não há candidatos aprovados...";
  } else {
    outLista.textContent = aprovados;
  }
}
var btAprovados = document.getElementById("btAprovados");
btAprovados.addEventListener("click", exibirAprovados);