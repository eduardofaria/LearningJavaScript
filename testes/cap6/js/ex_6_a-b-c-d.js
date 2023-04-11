// EXERCÍCIO A

let inMsg = document.getElementById("inMsg");
let outMsg = document.getElementById("outMsg");

function verificarMsg() {

    if (inMsg.value == ""){
        alert("Preencha o campo de mensagem");
        inMsg.focus();
        return;
    }
}

function criptografar() {
    verificarMsg();
    let msg = inMsg.value;
    let pares = "";
    let impares = "";

    for (let i=0; i < msg.length; i++) {
        if (i % 2 == 0) {
            pares += msg.charAt(i); // msg.charAt(i) ou msg[i]
        }
    }

    for (let i=0; i < msg.length; i++) {
        if (i % 2 !== 0) {
            impares += msg.charAt(i);
        }
    }

    outMsg.textContent = pares + impares;
}

let btnCrip = document.getElementById("btnCrip");
btnCrip.addEventListener("click", criptografar);

function desCriptografar() {
    verificarMsg();
    let msg = inMsg.value;
    let pares = ""; //recebe as posições pares
    let impares = "";//recebe as posições ímpares
    let desCrip = "";//recebe as posições pares e ímpares que serão reintercaladas
    
    let metadeMsg = Math.floor(msg.length / 2);
//descobre o ponto onde terminam as pares e começam as ímpares
        if (msg.length % 2 != 0) {
            metadeMsg += 1; 
        }
//acumula o conteúdo das posições pares
    for (let i = 0; i < metadeMsg; i++ ){
        pares += msg.charAt(i);
    }
//acumula o conteúdo das posições ímpares
    for (let i = metadeMsg; i < msg.length; i++ ){
        impares += msg.charAt(i);
    }
//realoca intercalando as pares e as ímpares em suas posições originais
    for (let i = 0; i < metadeMsg; i++){
        desCrip += pares.charAt(i) + impares.charAt(i);
    }

    outMsg.textContent = desCrip;  
}

let btnDesCrip = document.getElementById("btnDesCrip");
btnDesCrip.addEventListener("click", desCriptografar);



// EXERCÍCIO B

let inAutor = document.getElementById("inAutor");
let outBiblio = document.getElementById("outBiblio");

function criarBiblioName(){
    let autorName = inAutor.value;
    onlyText(inAutor);
    if(autorName.indexOf(" ") == -1) {
        alert("Informe o nome completo");
        inAutor.focus();
        return;
    }
    
    let iniciais = [];
    iniciais[0] = autorName.charAt(0);
    
    for (let i = 0; i < autorName.length; i++) {

        if (autorName.charAt(i) == " ") {
            iniciais.push(autorName.charAt(i + 1));
        }
    }
    iniciais.pop(-1); // remove inicial do último sobrenome
    
    let sobrenome = [];
    for (let i = autorName.length; i > 0; i--){
        sobrenome.push(autorName.charAt(i));
        if(autorName.charAt(i) == " "){
            i = 0;
        }
    }
    sobrenome.reverse(); // coloca o sobrenome em ordem
    let biblioName = sobrenome.join("") + ", " + iniciais.join(". ") + ".";
    if (iniciais.length == 1){//elimina dois pontos no final se só houver uma abreviação
        //biblioName.charAt(-1) = "";
    }
    //biblioName.charAt(-1) = ""; // remove espaço no final
    outBiblio.textContent = "Citação Bibliográfica: " + biblioName.toUpperCase();
}

let btnMakeBliblio = document.getElementById("btnMakeBliblio");
btnMakeBliblio.addEventListener("click", criarBiblioName);


// EXERCÍCIO C
let inPalavra = document.getElementById("inPalavra");
let outPalavra = document.getElementById("outPalavra");

function verifyPoli() {
    let frase = inPalavra.value;
    let noSpace = "";

    onlyText(inPalavra);
    
    for (let i=0; i < frase.length; i++){
        if(frase.charAt(i) !== " "){
            noSpace += frase.charAt(i).toUpperCase();
        }
        /*
        O AUTOR USOU REGEX KKKK GOD! Esqueci disso hauahauhaua Eu usei um FOR e um IF para fazer o mesmo.
        //retira os espaços em branco da frase
        var frase2 = frase.replace(/ /g, "");
        */
    }
    
    let reversed = "";

    for (let i = (noSpace.length - 1); i >= 0; i--){
        reversed += noSpace.charAt(i);
    }
    
    if (noSpace == reversed) {
        outPalavra.textContent = frase.toUpperCase() + " é um Palíndromo"
    } else {
        outPalavra.textContent = frase.toUpperCase() + " não é um Palíndromo"
    }

}

let btnVerify = document.getElementById("btnVerify");
btnVerify.addEventListener("click", verifyPoli);

/* O exercício C me ensinou que tenho muito o que melhorar no algoritmo.
Não que eu esteja errando na lógica, mas há caminhos mais simples
e só vou melhorar, e pegar esses caminhos quando tiver um arsenal
maior no que diz respeito a conhecimento da sintaxe.

Eu esqueço os métodos que não uso com frequência na hora de montar
meu algoritmo e me apego aos métodos que já conheço e tento usa-los sempre.

Mas vou melhorar nisso.

*/


// EXERCÍCIO D
let inData = document.getElementById("inData");
let inValor = document.getElementById("inValor");
let outDataLimite = document.getElementById("outDataLimite");
let outValor = document.getElementById("outValor");

function calcularMulta(){
    let dataInf = inData.value;
    let valor = Number(inValor.value);

    if(dataInf == "" || valor == 0 || isNaN(valor)) {
        alert("Preencha os campos corretamente.")
        inData.value = "";
        inValor.value = "";
        inValor.focus();
        return;
    }

    let diaMesAno = dataInf.split("-");

    let dataLimite = new Date();
    let data = new Date();

    data.setDate(diaMesAno[2]);
    data.setMonth(diaMesAno[1] - 1);
    data.setFullYear(diaMesAno[0]);
    dataLimite = data;

    dataLimite.setDate(data.getDate() + 90); //Avança em 90 dias
 
    let comDesconto = valor.toFixed(2) - ((valor.toFixed(2) * 20) / 100); // Valor com desconto

    outDataLimite.textContent = "Data limite para pagto com desconto: " + (dataLimite.getDate() < 10 ? "0" + dataLimite.getDate() : dataLimite.getDate()) +"/" + ((dataLimite.getMonth() + 1) < 10 ? "0" + (dataLimite.getMonth() + 1) : (dataLimite.getMonth() + 1))  + "/" + dataLimite.getFullYear();
    outValor.textContent = "Valor com Desconto R$: " + comDesconto.toFixed(2);
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularMulta);




// criei essa função para verificar o campo para todos os exercícios que só precisem desses condições
function onlyText(msg) {
    if (msg.value == "" || !isNaN(msg.value)){
        alert("Preencha o campo corretamente");
        msg.focus();
        return;
    }
}