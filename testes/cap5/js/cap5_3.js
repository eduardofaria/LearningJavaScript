var carros = []; // vetor global

function adicionarCarros() {

    //DOMs
    var inModelo = document.getElementById("inModelo");
    var inPreco = document.getElementById("inPreco");

    //Obter conteúdo
    var modelo = inModelo.value;
    var preco = Number(inPreco.value);


    //Verificar preenchimento
    if (modelo == "" || preco == 0 || isNaN(preco)) {
        alert("Informe correntamente os dados!");
        inModelo.focus();
        return;
    }

    //Adicionar objetos ao vetor
    carros.push({modelo: modelo, preco: preco});

    //Reseta o form
    inModelo.value = "";
    inPreco.value = "";

    //FUÇÃO QUE LISTA OS CARROS
    listarCarros();
}   

//botão que usa a função adicionar
var btnAdd = document.getElementById("btnAdicionar");
btnAdd.addEventListener("click", adicionarCarros);

/*Lista direta com textContent, equivalente a:
var outLista = document.getElementById("outLista");
por
document.getElementById("outLista").textContent = lista;
*/

function listarCarros(){
    //verificar se carros está vazio
    if (carros.length == 0) {
        alert("Não há carros adicionados.");
        return;
    }

    var lista = ""; //esvasiando a lista para concatenação posteriormente

    //percorrer o vetor
    for (var i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
    }
    //alterar o texto da lista no Html
    document.getElementById("outLista").textContent = lista;
}

var btnListar =  document.getElementById("btnListar");
btnListar.addEventListener("click", listarCarros);

function filtrarCarros(){
    //pergunta o valor máximo
    var maximo = Number(prompt("Qual o valor máximo?"));

    if (maximo==0 || isNaN(maximo)) {
        alert("Preencha o campo corretamente.");
        return;
    }

    //Prepara lista para receber os resultados
    var lista = "";

    //Percorrer vetor procurando pelos parâmetros informados no filtro
    for (var i = 0; i < carros.length; i++) {
        if (carros[i].preco <= maximo) {
            lista += carros[i].modelo + " - R$ " + carros[i].preco.toFixed(2) + "\n";
        }    
    }

    var outLista = document.getElementById("outLista");
    
    //exibe a lista com os resultados no HTML
    if (lista == "") {
     outLista.textContent = "Não há carros com valor até " + "R$ " + maximo.toFixed(2) + ".";
    } else {
        outLista.textContent = "Carros encontrados até R$ " + maximo.toFixed(2) + "\n---------------------\n" + lista;
    }
}

   //Botão para filtrar resultados
   var btnFiltrar = document.getElementById("btnFiltrar");
   btnFiltrar.addEventListener("click", filtrarCarros);