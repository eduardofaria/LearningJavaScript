function mostrarDados() {
  // cria referência aos elementos da página
  var inModelo = document.getElementById("inModelo");
  var inAno = document.getElementById("inAno");
  var inPreco = document.getElementById("inPreco");
  var outClassif = document.getElementById("outClassif");
  var outPrecoVenda = document.getElementById("outPrecoVenda");

  // obtém o conteúdo dos campos de entrada de dados
  var modelo = inModelo.value;
  var ano = Number(inAno.value);
  var preco = Number(inPreco.value);

  // valida o preenchimento dos campos
  if (modelo == "" || ano == 0 || preco == 0 || isNaN(ano) || isNaN(preco)) {
    alert("Informe corretamente os dados do veículo");
    inModelo.focus();
    return;
  }

  // chama as funções atribuindo o retorno das funções às variáveis
  var classificacao = classificarVeiculo(ano);
  var precoVenda = calcularVenda(preco, classificacao);

  // exibe as respostas 
  outClassif.textContent = modelo + " - " + classificacao;
  outPrecoVenda.textContent = "Preço de Venda R$: " + precoVenda.toFixed(2);
}
// cria referência ao botão e associa ao evento click a função mostrarDados
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", mostrarDados);

// função recebe o ano do veículo como parâmetro
function classificarVeiculo(ano) {
  var anoAtual = new Date().getFullYear();   // obtém o ano atual
  var classif;
  // condições para definir a classificação do veículo
  if (ano == anoAtual) {
    classif = "Novo";
  } else if (ano == anoAtual-1 || ano == anoAtual - 2) {
    classif = "Seminovo";
  } else {
    classif = "Usado";
  }
  return classif;    // retorna a classificação
}

// função recebe valor e status do veículo como parâmetro
function calcularVenda(valor, status) {
  var prVenda = (status == "Novo") ? valor * 1.08 : valor * 1.10;
  return prVenda; 
}