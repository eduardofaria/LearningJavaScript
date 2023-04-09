let inMsg = document.getElementById("inMsg");
let outMsg = document.getElementById("outMsg");

function verificarMsg {
    let msg = inMsg.value;
    if (msg == ""){
        alert("Preencha o campo de mensagem");
        inMsg.focus();
        return;
    }
}

function criptografar {
    verificarMsg();



} 