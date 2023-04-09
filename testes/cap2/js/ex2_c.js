function exibirPromocao() {
    //seletor HTML
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outPromo = document.getElementById("outPromo");
    var outTerceiro = document.getElementById("outTerceiro");

    //capturar valores
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    //calculo da promoção
    var precoReal = preco * 3;
    var precoDesconto = preco * 0.5;
    var precoFinal = precoReal - precoDesconto;

    //escrever promoção
    outPromo.textContent = produto + " - Promoção: leve 3 por R$ " + precoFinal.toFixed(2);
    outTerceiro.textContent = "O 3º produto custa apenas R$: " + precoDesconto.toFixed(2);

}

// ação do botão
var btnPromocao = document.getElementById("btnPromocao");
btnPromocao.addEventListener("click", exibirPromocao);
