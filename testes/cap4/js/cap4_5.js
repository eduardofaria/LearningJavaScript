// Acumuladores
var numContas = 0;
var valorTotal = 0;
var resposta = "";

function registrarContas() {
    //DOMs
    var inConta = document.getElementById("inConta");
    var inValor = document.getElementById("inValor");
    var outContas = document.getElementById("outConta");
    var outTotal = document.getElementById("outTotal");

    //Valores input
    var descricao = inConta.value;
    var valor = Number(inValor.value);

    //verificar entrada
    if (valor == 0 || isNaN(valor)) {
        alert("Informe os dados corretamente");
        inConta.focus();
        return;
    }

    // add a var acumuladora
    numContas++;
    valorTotal = valorTotal + valor;

    // escrever/montar linha com conta
    resposta = resposta + descricao + " - R$ " + valor.toFixed(2) + "\n";

    // altera DOMs de resposta
    outContas.textContent = resposta + "--------------------------------";
    outTotal.textContent = numContas + " contas - Total R$ " + valorTotal.toFixed(2);

    //resetar form
    inConta.value = "";
    inValor.value = "";
    inConta.focus();

}

var btnRegistrar = document.getElementById("btnRegistrar");
btnRegistrar.addEventListener("click", registrarContas);
