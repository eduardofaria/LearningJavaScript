const div_header = document.getElementById("div_header");
let rb_brasil = document.getElementById("rb_brasil");
let rb_pelotas = document.getElementById("rb_pelotas");
let rb_farroupilha = document.getElementById("rb_farroupilha");

let clube =  function seleciona_clube(storage){ // Define qual o clube selecionado
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
    if (!rb_brasil.checked && !rb_pelotas.checked && !rb_farroupilha.checked){
        clube_selecionado = (clube_salvo)? clube_salvo : null; // se não houver nada armazenado ou selecionado
    }
    return clube_selecionado;
}

function troca_clube () { // Faz todas as modificações de estilo de acordo com o clube
    let logo_clube = document.getElementById("logo_clube");
    div_header.className = "cor_" + clube();
    logo_clube.src = "img/" + clube().toLocaleLowerCase() + ".png";
    logo_clube.className = "visivel";
    logo_clube.alt = "Símbolo do " + clube();
    localStorage.setItem("clube", clube()); // Salva a escolha no cache local
}
// Monitora a seleção do clube
rb_brasil.addEventListener("change", troca_clube);
rb_pelotas.addEventListener("change", troca_clube);
rb_farroupilha.addEventListener("change", troca_clube);

let clube_salvo = localStorage.getItem("clube"); // verifica se há uma seleção armasenada previamente
(clube_salvo)? troca_clube() : clube = null;