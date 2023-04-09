// Exercicio A
function exibirFrutas() {
    //DOM
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outRepeticao = document.getElementById("outRepeticao");

    //Valores dos campos
    var fruta = inFruta.value;
    var numero = Number(inNumero.value);
    var saida = "";


    //filtro para preenchimento
    if (fruta == "" || numero == 0 || isNaN(numero) || !isNaN(fruta)) {
        alert("Preencha os campos corretamente");
        inFruta.value = "";
        inNumero.value = "";
        outRepeticao.textContent = "";
        inFruta.focus();
        return;
    }

    for (var i = 1; i < numero; i++) {
        var saida = saida + fruta + " * ";
    }
    outRepeticao.textContent = saida + fruta;
}

var btnRepetir = document.getElementById("btnRepetir");
btnRepetir.addEventListener("click", exibirFrutas);

// Exercicio B
function anosChinchilas() {
    //DOMs
    var inChinchilas = document.getElementById("inChinchilas");
    var inAnos = document.getElementById("inAnos");
    var outAnos = document.getElementById("outAnos");

    //Captura dos Valores
    var animais = Number(inChinchilas.value);
    var anos = Number(inAnos.value);
    if (animais < 2 || anos == 0 || isNaN(animais) || isNaN(anos)) {
        alert("Preencha os campos corretamente");
        animais = "";
        inAnos.value = "";
        outAnos.textContent = ""
        inChinchilas.focus();
        return;
    }
    var resultado = "";
    
    for (var i = 1; i <= anos; i++){
        resultado = resultado + i + "º Ano: " + animais + " Chinchilas \n";
        if (i != anos){
        var animais = animais * 3;
        }
    }
    outAnos.textContent = resultado;
}
var btnChinchilas = document.getElementById("btnChinchilas");
btnChinchilas.addEventListener("click", anosChinchilas);

// Exercicio C
function numeroPerfeito(){
    var inNum = document.getElementById("inNum");
    var outDiv = document.getElementById("outDiv");
    var outPerfeito = document.getElementById("outPerfeito");

    var numero = Number(inNum.value);

    if (numero == 0 || isNaN(numero)) {
        alert("Preencha corretamete");
        inNum.value = "";
        inNum.focus();
        return;
    }

    var divisores = "1";
    var soma = 1;

    for(var i = 2; i <= numero / 2; i++){
        if (numero % i == 0) {
            divisores = divisores + ", " + i;
            soma = soma + i;
        }
    }

    if (soma == numero) {
        outPerfeito.style.color = "green";
        outPerfeito.textContent = numero + " é um número perfeito!";
    } else {
        outPerfeito.style.color = "red";
        outPerfeito.textContent = numero + " não é um número perfeito.";
    }

    outDiv.textContent = "Divisores de " + numero + ": " + divisores + " (Soma: " + (soma) + ")";
}

var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", numeroPerfeito);

// Exercicio D
function criarEstrelas(){
    var inLinhas = document.getElementById("inLinhas");
    var outLinhas = document.getElementById("outLinhas");

    var nLinhas = Number(inLinhas.value);

    if (nLinhas == 0 || isNaN(nLinhas)) {
        alert("Preencha corretamente");
        inLinhas.value = "";
        inLinhas.focus();
        return;
    }
// DÚVIDA - Qual foi a melhor escolha? A minha ou os dois "for" na resposta?
    var simbolos = "";
    var linha = "";
    for (var i = 1; i <= nLinhas; i++) {
        simbolos = simbolos + "*";
        linha = linha + simbolos + "\n";
    }
    outLinhas.textContent = linha;
}

var btnCriar = document.getElementById("btnCriar");
btnCriar.addEventListener("click", criarEstrelas);