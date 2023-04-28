let in_nome = document.getElementById("in_nome");
let in_peso = document.getElementById("in_peso");
let apostas_salvas = [];

if (localStorage.getItem("Apostas")){
    let apostas_storage = localStorage.getItem("Apostas").split(",");
    for (let i = 0; i < apostas_storage.length; i++){
        apostas_salvas.push(apostas_storage[i]);
    }
} else {
    apostas_salvas = [];
}

function verificar_preenchimento(){
    let nome = in_nome.value;
    let peso = Number(in_peso.value);
    if(nome == ""){
        alert("Informe o nome do apostador.");
        in_nome.focus();
        return;
    }
    if(peso == 0){
        alert("Informe o peso que deseja apostar.");
        return;
    }
    let apostador = [nome, peso]
    return apostador;
}

function aposta_cadastrar_in(){
    let aposta = verificar_preenchimento().splice(",");
    if(apostas_salvas.indexOf(aposta[0]) != -1){
        alert("Apostador já cadastrado.");
        return;
    }

    if(apostas_salvas.indexOf(aposta[1]) != -1){
        alert("Peso já apostado.");
        return;
    }
    
    apostas_salvas.push(aposta[0], aposta[1]);
    //console.log("apostas_salvas: " + apostas_salvas + "\n" + "aposta: " + aposta);
    
    localStorage.setItem("Apostas", apostas_salvas);
}

function aposta_definir_ganhador(){}

function aposta_limpar(){
    localStorage.removeItem("Apostas");
    apostas_salvas = [];
    in_nome.value = "";
    in_peso.value = "";
    in_nome.focus();
}

function aposta_exibir_ganhador(){}



let btn_apostar = document.getElementById("btn_apostar");
btn_apostar.addEventListener("click", aposta_cadastrar_in);
let btn_limpar = document.getElementById("btn_limpar");
btn_limpar.addEventListener("click", aposta_limpar);





