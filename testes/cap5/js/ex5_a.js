var inClube = document.getElementById("inClube");
var clubeAll = [];


// Adicionar os Clubes ao vetor clubeAll
function adicionarClube () {
    var clube = inClube.value;

    if (clube == "" || !isNaN(clube)) {
        alert("Preencha corretamente.");
        inClube.focus();
        return;
    }

    clubeAll.push(clube);

    var lista = "";

    for (var i = 0; i < clubeAll.length; i++) {
        lista += (i + 1) + ". " + clubeAll[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;

    inClube.value = "";
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarClube);


// Lista os clubes armazenados no vetor clubeAll
function listarClubes() {
    var lista = "";

    for (var i = 0; i < clubeAll.length; i++) {
        lista += (i + 1) + ". " + clubeAll[i] + "\n";
    }

    document.getElementById("outLista").textContent = lista;
}

var btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", listarClubes);

function makeTabela () {

    if (clubeAll.length % 2 != 0) {
        alert("Adicione mais um Clube para montar a tabela.");
        inClube.focus();
        return;
    }

    var clubeAllCopy = clubeAll.slice();
    var jogos = (clubeAllCopy.length / 2);
    var listaJogos = "";

    for (var i = 1; i <= jogos; i++) {
        //Alternativa: listaJogos += clubeAllCopy.splice(0, 1) + " x " + clubeAllCopy.splice(-1, 1) + "\n";
        listaJogos += clubeAllCopy.shift() + " x " + clubeAllCopy.pop() + "\n";
    }

    document.getElementById("outLista").textContent = listaJogos;


}

var btnMontar = document.getElementById("btnMontar");
btnMontar.addEventListener("click", makeTabela);