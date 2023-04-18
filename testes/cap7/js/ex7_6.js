//First Page Load
let inPizza = document.getElementById("inPizza");
let inBebida = document.getElementById("inBebida");
inBebida.className = 'oculto'; // Oculta bebidas por padrão

//selector data
function selectChange(){
    let pizzaSize = inPizza.value;
    let sabores = 0;
    if (rBtnPizza.checked){
        if (pizzaSize == "media") {
            sabores = 2;
        } else if (pizzaSize == "grande") {
            sabores = 3;
        } else {
            sabores = 4;
        }
        document.getElementById("inDetalhes").placeholder = 'Até ' + sabores + ' sabores';
    }
}

//placeholder
let inDetalhes = document.getElementById('inDetalhes');
inDetalhes.addEventListener("focus", selectChange);
inDetalhes.addEventListener("blur", function(){document.getElementById("inDetalhes").placeholder = ''});

//Radio actions
let rBtnPizza = document.getElementById("rBtnPizza");
let rBtnBebida = document.getElementById("rBtnBebida");
rBtnPizza.addEventListener("change", radioChange);
rBtnBebida.addEventListener("change", radioChange);

function radioChange() {
    if (rBtnPizza.checked) {
        inBebida.className = 'oculto';
        inPizza.className = 'visivel'; 
    } else {
        inBebida.className = 'visivel';
        inPizza.className = 'oculto'; 
    }
}

// Orders List
let pedido = "";
let btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', addOrder);
inDetalhes.addEventListener('keydown', function(tecla) {
    if (tecla.key == 'Enter'){ // corrigi, o livro ainda usava keyCode == 13 (deprecated)
        addOrder();
    }
});

function addOrder() {
    let item = 0;
    let details = inDetalhes.value;
    if (rBtnPizza.checked) {
        if (details !== ""){ details = ' (' + details + ')' }; // sem preencher detalhes, não adiciona nada ao item
        item = inPizza.selectedIndex;
        pedido += inPizza.options[item].text + details + '\n';
    } else if (rBtnBebida) {
        if (details !== ""){ details = ' (' + details + ')' }; // sem preencher detalhes, não adiciona nada ao item
        item = inBebida.selectedIndex;
        pedido += inBebida.options[item].text + details + '\n';
    }

    let outPedido = document.getElementById('outPedido');
    outPedido.textContent = pedido;
    resetInputs();
}

// Clear Form
function resetInputs(){
    rBtnPizza.checked = true;
    inBebida.className = 'oculto';
    inPizza.className = 'visivel'; 
    inDetalhes.value = "";
    inPizza.selectedIndex = 0;
    rBtnPizza.focus();
}
