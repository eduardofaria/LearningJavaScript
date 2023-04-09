function verificarTriangulo() {
    //DOMs
    var ladoA = document.getElementById("inA");
    var ladoB = document.getElementById("inB");
    var ladoC = document.getElementById("inC");
    var confirmaTriangulo = document.getElementById("outTriangulo");
    var tipoTriangulo = document.getElementById("outTipo");
    //input to numbers
    var sizeA = Number(ladoA.value);
    var sizeB = Number(ladoB.value);
    var sizeC = Number(ladoC.value);

    // filtro inputs
    if (sizeA == 0 || sizeB == 0 || sizeC == 0 || isNaN(sizeA) || isNaN(sizeB) || isNaN(sizeC)) {
        alert("Preencha os dados corretamente.");
        ladoA.value = "";
        ladoB.value = "";
        ladoC.value = "";
        sizeA.focus();
    }

    // verifica se é triângulo
    if ((sizeA > (sizeB + sizeC)) || (sizeB > (sizeA + sizeC) || (sizeC > (sizeA + sizeB)))) {
        /*
         Operadores aritiméticos, comparação e atribuição não precisam de "(" ")" ao se misturarem uns com os outros.
         O "if" a cima poderia ser escrito:  if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {  
         */
        var triangulo = false;
    } else {
        var triangulo = true;
        // verifica tipo de triângulo
        if (sizeA == sizeB && sizeB == sizeC) {
            var tipo = "Equilátero";
        } else if ((sizeA + sizeB) == (sizeA * 2) || (sizeB + sizeC) == (sizeB * 2) || (sizeA + sizeC) == (sizeA * 2)) {
            /*
            O autor foi mais elegante comparando os lados pro isósceles:
            (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) 
            */
            var tipo = "Isósceles";
        } else {
            var tipo = "Escaleno";
        }
    }

    // escrever resultado;
    if (triangulo == true) {
        confirmaTriangulo.textContent = "Forma um triângulo."
        tipoTriangulo.textContent = "Tipo: " + tipo + "."
    } else {
        confirmaTriangulo.textContent = "Não forma um triângulo."
        tipoTriangulo.textContent = "";
    }
}

//Botão
var verificar = document.getElementById("btnVerificar");
verificar.addEventListener("click", verificarTriangulo);