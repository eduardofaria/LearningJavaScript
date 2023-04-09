const TAXA_MULTA = 2 / 100;
const TAXA_JUROS = 0.33 / 100;


function calcularAtraso() {

    var inDataVenc = document.getElementById("inDataVenc");
    var inValor = document.getElementById("inValor");
    var outMulta = document.getElementById("outMulta");
    var outJuros = document.getElementById("outJuros");
    var outTotal = document.getElementById("outTotal");

    var dataVenc = inDataVenc.value;
    var valor = Number(inValor.value);
 
    if (dataVenc == "" | valor == 0 | isNaN(valor)) {
        alert("Preencha os campos corretamente.");
        inDataVenc.value = "";
        inDataVenc.focus();
        return;
    }

    var hoje = new Date();
    var vencimento = new Date();
 
    var dataPartes = dataVenc.split("-");
    vencimento.setDate(Number(dataPartes[2]));
    vencimento.setMonth(Number(dataPartes[1]) - 1);
    vencimento.setFullYear(Number(dataPartes[0]));

    var atraso = (hoje - vencimento);
    var multa = 0;
    var juros = 0;


    /*
    Não estava no exemplo do livro, mas tive que adicionar a condição de o vencimento ser anterior a data do dia (&& hoje > vencimento), pois
    estava entrando no "IF" pela diferença de datas, não só de atraso, como deveria ser.
    */
    if (atraso > 0 && hoje > vencimento) { 
        //// (1 dia = 24hor x 60min x 60seg x 1000mseg: 86400000)
        var diasAtraso = Math.round(atraso / 86400000);
        
        multa = valor * TAXA_MULTA;
        juros = (valor * TAXA_JUROS) * diasAtraso;
    }

    var total = valor + multa + juros;

    outMulta.value = multa.toFixed(2);
    outJuros.value = juros.toFixed(2);
    outTotal.value = total.toFixed(2);

    //console.log("Data de hoje: " + hoje);
    //console.log("Data de vencimento: " + vencimento);
    // Bug com data 31 de março sendo transformada em 1 de março continua, mesmo no código do autor.

}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularAtraso);

function limparCampos() {
    location.reload();
}

var btnNovaConta = document.getElementById("btnNovaConta");
btnNovaConta.addEventListener("click", limparCampos);
