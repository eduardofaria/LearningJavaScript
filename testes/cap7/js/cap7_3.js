let inVeiculo = document.getElementById("inVeiculo");
let inAno = document.getElementById("inAno");
let inPreco = document.getElementById("inPreco");
let outTipo = document.getElementById("outTipo");
let outValorVenda = document.getElementById("outValorVenda");

function fillCheck(){
    if(inVeiculo.value == "" || inAno.value == "" || inPreco.value == "" || isNaN(inPreco.value) || isNaN(inAno.value)){
        alert("Informe os campos corretamente");
        inVeiculo.focus();
        return;
    }
}

function classificarVeiculo(ano) {
    let anoAtual = new Date().getFullYear();

    if (ano == anoAtual) {
        tipo = "Novo";
        return tipo;
    } else if (ano >= (anoAtual - 2) && ano < anoAtual) { 
        /* O autor fez assim: (ano == anoAtual-1 || ano == anoAtual - 2)
        O autor não trata anos maiores que o atual, alem da margem seminovos ser fixa, eu fiz 
        precisando editar apenas dizer quantos anos longe do atual */
        tipo = "Seminovo";
        return tipo;
    } else if (ano < (anoAtual - 2)) {
        tipo = "Usado";
        return tipo;
    } else {
        alert("Com certeza esse carro não veio do futuro, corrija o ano :)");
        return;
    }
}

function precoVenda(tipo) {
    let preco = Number(inPreco.value);
    if(tipo == "Novo") {
        venda = ((preco * 8) / 100) + preco;
        return venda;
    } else if (tipo == "Seminovo" || tipo == "Usado"){
        venda = ((preco * 10) / 100) + preco;
        return venda;
    } else {
        alert("ERRO: Classificação de uso não definida.");
    }
}

function classificacao(){
    fillCheck();
    classificarVeiculo(inAno.value);
    precoVenda(tipo);

    outTipo.textContent = inVeiculo.value + " - " + tipo;
    outValorVenda.textContent = "Preço de Venda R$: " + venda.toFixed(2);
}

let btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", classificacao);