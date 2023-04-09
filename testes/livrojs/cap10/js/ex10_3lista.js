function montarTabela() {
  // se houver dados salvos em localStorage
  if (localStorage.getItem("jogoPalavra")) {
    // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
    var palavras = localStorage.getItem("jogoPalavra").split(";");
    var dicas = localStorage.getItem("jogoDica").split(";");

    // cria referência ao elemento tbPalavras
    var tbPalavras = document.getElementById("tbPalavras");

    var linha, col1, col2, col3;   // declara as variáveis

    // percorre elementos do vetor e os insere na tabela
    for (var i = 0; i < palavras.length; i++) {

      linha = tbPalavras.insertRow(-1);     // adiciona uma linha na tabela

      col1 = linha.insertCell(0);           // cria colunas na linha inserida
      col2 = linha.insertCell(1);
      col3 = linha.insertCell(2);

      col1.textContent = palavras[i];       // joga um conteúdo em cada célula
      col2.textContent = dicas[i];
      col3.innerHTML = "<input type='checkbox'>";  // exibe campo checkbox
    }
  }
}

// cria referência ao ckMostrar (se marcado, deve exibir tabela e botão excluir)
var ckMostrar = document.getElementById("ckMostrar");
// cria function anônima, associada ao evento change do ckMostrar
ckMostrar.addEventListener("change", function () {
  if (ckMostrar.checked) {                        // se marcado ...
    montarTabela();                               // exibe tabela (palavras e dicas)
    btExcluir.className = "btn btn-danger exibe"; // exibe o botão Excluir
  } else {                                        // senão ...
    location.reload();                            // recarrega a página
  }
});
 
// cria referência ao checkbox ckTodos (na linha de título da tabela)
var ckTodos = document.getElementById("ckTodos");
// executa função anônima quando houver uma troca de status
ckTodos.addEventListener("change", function () {
  // cria referência à tabela e aos campos input (filhos da tabela)
  var tbPalavras = document.getElementById("tbPalavras");
  var ckExcluir = tbPalavras.getElementsByTagName("input");

  var status = ckTodos.checked;   // obtém status de ckTodos ...

  // ... e percorre os demais checkbox para aplicar este status
  for (var i = 1; i < ckExcluir.length; i++) {
    ckExcluir[i].checked = status;
  }
});

function removerPalavras() {
  // cria referência à tabela e aos campos input (filhos da tabela)
  var tbPalavras = document.getElementById("tbPalavras");
  var ckExcluir = tbPalavras.getElementsByTagName("input");

  var temSelecionado = false;    // para verificar se há palavras selecionadas

  // percorre campos input type checkbox da tabela (exceto "Todos" no título)
  for (var i = 1; i < ckExcluir.length; i++) {
    if (ckExcluir[i].checked) {           // se está selecionado
      temSelecionado = true;              // muda valor da "flag"
      break;                              // sai da repetição
    }
  }

  // se não temSelecionado (se valor da variável é false)
  if (!temSelecionado) {
    alert("Não há palavras selecionadas para exclusão");
    return;
  }

  // solicita confirmação de exclusão das palavras selecionadas
  if (confirm("Confirma Exclusão das Palavras Selecionadas?")) {

    // exclui conteúdo armazenado em localStorage
    localStorage.removeItem("jogoPalavra");
    localStorage.removeItem("jogoDica");

    palavras = "";               // para acumular as palavras da tabela
    dicas = "";

    // primeiro irá gravar em localStorage as palavras não selecionadas
    for (i = 1; i < ckExcluir.length; i++) {
      // se não está selecionado (para exclusão)
      if (!ckExcluir[i].checked) {
        // obtém o conteúdo da tabela (coluna 0: palavra; coluna 1: dica)
        palavras += tbPalavras.rows[i].cells[0].textContent + ";";
        dicas += tbPalavras.rows[i].cells[1].textContent + ";";
      }
    }

    // se vazio, significa que marcou todos checkbox (não salva em localStorage)
    if (palavras != "") {
      // .length-1 (para retirar o último ";")
      localStorage.setItem("jogoPalavra", palavras.substr(0, palavras.length - 1));
      localStorage.setItem("jogoDica", dicas.substr(0, dicas.length - 1));
    }

    // agora irá remover as linhas selecionadas (do fim para o início)
    for (i = ckExcluir.length - 1; i > 0; i--) {
      if (ckExcluir[i].checked) {
        tbPalavras.deleteRow(i);     // remove a linha 
      }
    }
    ckExcluir[0].checked = false;     // desmarca ckTodos (que é o input 0)
  }
}
var btExcluir = document.getElementById("btExcluir");
btExcluir.addEventListener("click", removerPalavras);