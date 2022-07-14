// constante com nomes dos cavalos participantes do páreo
const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"];

// vetor que irá armazenar um objeto aposta (com nº cavalo e valor da aposta)
var apostas = [];

function adicionarAposta() {
  // cria referência aos elementos inValor e outApostas 
  // (inCavalo é referenciado em variável global na sequência do programa)
  var inValor = document.getElementById("inValor");
  var outApostas = document.getElementById("outApostas");

  // obtém o nº do cavalo e valor da aposta
  var cavalo = Number(inCavalo.value);
  var valor = Number(inValor.value);

  // valida os dados 
  if (isNaN(cavalo) || isNaN(valor) || valor == 0 || !validarCavalo(cavalo)) {
    alert("Aposta Inválida");
    inCavalo.focus();
    return;
  }

  // adiciona ao vetor de objetos (atributos cavalo e valor)
  apostas.push({ cavalo: cavalo, valor: valor });
  // variável para exibir a lista das apostas realizadas
  var lista = "Apostas Realizadas\n-------------------------------------\n";

  // percorre o vetor e concatena em lista as apostas realizadas
  for (var i = 0; i < apostas.length; i++) {
    lista += "Nº " + apostas[i].cavalo + " " + obterCavalo(apostas[i].cavalo);
    lista += " - R$: " + apostas[i].valor.toFixed(2) + "\n";
  }
  outApostas.textContent = lista;   // exibe a lista das apostas

  inCavalo.value = "";     // limpa campos de entrada
  inValor.value = "";
  inCavalo.focus();        // posiciona o cursor em inCavalo
}
// cria referência ao botão e associa ao evento click a função indicada
var btApostar = document.getElementById("btApostar");
btApostar.addEventListener("click", adicionarAposta);

function validarCavalo(num) {
  var tam = CAVALOS.length;       // obtém nº de cavalos da const CAVALOS
  // verifica se o número do cavalo (passado como argumento) é válido 
  if (num >= 1 && num <= tam) {
    return true;
  } else {
    return false;
  }
}

function mostrarCavalo() {
  // cria referência ao elemento outCavalo (para exibir dados do cavalo)
  var outCavalo = document.getElementById("outCavalo");

  // se não preencheu o campo, limpa outCavalo e retorna
  // (não exibe mensagem de alerta, pois pode sair por um clique em Ganhador)
  if (inCavalo.value == "") {
    outCavalo.textContent = "";
    return;
  }

  // obtém o conteúdo do campo de entrada
  var cavalo = Number(inCavalo.value);

  // valida (se número do cavalo for preenchido)
  if (isNaN(cavalo) || !validarCavalo(cavalo)) {
    outCavalo.textContent = "Número do Cavalo Inválido";
    return;
  }

  // cria variáveis com retorno dos métodos a serem exibidos em outCavalo
  var nomeCavalo = obterCavalo(cavalo);
  var numApostas = contarApostas(cavalo);
  var total = totalizarApostas(cavalo);

  // exibe nome, nº de apostas e total apostado no cavalo
  outCavalo.textContent = nomeCavalo + " (Apostas: " + numApostas;
  outCavalo.textContent += " - R$: " + total.toFixed(2) + ")";
}
// cria referência ao botão e associa ao evento blur a função indicada
var inCavalo = document.getElementById("inCavalo");
inCavalo.addEventListener("blur", mostrarCavalo);

function obterCavalo(num) {
  var posicao = num - 1;    // posição no vetor (subtrai 1, pois inicia em 0)
  return CAVALOS[posicao];  // nome do cavalo (da const CAVALOS)
}

function contarApostas(numCavalo) {
  var contador = 0;
  // percorre o vetor apostas 
  for (var i = 0; i < apostas.length; i++) {
    // verifica se a aposta é no cavalo passado como parâmetro
    if (apostas[i].cavalo == numCavalo) {
      contador++;     // conta +1 quando a aposta for no cavalo do parâmetro
    }
  }
  return contador;    // retorna o nº de apostas no cavalo numCavalo
}

function totalizarApostas(numCavalo) {
  var total = 0;
  for (var i = 0; i < apostas.length; i++) {
    if (apostas[i].cavalo == numCavalo) {
      total = total + apostas[i].valor;   // soma o valor das apostas 
    }
  }
  return total;     // retorna a soma dos valores apostados em numCavalo
}

// quando o campo recebe o foco, limpa o conteúdo e dados do cavalo
inCavalo.addEventListener("focus", function () {
  inCavalo.value = "";
  document.getElementById("outCavalo").textContent = "";
});

function ganhadorPareo() {
  // solicita o número do cavalo ganhador (já converte para número)
  var ganhador = Number(prompt("Nº Cavalo Ganhador: "));

  // para validar o preenchimento do prompt anterior
  if (isNaN(ganhador) || !validarCavalo(ganhador)) {
    alert("Cavalo Inválido");
    return;
  }

  // cria referência ao elemento outApostas (onde será exibido o resumo)
  var outApostas = document.getElementById("outApostas");

  // concatena em resumo o resultado a ser exibido no elemento outApostas
  var resumo = "Resultado Final do Páreo\n"
  resumo += "-------------------------------------\n"
  resumo += "Nº Total de Apostas: " + apostas.length + "\n";
  resumo += "Total Geral R$: " + totalizarGeral().toFixed(2) + "\n\n";
  resumo += "Ganhador Nº " + ganhador + " - " + obterCavalo(ganhador) + "\n";
  resumo += "-------------------------------------\n"
  resumo += "Nº de Apostas: " + contarApostas(ganhador) + "\n";
  resumo += "Total Apostado R$: " + totalizarApostas(ganhador).toFixed(2);

  outApostas.textContent = resumo;   // exibe o resultado

  btApostar.disabled = true;    // desabilita os botões apostar e ganhador
  btGanhador.disabled = true;
  btNovo.focus();               // joga o foco no botão "Novo Páreo"
}
// cria referência ao botão e associa ao evento click a função indicada
var btGanhador = document.getElementById("btGanhador");
btGanhador.addEventListener("click", ganhadorPareo);

function totalizarGeral() {
  var total = 0;
  // percorre o vetor para somar o total das apostas
  for (var i = 0; i < apostas.length; i++) {
    total = total + apostas[i].valor;
  }
  return total;    // retorna o total das apostas
}

// cria referência ao btNovo e cria função anônima associada ao evento click
var btNovo = document.getElementById("btNovo");
btNovo.addEventListener("click", function() {
  location.reload();              // recarrega a página
});