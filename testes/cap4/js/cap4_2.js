function decrescerNumeros() {
    var inNumero = document.getElementById("inNumero");
    var numero = Number(inNumero.value);
    var saida = document.getElementById("outNumeros");
    var resultado = "Entre " + numero + " e 1: ";

    for (var i = numero; i > 1; i--) {
        resultado = resultado + i + ", ";
    /*    if (i == 1){
            resultado = resultado + i + ".";
        } else {
            resultado = resultado + i + ", ";
        }
    */
    }

    resultado = resultado + i + ".";

    saida.textContent = resultado;

}

var btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", decrescerNumeros);