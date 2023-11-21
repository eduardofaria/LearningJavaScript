let filmesSalvos = "";
restaurarFilmes();
function adicionarFilmes() {
    let inTitle = document.getElementById("inTitle");
    let inGenero = document.getElementById("inGenero");

    if (inTitle.value == "" || inGenero.value == "") {
        alert("Preencha os campos corretamente");
        inTitle.focus();
        return;
    }

    let filme = {title: inTitle.value, genero: inGenero.value}

    let tbFilmes = document.getElementById("tbFilmes");
    
    adicionarLinhaTabela(tbFilmes, filme.title, filme.genero);
    gravarFilme(tbFilmes);
    //gravarFilme(filme.title, filme.genero);

    inTitle.value = "";
    inGenero.value = "";
    inTitle.focus();

    //console.log(filme);
}


function adicionarLinhaTabela (tabela, filme, genero){
    let linha = tabela.insertRow(-1);
    
    let col_1 = linha.insertCell(0);
    let col_2 = linha.insertCell(1);
    let col_3 = linha.insertCell(2);

    col_1.textContent = filme;
    col_2.textContent = genero;
    col_3.innerHTML = "<input type='checkbox'>";

}


function gravarFilme(tabela){
    if (localStorage.getItem("filmes")) {
        localStorage.removeItem("filmes")
    }
    let linhas = tabela.getElementsByTagName("tr");
    for (let i = 1; i < linhas.length; i++) {
        filmesSalvos += tabela.rows[i].cells[0].textContent + ";" + tabela.rows[i].cells[1].textContent + ";";
    }
    let filmes = filmesSalvos.split(";");
    filmes.pop();
    localStorage.setItem("filmes", filmes); 
    
    //console.log("filmesSalvos: " + filmesSalvos)
}


let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", adicionarFilmes);

function restaurarFilmes() {
    if (localStorage.getItem("filmes")){
        let tabela = document.getElementById("tbFilmes")
        let linhas = tabela.getElementsByTagName("tr");
        for (let i = 1; i < linhas.length; i++) {
            tabela.deleteRow(i);
        }

        filmesSalvos = localStorage.getItem("filmes");
        let arrFilmes = filmesSalvos.split(",");
        for (let i = 0; i < arrFilmes.length; i = i+2) {
            adicionarLinhaTabela(tbFilmes, arrFilmes[i], arrFilmes[i+1]);
        }
    }
    //console.log("restaurarFilmes: " + filmesSalvos)
}

