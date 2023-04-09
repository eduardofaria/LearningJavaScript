var criancas = []; //vetor com nomes e idades

function adicionarCriancas (){
    //DOMs
    var inNome = document.getElementById("inNome");
    var inIdade = document.getElementById("inIdade");

    //Get info
    var nome = inNome.value;
    var idade = Number(inIdade.value);

    //Verificar Preenchimento
    if (nome == "" || inIdade.value == "" || isNaN(idade)){
        alert("Preencha os campos corretamenete!");
        inNome.focus();
        return;
    }

    //Adicionar dados ao vetor
    criancas.push({ nome: nome, idade: idade });

    //Limpar campos e reposicionar cursor em nomes
    inNome.value = "";
    inIdade.value = "";
    inNome.focus();

    listarCriancas(); // chama a lista de criancas adicionadas
}

//Botão que aciona a função adicionarCriancas
var btnAdicionar = document.getElementById("btnAdicionar");
btnAdicionar.addEventListener("click", adicionarCriancas);

function listarCriancas (){
    //verificar se vetor está vazio
    if (criancas.length == 0) {
        alert("A lista está vazia.")
        return;
    }

    var lista = ""; //variável para concatenar info do vetor

    //percorrer elementos do vetor
    for (var i = 0; i < criancas.length; i++) {
        lista += criancas[i].nome + " - " + criancas[i].idade + " ano(s)\n";
    }
    //escrever lista no HTML
    document.getElementById("outLista").textContent = lista;
}

//botão que executa a listagem
var btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", listarCriancas);


function resumirPorIdade() {
    //verificar se lista está vazia
    if (criancas.length == 0) {
        alert("Não há crianças na lista.")
        return;
    }

    //criar uma cópia integral da lista original
     var criancasCopia = criancas.slice();

    //Não entendi este método utilizado para ordenar numericamente e evitar o problema do 2 vir antes do 10, não foi explicado no livro até o momento ***
    criancasCopia.sort(function (a, b) {return a.idade - b.idade});
    //criancasCopia.sort();
    var listaResumida = ""; //concatenar nova lista resumida
    var contadorIdade = criancasCopia[0].idade; //primeira e menor idade na lista;
    var nomesPorIdade = []; //onde serão salvos os nomes recolhidos de cada faixa de idade;
    //Percorrer cada elemento da lista ordenada por idade
    for (var i = 0; i < criancasCopia.length; i++) {
        if (criancasCopia[i].idade == contadorIdade) {
            nomesPorIdade.push(criancasCopia[i].nome);
        } else {
            listaResumida += contadorIdade + "ano(s): " + nomesPorIdade.length + " criança(s) - " 
            + (nomesPorIdade.length / criancasCopia.length * 100).toFixed(2) + 
            "%\n" + "(" + nomesPorIdade.join(", ") + ")\n\n";

            contadorIdade = criancasCopia[i].idade //vai para próxima idade
            nomesPorIdade = []; //limpa os nomes armazenados na idade anteiror
            nomesPorIdade.push(criancasCopia[i].nome); //Primeiro nome da nova idade
        }

    }


    //publicar os nomes da última idade apos sair do "For" sem passar pelo "Else" (pois ele que publicava os nomes ao passar para o próximo grupo de idades).
    listaResumida += contadorIdade + "ano(s): " + nomesPorIdade.length + " criança(s) - " + 
    (nomesPorIdade.length / criancasCopia.length * 100).toFixed(2) + "%\n" + 
    "(" + nomesPorIdade.join(", ") + ")\n";

    document.getElementById("outLista").textContent = listaResumida;

}

    var btnResumir = document.getElementById("btnResumir");
    btnResumir.addEventListener("click", resumirPorIdade);


