let diario = [];

function addEntrada (evento, esquilo){
    diario.push({evento, esquilo});
}

addEntrada(["trabalho", "árvore", "pizza", "correndo", "tv"], false);

console.log(diario);