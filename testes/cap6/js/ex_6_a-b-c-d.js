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