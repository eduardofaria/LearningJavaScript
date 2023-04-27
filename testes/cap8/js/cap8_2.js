const div_header = document.getElementById("div_header");
let rb_brasil = document.getElementById("rb_brasil");
let rb_pelotas = document.getElementById("rb_pelotas");
let rb_farroupilha = document.getElementById("rb_farroupilha");
let rb_nenhum = document.getElementById("rb_nenhum");
let logo_clube = document.getElementById("logo_clube");

let clube = function seleciona_clube(){ // Define qual o clube selecionado
    let clube_selecionado;
    if (rb_brasil.checked) {
        clube_selecionado = "Brasil";
    }
    if (rb_pelotas.checked) {
        clube_selecionado = "Pelotas";
    }
    if (rb_farroupilha.checked) {
        clube_selecionado = "Farroupilha";
    }
    if (rb_nenhum.checked){
        clube_selecionado = "Nenhum";
        localStorage.removeItem("clube");
    }
    return clube_selecionado;
}

function troca_clube () { // Faz todas as modificações de estilo de acordo com o clube
    muda_pagina(clube());
    localStorage.setItem("clube", clube());
}

function carrega_clube (selecao){ // Mudao radio button selecionado de acordo com o que foi armazenado previamente
    if (selecao != null){
            let radio_selected = "rb_" + selecao.toLocaleLowerCase();
            let loaded_radio = document.getElementById(radio_selected);
            loaded_radio.checked = true;
            muda_pagina(selecao);
        }   
}

function muda_pagina(selecao){
    if (selecao != null || selecao != "Nenhum") {
        div_header.className = "cor_" + selecao;
        logo_clube.src = "img/" + selecao.toLocaleLowerCase() + ".png";
        logo_clube.className = "visivel";
        logo_clube.alt = "Símbolo do " + selecao;
    } else if (selecao == null || selecao == "Nenhum" ){
        div_header.className = "";
        logo_clube.src = "";
        logo_clube.className = "oculto";
        logo_clube.alt = "";
    }
}

// Monitora a seleção do clube
rb_brasil.addEventListener("change", troca_clube);
rb_pelotas.addEventListener("change", troca_clube);
rb_farroupilha.addEventListener("change", troca_clube);
rb_nenhum.addEventListener("change", troca_clube);

let clube_salvo = localStorage.getItem("clube"); // verifica se há uma seleção armasenada previamente
carrega_clube(clube_salvo);
