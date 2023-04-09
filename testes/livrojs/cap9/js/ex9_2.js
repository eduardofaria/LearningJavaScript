function exibirMoedas() {
  // gera números aleatórios, entre 1 e 5, para cada moeda
  var num1_00 = Math.ceil(Math.random() * 5);
  var num0_50 = Math.ceil(Math.random() * 5);
  var num0_25 = Math.ceil(Math.random() * 5);
  var num0_10 = Math.ceil(Math.random() * 5);

  // cria referência ao local onde as imagens serão inseridas 
  var divMoedas = document.getElementById("divMoedas");

  // texto alternativo das imagens (para questões de acessibilidade)
  var alt1_00 = "Moedas de um real";
  var alt0_50 = "Moedas de Cinquenta Centavos";
  var alt0_25 = "Moedas de Vinte e Cinco Centavos";
  var alt0_10 = "Moedas de Dez Centavos";

  // chama o método criarMoedas passando os argumentos
  criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
  criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
  criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
  criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");
}
exibirMoedas();  // chama o método exibirMoedas

function criarMoedas(num, pai, moeda, textoAlt, classe) {
  // cria laço de repetição para inserir várias imagens de moedas na página
  for (var i = 1; i <= num; i++) {
    var novaMoeda = document.createElement("img");   // cria elemento img
    novaMoeda.src = "img/" + moeda;                  // atributo src
    novaMoeda.textoAlt = textoAlt;                   // texto alternativo
    novaMoeda.className = classe;                    // classe da moeda(css)
    pai.appendChild(novaMoeda);                      // hierarquia DOM
  }
  var br = document.createElement("br");  // cria uma quebra de linha (br)
  pai.appendChild(br);
}

function conferirSoma() {
  // cria referência ao campo de entrada e obtém o seu conteúdo 
  var inSoma = document.getElementById("inSoma");
  var soma = Number(inSoma.value);

  // valida o preenchimento do campo
  if (soma == 0 || isNaN(soma)) {
    alert("Informe o valor da soma (use ponto para separar decimais)");
    inSoma.focus();
    return;
  }

  // captura divMoedas que é o local onde as moedas foram inseridas
  var divMoedas = document.getElementById("divMoedas");  
  // captura as tags img filhas de divMoedas
  var moedas = divMoedas.getElementsByTagName("img");    

  var totalMoedas = 0;    // declara e inicializa acumulador

  // percorre as tags img e verifica propriedade className
  for (var i = 0; i < moedas.length; i++) {
    if (moedas[i].className == "moeda1_00") {
      totalMoedas += 1;        // acumula 1 (para moedas de 1) 
    } else if (moedas[i].className == "moeda0_50") {
      totalMoedas += 0.50;     // acumula 0.50 (para moedas de 0.50) 
    } else if (moedas[i].className == "moeda0_25") {
      totalMoedas += 0.25;     // acumula 0.25 (para moedas de 0.25) 
    } else {
      totalMoedas += 0.10;     // acumula 0.10 (para moedas de 0.10) 
    }
  }

  var div = document.createElement("div");   // cria elemento div
  var h3 = document.createElement("h3");     // cria elemento h3

  // verifica se o valor informado é igual ao total de Moedas exibido
  if (soma == totalMoedas.toFixed(2)) {
    div.className = "alert alert-success";     // define a classe da div
    var mensagem = "Parabéns!! Você acertou!"; // e mensagem a ser exibida 
  } else {
    div.className = "alert alert-danger";
    var mensagem = "Ops... A resposta correta é " + totalMoedas.toFixed(2);
  }
  var texto = document.createTextNode(mensagem);  // cria elemento de texto
  h3.appendChild(texto);        // texto é filho de h3             
  div.appendChild(h3);          // h3 é filho da div criada na function
  divMoedas.appendChild(div);   // e a div com alerta é filha de divMoedas

  btConferir.disabled = true;   // desabilita botão (resposta já foi exibida)
}
var btConferir = document.getElementById("btConferir");
btConferir.addEventListener("click", conferirSoma);

var btExibir = document.getElementById("btExibir");
btExibir.addEventListener("click", function() {
  location.reload(); 
});