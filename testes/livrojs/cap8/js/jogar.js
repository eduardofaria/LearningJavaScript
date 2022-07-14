function escolherPalavra() {
  var palavras = localStorage.palavra.split(";");
  var dicas = localStorage.dica.split(";");

  var tam = palavras.length;

  var sorteada = 
     Math.floor(Math.random()*tam);

  return palavras[sorteada]+";"+dicas[sorteada];     
}

function montarJogo() {
  var descubra = escolherPalavra().split(";");
  var palavra = descubra[0];
  var dica = descubra[1];

  var outPalavra = document.getElementById("outPalavra");
  var outDica = document.getElementById("outDica");

  var tracos = "";
  for (var i=0; i<palavra.length; i++) {
    tracos += " _";
  }

  outPalavra.textContent = "A Palavra é: " + tracos;
  outDica.textContent = "Dica: " + dica;

}
montarJogo();
