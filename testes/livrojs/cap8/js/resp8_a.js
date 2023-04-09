function contarVisitas() {
  var outContador = document.getElementById("outContador");

  var contador = 0;

  if (localStorage.getItem("lojaContador")) {
    contador = Number(localStorage.getItem("lojaContador"));
  }

  contador++;

  if (contador == 1) {
    outContador.textContent = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site.";
  } else {
    outContador.textContent = "Que bom que você voltou! Esta é a sua visita de número " + contador + " ao nosso site.";
  }

  localStorage.setItem("lojaContador", contador);
}
contarVisitas();

/* 
  É necessário manter as demais funções da página para o correto funcionamento das trocas de clube, bem como,
  para carregar a página com as cores e símbolo do clube salvo em localStorage
*/

// captura as tags input da página
var inputsRadio = document.getElementsByTagName("input");
// percorre os elementos para associar function ao evento change
for (var i = 0; i < inputsRadio.length; i++) {
  inputsRadio[i].addEventListener("change", trocarClube);
}

function trocarClube() {
  // cria referência aos elementos da página
  var imgClube = document.getElementById("imgClube");
  var divTitulo = document.getElementById("divTitulo");

  // armazena em um vetor a lista de clubes
  var clubes = ["Brasil", "Pelotas", "Farroupilha"];

  // percorre os radiobuttons para verificar qual está selecionado
  for (var i = 0; i < 4; i++) {
    if (inputsRadio[i].checked) {    // se selecionado... 
      var selecao = i;               // armazena índice do radio selecionado
      break;                         // e sai da repetição  
    }
  }

  if (selecao <= 2) {        // se selecao <= 2, então torce por algum clube
    divTitulo.className = "row cores" + clubes[selecao]; // modifica cores (divTitulo)

    // muda a propriedade src com a imagem do clube selecionado
    imgClube.src = "img/" + clubes[selecao].toLowerCase() + ".png";
    imgClube.className = "exibe";                     // exibe imagem
    imgClube.alt = "Símbolo do " + clubes[selecao];   // texto alternativo
    localStorage.setItem("clube", clubes[selecao]);   // salva nome do clube    
  } else {                                 // else (selecionou "Nenhum")
    divTitulo.className = "row";           // tira a classe de cor de divTitulo
    imgClube.className = "oculta";         // oculta a imagem
    imgClube.alt = "";                     // limpa texto alternativo
    localStorage.removeItem("clube");      // remove variável do localStorage    
  }
}

function verificarClube() {
  // se já estiver salvo algum clube 
  if (localStorage.getItem("clube")) {

    var clube = localStorage.getItem("clube");     // obtém o nome do clube     

    // conforme o clube, marca um dos elementos do input type radio
    if (clube == "Brasil") {
      inputsRadio[0].checked = true;
    } else if (clube == "Pelotas") {
      inputsRadio[1].checked = true;
    } else {
      inputsRadio[2].checked = true;
    }

    trocarClube();    // chama a function que troca a imagem e cores
  }
}
// chama function que verifica se cliente já selecionou clube anteriormente
verificarClube();