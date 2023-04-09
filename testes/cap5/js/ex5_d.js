var inNoticia = document.getElementById("inNoticia");
var noticias = [];
var qtdNoticias = 0;
var outQtd = document.getElementById("outQtd");
outQtd.textContent = "Notícias Cadastradas: " + qtdNoticias;

function adicionarNoticias() {
    if (inNoticia.value == "" || !isNaN) {
        alert("informe uma notícia válida.");
        inNoticia.value = "";
        inNoticia.focus();
        return;
    }

    noticias.push((qtdNoticias + 1) + "º) " + inNoticia.value);

    //UX - Prompt pronto para nova entrada
    inNoticia.value = "";
    inNoticia.focus();
    
    atualizarQtd();    
}

var btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarNoticias);

function listarUltimas() {
    var quantidade = Number(prompt("Quantas últimas notícias?"));

    if (qtdNoticias == 0){
        alert("Não há notícias cadastradas.");
        return;    
    } else if (quantidade == "" || isNaN(quantidade)) {
        alert("Informe um número de notícias.");
        return;
    }  else if (quantidade > qtdNoticias){
        alert("Informe um valor menor que " + qtdNoticias);
        return;
    }

    var ultimas = noticias.slice();
    ultimas.reverse();

    var lista = quantidade + " Últimas Notícias" + "\n" + "-------------------------\n";

    for (var i = 0; i < quantidade; i++) {
        lista += ultimas[i] + "\n";
    }

    var outUltimas = document.getElementById("outUltimas");
    outUltimas.textContent = lista;
}
var btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", listarUltimas);

function atualizarQtd() {
    qtdNoticias = noticias.length;
    outQtd.textContent = "Notícias Cadastradas: " + qtdNoticias;
}






