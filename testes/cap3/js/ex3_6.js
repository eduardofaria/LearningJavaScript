function exibirNotas() {
    //capturar DOMs
    var inValor = document.getElementById("inValor");
    var outNotas100 = document.getElementById("outNotas100");
    var outNotas50 = document.getElementById("outNotas50");
    var outNotas10 = document.getElementById("outNotas10");

    //limpa campos de saída
    outNotas100.textContent = "";
    outNotas50.textContent = "";
    outNotas10.textContent = "";

    //input do valor
    var valor = Number(inValor.value);

    //filtro
    if (valor == 0 || isNaN(valor)) {
        alert("Por favor, informe um valor maior ou igual a 10.")
        inValor.focus();
        return;
    }

    //verificar se é multiplo de 10
    if (valor % 10 != 0) {
        alert("Escolha um múltiplo de 10");
        inValor.focus();
        return;
    }

    // calcular nota
    var notas100 = Math.floor(valor / 100);
    var resto = valor % 100;
    var notas50 = Math.floor(resto / 50);
    var resto = resto % 50;
    var notas10 = Math.floor(resto / 10);
    
    // exibe notas viáveis
    if (notas100 > 0) {
        outNotas100.textContent = "Notas de 100: " + notas100;
    }
    if (notas50 > 0) {
        outNotas50.textContent = "Notas de 50: " + notas50;
    }
    if (notas10 > 0) {
        outNotas10.textContent = "Notas de 10: " + notas10;
    }
}

var btnNotas = document.getElementById("btnNotas");
btnNotas.addEventListener("click", exibirNotas);