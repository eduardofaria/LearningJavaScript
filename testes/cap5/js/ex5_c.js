var inNome = document.getElementById("inNome");
var inAcertos = document.getElementById("inAcertos");
var outLista = document.getElementById("outLista");
var candidatos = [];
var aprovados = [];

//Adicionar candidatos
function adicionaCandidato() {
    var nome = inNome.value;
    var acertos = Number(inAcertos.value);
    if (nome == "" || !isNaN(nome) || acertos == "" || isNaN(acertos)) {
        alert("Preencha o campo corretamente");
        inNome.value = "";
        inAcertos.value = "";
        inNome.focus();
        return;
    }

    candidatos.push({nome: nome, acertos: acertos});

    listarTodos();

    inNome.value = "";
    inAcertos.value = "";
    inNome.focus();
}
var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionaCandidato);

//Listar candidatos adicionados
function listarTodos() {

    if (candidatos.length == 0) {
        alert("Não há candidatos adicionados.")
        return;
    }

    var lista = "";
    for (var i = 0; i < candidatos.length; i++){
        lista += candidatos[i].nome + " - " + candidatos[i].acertos + " acertos\n";
    }

    outLista.textContent = lista;
}
var btnTodos = document.getElementById("btnTodos");
btnTodos.addEventListener("click", listarTodos);

//Verificar aprovados e lista-los
function verificaAprovados() {

    if (candidatos.length == 0) {
        alert("Não há candidatos adicionados.")
        return;
    }

    var notaMinima = Number(prompt("Qual a nota mínima para aprovação?"));

    if (notaMinima == "" || isNaN(notaMinima)) {
        alert("Informe um valor válido.");
        return;
    }
   
    for (var i = 0; i < candidatos.length; i++) {
        if (candidatos[i].acertos >= notaMinima) {
            aprovados.push({nome: candidatos[i].nome, acertos: candidatos[i].acertos});
        }
    }
    
    if (aprovados.length == 0) {
        alert("Não há candidatos aprovados.");
    }
    
    //criancasCopia.sort(function (a, b) {return a.idade - b.idade});
    //aprovados.sort(function (a, b) {return b.acertos - a.acertos});
    aprovados.sort((a,b)=>b.acertos-a.acertos);
   
    var listaAprovados = "";

    for (var i = 0; i < aprovados.length; i++) {
        listaAprovados += aprovados[i].nome + " - " + aprovados[i].acertos + " acertos" + "\n";
    }

    outLista.textContent = listaAprovados;
}

var btnAprovados = document.getElementById("btnAprovados");
btnAprovados.addEventListener("click", verificaAprovados);