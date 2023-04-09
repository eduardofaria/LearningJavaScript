var itens = [];   // vetor global para armazenar os itens do pedido

function trocarItem() {
  // cria referência aos elementos select
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");

  // se estiver marcado
  if (rbPizza.checked) {
    inBebida.className = "oculta";    // oculta select das bebidas
    inPizza.className = "exibe";      // exibe select das pizzas
  } else {
    inPizza.className = "oculta";     // oculta as pizzas
    inBebida.className = "exibe";     // exibe as bebidas
  }
}
// cria referência aos radiobutton's e associa função ao evento change
var rbPizza = document.getElementById("rbPizza");
rbPizza.addEventListener("change", trocarItem);

var rbBebida = document.getElementById("rbBebida");
rbBebida.addEventListener("change", trocarItem);

function mostrarNumSabores() {
  // se radiobutton rbPizza estiver marcado
  if (rbPizza.checked) {
    var pizza = inPizza.value;    // obtém value do item selecionado
    // uso do operador ternário (cap. 3), para indicar o número de sabores
    var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;
    // atributo placeholder exibe uma dica de preenchimento do campo
    inDetalhes.placeholder = "Até " + num + " sabores";
  }
}
// cria referência ao elemento e associa função ao evento focus
var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

// cria função (anônima) ao evento blur (quando o campo perde o foco)
inDetalhes.addEventListener("blur", function () {
  inDetalhes.placeholder = "";   // limpa a dica de preenchimento
});

// cria função (anônima) associada ao evento keypress (tecla pressionada)
inDetalhes.addEventListener("keypress", function (tecla) {
  // se pressionou tecla de código 13 (enter)
  if (tecla.keyCode == 13) {
    adicionarItem();     // irá adicionar item no pedido
  }
});

function adicionarItem() {
  // cria referência aos elementos da página (ainda não referenciados)
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");
  var outPedido = document.getElementById("outPedido");

  // se radiobutton Pizza estiver marcado
  if (rbPizza.checked) {
    var num = inPizza.selectedIndex;          // obtém nº do item selecionado    
    var produto = inPizza.options[num].text;  // texto do item selecionado
  } else {
    var num = inBebida.selectedIndex;
    var produto = inBebida.options[num].text;
  }
  var detalhes = inDetalhes.value;           // conteúdo do inDetalhes  
  itens.push(produto + " (" + detalhes + ")");   // adiciona ao vetor
  outPedido.textContent = itens.join("\n");      // exibe em outPedidos  
  limparCampos();                                // limpa conteúdo dos campos
}
// cria referência ao elemento e associa função ao evento click
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarItem);

function limparCampos() {
  rbPizza.checked = true;                // marca (seleciona) rbPizza
  inBebida.className = "oculta";         // oculta select das Bebidas
  inPizza.className = "exibe";           // exibe select das Pizzas 
  inPizza.selectedIndex = 0;             // seleciona 1º item (posição 0)
  inDetalhes.value = "";                 // limpa input Detalhes
  rbPizza.focus();                       // "joga o foco" no rbPizza
}