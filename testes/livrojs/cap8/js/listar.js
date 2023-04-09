function listarPalavras() {
  var tbLista = document.getElementById("tbLista");

  if (!localStorage.palavra) {
    return;
  }

  var palavras = localStorage.palavra.split(";");
  var dicas = localStorage.dica.split(";");

  for (var i=0; i<palavras.length; i++) {
    var linha = tbLista.insertRow();

    var col1 = linha.insertCell();
    var col2 = linha.insertCell();
    var col3 = linha.insertCell();

    col1.textContent = palavras[i];
    col2.textContent = dicas[i];
    col3.innerHTML = "<input type='checkbox' name='ckExclui'>";    
  }  
}
listarPalavras();

function verExcluidos() {  
  var marcou = false;
  
  var ckExclui = document.getElementsByName("ckExclui");

  for (var i=0; i<ckExclui.length; i++) {
      if (ckExclui[i].checked) {
        marcou = true;
        break;
      }
  }

  if (marcou) {
    var confirma = confirm("Confirma Exclusão das Palavras Marcadas");
    if (!confirma) {
      return;
    }
  } else {
    alert("Selecione as palavras a serem excluídas");
    return;
  }

  var palavras = localStorage.palavra.split(";");
  var dicas = localStorage.dicas.split(";");

  var novasPalavras = [];
  var novasDicas = [];

  for (var i=0; i<palavras.length; i++) {

  }

}
var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", verExcluidos);