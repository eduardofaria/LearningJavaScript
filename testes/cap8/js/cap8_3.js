let in_nome = document.getElementById("in_nome");
let in_peso = document.getElementById("in_peso");
let out_apostas = document.getElementById("out_apostas");
let apostas_salvas = [];
let apostas_lista;

if (localStorage.getItem("Apostas")){
    apostas_lista = "";
    let apostas_storage = localStorage.getItem("Apostas").split(",");
    for (let i = 0; i < apostas_storage.length; i++){
        apostas_salvas.push(apostas_storage[i]);
    }
    for (let i = 0; i < apostas_salvas.length; i+=2) {
        aposta_exibir(apostas_salvas[i], apostas_salvas[i + 1]);
    }   
} else {
    apostas_salvas = []; // Sem histórico, zera tudo
    apostas_lista = "";
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
    aposta_exibir(aposta[0], aposta[1]);
    localStorage.setItem("Apostas", apostas_salvas);

    in_nome.value = "";
    in_peso.value = "";
    in_nome.focus();

}

function aposta_definir_ganhador(){
    let peso_melancia = Number(prompt("Qual o peso da melancia?"));
    let apostas = [];
    for (let i = 1; i < apostas_salvas.length; i+=2){
        apostas.push(Math.abs(apostas_salvas[i] - peso_melancia));
    }
    
    let menor_diferenca = Math.min(...apostas); //Spread syntax (...)
    if ((apostas.indexOf(menor_diferenca)) != (apostas.lastIndexOf(menor_diferenca))) { //Tratando um caso de empate
        let index_sorteado_1 = (apostas.indexOf(menor_diferenca)*2);
        let index_sorteado_2 = (apostas.lastIndexOf(menor_diferenca)*2); // Só é possível empate entre 2 (o que acertou pra mais ou menos)
        alert("Resultado - Peso correto: " + peso_melancia + "gr \n" + "-------------------------------------\n" +
        "TIVEMOS UM EMPATE! \n" + "-------------------------------------\n" +
        "Vencedor 1: " + apostas_salvas[index_sorteado_1] + "\n" + "Apostou: " + apostas_salvas[index_sorteado_1 + 1] +
         "\n" + "-------------------------------------\n" +
        "Vencedor 2: " + apostas_salvas[index_sorteado_2] + "\n" + "Apostou: " + apostas_salvas[index_sorteado_2 + 1]);  

    } else {
        let index_sorteado = (apostas.indexOf(menor_diferenca)*2);
        alert("Resultado - Peso correto: " + peso_melancia + "gr \n" + "-------------------------------------\n" +
        "Vencedor: " + apostas_salvas[index_sorteado] + "\n" + "Apostou: " + apostas_salvas[index_sorteado + 1]);  
    }
    aposta_limpar()
}

function aposta_exibir (nome, aposta){
    apostas_lista += `${nome} - ${aposta}gr\n`
    out_apostas.textContent = apostas_lista;
}

function aposta_limpar(){
    localStorage.removeItem("Apostas");
    apostas_salvas = [];
    apostas_lista = "";
    out_apostas.textContent = "";
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





