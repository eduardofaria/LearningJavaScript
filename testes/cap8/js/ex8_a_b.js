let numero_acesso;
acesso_verificar();
const out_list = document.getElementById("out_list");
const in_produto = document.getElementById("in_produto");

function acesso_verificar(){
    (localStorage.getItem("acesso"))? numero_acesso = localStorage.getItem("acesso") : localStorage.setItem("acesso", 0);
    numero_acesso = localStorage.getItem("acesso");
    acesso_mensagem(numero_acesso);
}

function acesso_mensagem(contador){
    contador++;
    let out_alert = document.getElementById("out_alert");
    if (contador == 1) {
        out_alert.textContent = "Muito bem vindo! Esta é sua primeira visita ao site!";
    } else if (contador > 1) {
        out_alert.textContent = `Que bom que voltou! Esta é sua ${contador}ª visita ao site!`
    }
    localStorage.setItem("acesso", contador);
}


const lista_salva = localStorage.getItem("lista") || null;
let lista_compras = lista_salva != null? exibir_lista(lista_salva) : "";


function gravar_lista(produto){
    lista_compras += produto + ",";
    localStorage.setItem("lista", lista_compras);
    return exibir_lista(lista_compras);
}

function exibir_lista(itens){
    let lista = itens.split(",").sort();
    lista.shift();
    let lista_ordenada = `Produtos Adicionado\n-----------------------\n`;
    for (let i = 0; i < lista.length; i++) {
        lista_ordenada += lista[i].charAt(0).toUpperCase() + lista[i].slice(1).toLowerCase() + "\n";
    }
    out_list.textContent = lista_ordenada;
    
    
}

function limpar_lista(){
    
}

function add_item (){
    let produto = in_produto.value;
    if (produto == "" || !isNaN(produto)){
        alert("Informe um produto válido");
        return;
    }
    gravar_lista(produto);
    in_produto.value = "";
    in_produto.focus();
}



const btn_add = document.getElementById("btn_add");
btn_add.addEventListener("click", add_item);
const btn_clear = document.getElementById("btn_clear");
btn_clear.addEventListener("click", limpar_lista);

in_produto.addEventListener("keydown", function(tecla){
    if (tecla.key == "Enter"){
        add_item();
    }
});



