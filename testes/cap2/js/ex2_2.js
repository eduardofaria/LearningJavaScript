// Converção de Min em horas e minutos
function converterDuracao() {
  // Seletor de Elementos do HTML
  var inTitulo = document.getElementById("inTitulo");
  var inDuracao = document.getElementById("inDuracao");
  var outTitulo = document.getElementById("outTitulo");
  var outDuracao = document.getElementById("outDuracao");

  // Informações coletadas
  var titulo = inTitulo.value;
  var duracao = Number(inDuracao.value);
  // Coleta as horas e a sobra em minutos
  var horas = Math.floor(duracao / 60);
  var minutos = duracao % 60;
  // Escreve a resposta no html
  outTitulo.textContent = titulo;
  outDuracao.textContent = horas + " hora(s)" + " e " + minutos + " minutos";
}
// Seletor do botão
var btnConverter = document.getElementById("btnConverter");
// Acção do botão
btnConverter.addEventListener("click", converterDuracao);
