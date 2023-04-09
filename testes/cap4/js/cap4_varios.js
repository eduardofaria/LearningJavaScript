function preencherEstrelas() {
    //DOMs
    var inNumeros = document.getElementById("inNumero");
    var outEspacos = document.getElementById("outEspacos");

    var num = Number(inNumeros.value);

    if (num == 0 || isNaN(num)) {
        alert("Preencha o campo corretamente");
        inNumeros.focus();
        return;
    }

    var simbolos = "";

    for (var i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            simbolos = simbolos + "*";
        } else {
            simbolos = simbolos + "_";
        }
    }

    outEspacos.textContent = simbolos;

}
var btnPreencher = document.getElementById("btnPreencher");
btnPreencher.addEventListener("click", preencherEstrelas);