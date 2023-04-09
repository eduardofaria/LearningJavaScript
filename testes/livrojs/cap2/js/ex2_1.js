// declara a função mostrarOla
function mostrarOla() {
    // obtém o conteúdo do campo (com id=) nome
    var nome = document.getElementById("nome").value;
    // exibe no parágrafo (com id=) "resposta": "Olá " e o nome informado
    document.getElementById("resposta").innerHTML = "Olá " + nome;
}
// cria uma referência ao botão (com id=) mostrar 
var mostrar = document.getElementById("mostrar");
// registra para o botão mostrar um "ouvinte" para o evento click,
// que ao ser clicado irá chamar a função mostrarOla
mostrar.addEventListener("click", mostrarOla);
