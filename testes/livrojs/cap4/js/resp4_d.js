function criarEstrelas() {
  var inLinhas = document.getElementById("inLinhas");
  var outResposta = document.getElementById("outResposta");

  var linhas = Number(inLinhas.value);

  if (linhas == 0 || isNaN(linhas)) {
    alert("Informe um número válido");
    inLinhas.focus();
    return;
  }

  // variável que irá concatenar as estrelas
  var estrelas = "";

  // cria uma repetição (até o número de linhas informado)
  for (var i = 1; i <= linhas; i++) {
    // dentro dessa repetição é criada uma outra (para cada linha, até i)
    for (var j = 1; j <= i; j++) {
      estrelas = estrelas + "*"
    }
    estrelas = estrelas + "\n";     // faz uma quebra de linha
  }

  outResposta.textContent = estrelas;
}
var btCriar = document.getElementById("btCriar");
btCriar.addEventListener("click", criarEstrelas);