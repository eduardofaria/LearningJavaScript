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
    
    localStorage.setItem("Apostas", apostas_salvas);
}

function aposta_definir_ganhador(){
    let peso_melancia = Number(prompt("Qual o peso da melancia?"));
    let apostas = [];

    for (let i = 1; i < apostas_salvas.length; i+=2){
        apostas.push(Math.abs(apostas_salvas[i] - peso_melancia));
    }

    let menor_diferenca = Math.min(...apostas); //Spread syntax (...)
    
    let index_sorteado = apostas_salvas.indexOf((peso_melancia - menor_diferenca).toLocaleString());

    alert("Resultado - Peso correto: " + peso_melancia + "gr \n" + "-------------------------------------\n" +
     "Vencedor: " + apostas_salvas[index_sorteado - 1] + "\n" + "Apostou: " + apostas_salvas[index_sorteado]);
        
}


function aposta_limpar(){
    localStorage.removeItem("Apostas");
    apostas_salvas = [];
    in_nome.value = "";
    in_peso.value = "";
    in_nome.focus();
}


let btn_apostar = document.getElementById("btn_apostar");
btn_apostar.addEventListener("click", aposta_cadastrar_in);

let btn_limpar = document.getElementById("btn_limpar");
btn_limpar.addEventListener("click", aposta_limpar);

let btn_vencedor = document.getElementById("btn_vencedor");
btn_vencedor.addEventListener("click", aposta_definir_ganhador);





