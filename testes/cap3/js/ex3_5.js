function calcularRaiz() {
    // capturar referências DOM
    var inNumber = document.getElementById("inNumber");
    var outRaiz = document.getElementById("outRaiz");

    var numero = Number(inNumber.value);

    if (numero == 0 || isNaN(numero)) {
        outRaiz.textContent = "Digite um número.";
        inNumber.focus();
        return;
    }
    //calcula a raiz
    var raiz = Math.sqrt(numero);

    if (raiz == Math.floor(raiz)) {
        outRaiz.textContent = "Raiz: " + raiz;
    } else {
        outRaiz.textContent = "Não há raiz quadrada exata para o número: " + numero;
    }
}

var btnRaiz = document.getElementById("btnRaiz");
btnRaiz.addEventListener("click", calcularRaiz);