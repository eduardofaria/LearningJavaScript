var in_valor = document.getElementById("in_valor");
var rb_sim = document.getElementById("rb_sim");
var rb_nao = document.getElementById("rb_nao");
var desconto = "";

// verifica o preenchimento e retorna o valor inserido
function valor_total(){
    var valor = Number(in_valor.value);
    if (valor == 0 || isNaN(valor)){
        alert("Preencha o valor da vacina.");
        in_valor.focus();
        return;
    }
    return valor;
}

// define o tipo de desconto
function definir_desconto(){
    let area_convenio = document.getElementById("area_convenio");
    if (rb_sim.checked) {
        let sl_convenio = document.getElementById("sl_convenio");
        var desconto = sl_convenio.value;
    } else if (rb_nao.checked) {
        var desconto = "opt_0";
    }
    return desconto;
}

// define o valor do desconto
function taxa_desconto() {
    var opt_taxa = [10, 20, 50];
    if (definir_desconto() == "opt_0"){
        return opt_taxa[0];
    } else if (definir_desconto() == "opt_1") {
        return opt_taxa[1];
    } else if (definir_desconto() == "opt_2") {
        return opt_taxa[2];
    }
}

// oculta ou exibe o seletor de desconto
rb_sim.addEventListener("change", function(){area_convenio.className = "visivel";});
rb_nao.addEventListener("change", function(){area_convenio.className = "oculto";});

// calcula o valor do desconto
function calcularDesconto(total, desconto){
    let valor_desconto = (total * desconto) / 100;
    return valor_desconto;
}

// imprime os valores na página
function exibir_resultado() {
    let out_desc = document.getElementById("out_desc");
    let out_pagar = document.getElementById("out_pagar");
    console.log()
    out_desc.textContent = "Desconto R$: " + calcularDesconto(valor_total(), taxa_desconto()).toFixed(2);
    out_pagar.textContent = "A pagar R$: " + (valor_total() - calcularDesconto(valor_total(), taxa_desconto())).toFixed(2);
}

let btn_calcular = document.getElementById("btn_calcularDesc");
btn_calcular.addEventListener("click", exibir_resultado);