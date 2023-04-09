var inNumero = document.getElementById("inNumero");
var listaNumeros = [];
var listaOutput = "";


//Adiciona números a lista
function adicionaNumero() {   
    var novoNumero = Number(inNumero.value);
    if (novoNumero == "" || isNaN(novoNumero)) {
        alert("Adicione apenas números.");
        inNumero.focus();
        return;
    }
    //Verifica se ele já existe
    for (var i = 0; i < listaNumeros.length; i++) {
        if (listaNumeros[i] == novoNumero){
            alert("Esse número já foi adicionado.");
            inNumero.focus();
            return;
        }
    }

    //Adiciona novo número e imprime lista atualizada
    listaNumeros.push(novoNumero);
    listaOutput = "Números: " + listaNumeros.join(", ");
    document.getElementById("outLista").textContent = listaOutput;
    inNumero.value = "";
    inNumero.focus();
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionaNumero);

function verificarOrdem() {
    //verifica se a lista de números está vazia
    if (listaNumeros.length == 0){
        alert("Não foram adicionados números ainda.")
        inNumero.focus();
        return;
    }

    var outMsg = document.getElementById("outMsg");
    var ordemOk = "A lista está em ordem crescente.";
    var ordemFail = "Atenção. A lista não está em ordem crescente. ";
    var listaOrdenada = listaNumeros.slice();
    
    listaOrdenada.sort((a,b)=>a-b);

    /* Não entendi pq não funcionou a comparação entre esses dois vetores. Mesmo comparando com .toString, não funciona.
    if (listaOrdenada == listaNumeros) {
        outMsg.textContent = ordemOk;
    } else {
        outMsg.textContent = ordemFail;
    }
    */ 
        for (var i=0; i < listaNumeros.length; i++) {
            if (listaOrdenada[i] != listaNumeros[i]) {
                outMsg.className = "invalido";
                outMsg.textContent = ordemFail;         
            } else {
                outMsg.className = "valido";
                outMsg.textContent = ordemOk;
            }

        }
    


}

var btnValidar = document.getElementById("btnValidar");
btnValidar.addEventListener("click", verificarOrdem);

