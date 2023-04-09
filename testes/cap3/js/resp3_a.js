function verificarParOuImpar() {
    // DOM
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");
    var numero = Number(inNumero.value);
    // filtro
    if (numero == 0 || isNaN(numero)) {
        alert("Coloque um número diferente de ZERO.")
        inNumero.focus();
        return;
    }

    //verificar número
    if (numero % 2 == 0) {
        outResposta.textContent = "É par!";
    } else {
        outResposta.textContent = "É ímpar!";
    }
}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", verificarParOuImpar);