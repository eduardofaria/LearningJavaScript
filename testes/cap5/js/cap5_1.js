var pacientes = []; // Vetor global

//DOMs usados nas Funcçoes
var inPaciente = document.getElementById("inPaciente");
var outAtual = document.getElementById("outAtual");
var outFila = document.getElementById("outFila");

function adicionarPaciente(){
    var nome = inPaciente.value; //DÚVIDA: Pq essa variável não pode ficar fora dessa função para ser usada por outras funcões?
    //Verifica o preenchimento correto do campo.
    if (nome == "" || !isNaN(nome)) {
        alert("Preencha corretamente.");
        inPaciente.value = "";
        inPaciente.focus();
        return;
    }

    pacientes.push(nome); // adiciona o nome ao final do vetor
    
    var lista = "";

    for(i = 0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    outFila.textContent = lista;
    inPaciente.value = "";
    inPaciente.focus();
}

function pacienteUrgente (){
    var nome = inPaciente.value; //DÚVIDA: Pq essa variável não pode ficar fora dessa função para ser usada por outras funcões?
    //Verifica o preenchimento correto do campo.
    if (nome == "" || !isNaN(nome)) {
        alert("Preencha corretamente.");
        inPaciente.value = "";
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome); // Adiciona paciete ao topo da lista;

    var lista = "";

    for (i = 0; i < pacientes.length; i++) {
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    outFila.textContent = lista;
    inPaciente.value = "";
    inPaciente.focus();

}

function atenderPaciente(){
    if (pacientes.length == 0) {
        alert("Não há mais pacientes para serem atendidos.");
        inPaciente.focus();
        return;
    }

    //Remove esse passiente em atendimento da lista
    var atendendo = pacientes.shift();

    //Escreve o primeiro nome em Atendimento
    outAtual.textContent = atendendo;

    // rescrever a lista atualizada
    var lista = "";
    for(i=0; i < pacientes.length; i++){
        lista += (i+1) + ". " + pacientes[i] + "\n";
    }

    outFila.textContent = lista;

}

//Botões
var btnAdd = document.getElementById("btnAdd");
var btnUrg = document.getElementById("btnUrg");
var btnAtt = document.getElementById("btnAtt");

// Adicionar
btnAdd.addEventListener("click", adicionarPaciente);
//Urgente
btnUrg.addEventListener("click", pacienteUrgente);
//Atender
btnAtt.addEventListener("click", atenderPaciente);

