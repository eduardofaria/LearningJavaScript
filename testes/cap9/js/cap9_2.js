let coins00_10, coins00_25, coins00_50, coins01_00;
function newCoins(){
    coins00_10 = Math.ceil(Math.random() * 5);
    coins00_25 = Math.ceil(Math.random() * 5);
    coins00_50 = Math.ceil(Math.random() * 5);
    coins01_00 = Math.ceil(Math.random() * 5);
    targetValue();
    console.log("Moedas de 0.10: " + coins00_10);
    console.log("Moedas de 0.25: " + coins00_25);
    console.log("Moedas de 0.50: " + coins00_50);
    console.log("Moedas de 1 real: " + coins01_00);
    console.log("Total: " + `${targetValue()}`)
}

function targetValue(){
    let coinsValue = (coins00_10 * 0.10) + (coins00_25 * 0.25) + (coins00_50 * 0.50) + (coins01_00 * 1);
    return coinsValue;
}

function verifyCoins(){
    let inValue = document.getElementById("inValue");
    let resposta = Number(inValue.value).toFixed(2);
    if (resposta == ""){
        alert("Preencha um valor!");
        return;
    }
    (resposta == targetValue())? alert("Parabéns, você acertou!"): alert("Valor errado...");
}

function showCoins(){
    newCoins();
    console.log("Moedas de 0.10: " + coins00_10);
    console.log("Moedas de 0.25: " + coins00_25);
    console.log("Moedas de 0.50: " + coins00_50);
    console.log("Moedas de 1 real: " + coins01_00);
    console.log("Total: " + `${targetValue()}`)
}

let btnNewCoins = document.getElementById("btnNewCoins");
btnNewCoins.addEventListener("click", showCoins);

let btnCheckCoins = document.getElementById("btnCheckCoins");
btnCheckCoins.addEventListener("click", verifyCoins);

newCoins();