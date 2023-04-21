var inNome = document.getElementById("inName");
var inAge = document.getElementById("inAge");
var nome = "";
let age = "";


function checkInput(){
    age = Number(inAge.value);
    nome = inNome.value;
    if (nome == "" || age == 0) {
        alert("Preencha os campos corretamente!");
        nome = "";
        age = "";
        inNome.focus();
        return;
    }
}

let rank = "";
function categotizarAluno(age){
    if(age <= 12) {
        rank = "Infantil";
    } else if(age > 12 && age <= 18) {
        rank = "Juvenil";
    } else {
        rank = "Adulto";
    }

    return rank;
}

let tracos = "";
function retornaTracos(nome){
    let count = nome.length;
    tracos = "";
    for (let i = 0; i < count; i++){
        if(nome.charAt(i) !== " "){
            tracos += "-";
        } else {
            tracos += " ";
        }
    }
    return tracos;
}

function saidaCategoria(){
    let outResult = document.getElementById("outResult");
    checkInput();
    categotizarAluno(age);
    retornaTracos(nome);

    outResult.textContent = nome + "\n" + tracos + "\n" + "Categoria: " + rank;

}

let btnRank = document.getElementById("btnRank");
btnRank.addEventListener("click", saidaCategoria);