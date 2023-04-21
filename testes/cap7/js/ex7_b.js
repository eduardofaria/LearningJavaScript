let inNome = document.getElementById("inNome");
let btnGerar = document.getElementById("btnGerar");
let outSenha = document.getElementById("outSenha");


function validarNome(testName){
    if (testName.includes(" ") == false) {
        nameOk = false;
        return nameOk;
    } else {
        nameOk = true;
        return nameOk;
    }
    
}

let sobrenome = "";
function obterSobrenome(nome){
    validarNome(inNome.value);
    if (nameOk == true) {
        let space = nome.lastIndexOf(" ");
        sobrenome = nome.slice(space).toLowerCase();
        return sobrenome;
    }
}

let qtdVogais = "";
function contarVogais(inTestVogal) {
    if(/[aeiou]/.test(inTestVogal)) {
        regexVogais = /[aeiou]/g;
        let vogais = inTestVogal.match(regexVogais);
            if(vogais.length < 10){
                qtdVogais = "0" + vogais.length;
            } else {
                qtdVogais = vogais.length;
            }
        return qtdVogais;
    }
}

function gerarSenha(){
    let nome = inNome.value;
    if(nome == "" || !isNaN(nome)) {
        alert("Preencha o campo corretamente!");
        inNome.value = "";
        inNome.focus();
        return;
    }
    validarNome(nome);
    if (nameOk){
        obterSobrenome(nome);
    } else {
        alert("Infome um nome completo!");
    }
    contarVogais(sobrenome);
    
    outSenha.textContent = "Senha Inicial: " + sobrenome + qtdVogais;
}

btnGerar.addEventListener("click", gerarSenha);