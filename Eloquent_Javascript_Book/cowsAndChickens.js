/*
function contagemVacasGalinhas(vacas, galinhas) {
    let nVacas = String(vacas);
    while (nVacas.length < 3){nVacas = 0 + nVacas};
    let nGalinhas = String(galinhas);
    while (nGalinhas.length < 3){nGalinhas = 0 + nGalinhas};
    console.log(nVacas + " Vacas" + "\n" + nGalinhas + " Galinhas");
}
contagemVacasGalinhas(7, 11);
*/

function printAnimais(qtd, tipo){
    let nAnimais = String(qtd);
    while (nAnimais.length < 3) { nAnimais = "0" + nAnimais }
    console.log(`${nAnimais} ${tipo}`);
}

function inputAnimais(vacas, galinhas, porcos){
    printAnimais(vacas, " Vacas");
    printAnimais(galinhas, " Galinhas");
    printAnimais(porcos, " Porcos");
}

inputAnimais(7, 11, 3);

