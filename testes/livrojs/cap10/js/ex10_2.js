const POLTRONAS = 240;     // constante com o número de poltronas do teatro

var reservadas = [];     // vetor com as poltronas reservadas pelo cliente

function montarPalco() {

  var ocupadas = [];     // declara vetor para receber as poltronas ocupadas

  // verifica se há poltronas salvas em localStorage
  if (localStorage.getItem("teatroOcupadas")) {
    // preenche o vetor com as poltronas ocupadas do teatro (salvas em localStorage)
    ocupadas = localStorage.getItem("teatroOcupadas").split(";");
  }

  // captura divPalco, que é o local onde as imagens são inseridas
  var divPalco = document.getElementById("divPalco");

  // repetição para montar o nº total de poltronas (definida na constante)
  for (var i = 1; i <= POLTRONAS; i++) {

    var figure = document.createElement("figure");   // cria tag figure
    var imgStatus = document.createElement("img");   // cria tag img 

    if (ocupadas.indexOf(i.toString()) >= 0) {       // se consta em ocupadas
      imgStatus.src = "img/ocupada.jpg";             // imagem ocupada.jpg
    } else {                                         // se não constar ... 
      imgStatus.src = "img/disponivel.jpg";          // imagem disponivel.jpg
    }
    imgStatus.className = "poltrona";          // classe com dimensão da img

    var figureCap = document.createElement("figcaption"); // cria figcaption

    var zeros = "";
    if (i < 10) {              // condições para exibir zeros nas poltronas...
      zeros = "00";            // menores que 10
    } else if (i < 100) {
      zeros = "0";             // menores que 100
    }

    var num = document.createTextNode("[" + zeros + i + "]");   // cria texto

    figureCap.appendChild(num);           // define os pais de cada tag criada 
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    if (i % 24 == 12) {                   // se módulo 24, restar 12 (é o corredor) 
      figure.style.marginRight = "60px";  // define margem direita de 60px
    }

    divPalco.appendChild(figure);         // indica que figure é filha de divPalco

    if (i % 24 == 0) {                         // se módulo 24, restar 0
      var br = document.createElement("br");   // cria tag br (quebra de linha)
      divPalco.appendChild(br);                // indica que br é filha de divPalco
    }
  }
}
montarPalco();                                 // chama function montarPalco()

function reservarPoltrona() {
  var poltrona = Number(inPoltrona.value);     // obtém conteúdo de inPoltrona

  // valida o preenchimento do campo de entrada... não pode ser maior que a const
  if (poltrona <= 0 || isNaN(poltrona) || poltrona > POLTRONAS) {
    alert("Informe um número de poltrona válido");
    inPoltrona.focus();
    return;
  }

  var ocupadas = [];     // declara vetor para receber as poltronas ocupadas

  // se há poltronas salvas em localStorage
  if (localStorage.getItem("teatroOcupadas")) {
    // preenche o vetor com as poltronas ocupadas do teatro (salvas em localStorage)
    ocupadas = localStorage.getItem("teatroOcupadas").split(";");
  }

  // se poltrona escolhida já está ocupada (existe em localStorage)
  if (ocupadas.indexOf(poltrona.toString()) >= 0) {
    alert("Poltrona " + poltrona + " já está ocupada...");
    inPoltrona.value = "";
    inPoltrona.focus();
    return;
  }

  // captura divPalco para obter a imagem
  var divPalco = document.getElementById("divPalco");

  // captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
  var imgPoltrona = divPalco.getElementsByTagName("img")[poltrona - 1];

  imgPoltrona.src = "img/reservada.jpg";   // modifica atributo da imagem

  reservadas.push(poltrona);               // adiciona poltrona ao vetor reservadas

  inPoltrona.value = "";                   // limpa campo
  inPoltrona.focus();                      // jogo o foco em inPoltrona
}
var btReservar = document.getElementById("btReservar");
btReservar.addEventListener("click", reservarPoltrona);

// cria referência ao campo de entrada inPoltrona
var inPoltrona = document.getElementById("inPoltrona");
inPoltrona.addEventListener("keypress", function (tecla) {
  if (tecla.keyCode == 13) {
    reservarPoltrona();
  }
});

function confirmarReserva() {
  if (reservadas.length == 0) {
    alert("Não há poltronas reservadas");
    inPoltrona.focus();            // elemento já foi referenciado de forma global
    return;
  }

  // captura divPalco para obter as imagens
  var divPalco = document.getElementById("divPalco");

  var ocupadas = "";

  if (localStorage.getItem("teatroOcupadas")) {
    ocupadas = localStorage.getItem("teatroOcupadas") + ";";
  }

  for (var i = 0; i < reservadas.length; i++) {
    ocupadas += reservadas[i] + ";";

    // captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
    var imgPoltrona = divPalco.getElementsByTagName("img")[reservadas[i] - 1];

    imgPoltrona.src = "img/ocupada.jpg";   // modifica atributo da imagem
  }

  reservadas = []; // limpa vetor (pois as reservas já foram salvas em localStorage)

  // .length-1 é para retirar o último ";"
  localStorage.setItem("teatroOcupadas", ocupadas.substr(0, ocupadas.length - 1));
}
var btConfirmar = document.getElementById("btConfirmar");
btConfirmar.addEventListener("click", confirmarReserva);