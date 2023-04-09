// Vetor global
var pacientes = [];

//DOMs
var inPaciente = document.getElementById("in_Paciente");
var outEmAtendimento = document.getElementById("out_Atendendo");
var outFila = document.getElementById("out_Fila");

//Fução que adicionar pacientes
function addPacientes() {
    var nomePaciente = inPaciente.value;
    //verifica o preenchimento
    if (nomePaciente == "" || !isNaN(nomePaciente)) {
        alert("Insira o nome do paciente corretamente.");
        inPaciente.value = "";
        inPaciente.focus();
        return;
    }

    pacientes.push(nomePaciente);

    var fila = "";

    for (i = 0; i < pacientes.length; i++) {
        fila += (i+1) + ". " + pacientes[i] + "\n"; 
    }

    outFila.textContent = fila;
    inPaciente.value = "";
    inPaciente.focus();
}

//Botão Adicionar
var btnAdd = document.getElementById("btn_Add");
btnAdd.addEventListener("click", addPacientes);

//Função Atender paciente
function atenderPaciente() {
    if (pacientes.length == 0){
        alert("Não há mais pacientes para atender.");
        inPaciente.value = "";
        inPaciente.focus();
        return;
    }

    var emAtendimento = pacientes[0];
    pacientes.shift();
    outEmAtendimento.textContent = emAtendimento;

    var fila = "";

    for (i = 0; i < pacientes.length; i++){
        fila += (i+1) + ". " + pacientes[i] + "\n";
    }

    outFila.textContent = fila;
}

//Botão Atender o primeiro da fila
var btnAtender = document.getElementById("btn_Atender");
btnAtender.addEventListener("click", atenderPaciente);

//Função Urgência
function addUrgencia() {
    var nomePaciente = inPaciente.value;
    //verifica o preenchimento
    if (nomePaciente == "" || !isNaN(nomePaciente)) {
        alert("Insira o nome do paciente corretamente.");
        inPaciente.value = "";
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nomePaciente);

    var fila = "";

    for (i = 0; i < pacientes.length; i++) {
        fila += (i+1) + ". " + pacientes[i] + "\n"; 
    }

    outFila.textContent = fila;
    inPaciente.value = "";
    inPaciente.focus();
}
// Botão Urgência
var btnUrgencia = document.getElementById("btn_Urgencia");
btnUrgencia.addEventListener("click", addUrgencia);