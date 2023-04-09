var palavraSorteada;              // declara variáveis globais
var dicaSorteada;

// cria referência aos elementos que irão conter eventos associados a functions
var inLetra = document.getElementById("inLetra");
var btJogar = document.getElementById("btJogar");
var btVerDica = document.getElementById("btVerDica");

function montarJogo() {
  // cria referência ao local onde a palavra sorteada (letra inicial e _) é exibida
  var outPalavra = document.getElementById("outPalavra");

  // obtém conteúdo do localStorage e separa em elementos de vetor
  var palavras = localStorage.getItem("jogoPalavra").split(";");
  var dicas = localStorage.getItem("jogoDica").split(";");

  var tam = palavras.length;        // número de palavras cadastradas

  // gera um número entre 0 e tam-1 (pois arredonda para baixo)
  var numAleatorio = Math.floor(Math.random() * tam);

  // obtém palavra (em letras maiúsculas) e dica na posição do nº aleatório gerado
  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  var novaPalavra = "";     // para montar palavra exibida (com letra inicial e "_")

  // for para exibir a letra inicial e as demais ocorrências desta letra na palavra
  for (var i = 0; i < palavraSorteada.length; i++) {
    // se igual a letra inicial, acrescenta esta letra na exibição
    if (palavraSorteada.charAt(0) == palavraSorteada.charAt(i)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {                   // senão...
      novaPalavra += "_";      // acrescenta "_"
    }
  }

  outPalavra.textContent = novaPalavra;       // exibe a novaPalavra
}
if (localStorage.getItem("jogoPalavra")) {    // se houver palavras cadastradas
  montarJogo();                               // sorteia e "monta" palavra do jogo
} else {                                      // senão...
  alert("Cadastre palavras para jogar");      // exibe alerta
  inLetra.disabled = true;                    // desabilita inLetra e botões
  btJogar.disabled = true;                    // (por isso, eles são referenciados
  btVerDica.disabled = true;                  // no início do programa)   
}

function mostrarDica() {
  // cria referência aos elementos da página a serem alterados nesta function
  var outErros = document.getElementById("outErros");
  var outDica = document.getElementById("outDica");
  var outChances = document.getElementById("outChances");

  // obtém o conteúdo do campo inLetra e converte-o para maiúscula
  var erros = outErros.textContent;    

  // verifica se o jogador já clicou anteriormente no botão
  if (erros.indexOf("*") >= 0) {
    alert("Você já solicitou a dica...");
    inLetra.focus();
    return;
  }

  outDica.textContent = " * " + dicaSorteada;        // exibe a dica
  outErros.textContent = erros + "*";                // acrescenta "*" nos erros

  var chances = Number(outChances.textContent) - 1;  // diminui 1 em chances
  outChances.textContent = chances;                  // mostra o nº de chances

  trocarStatus(chances);                             // troca a imagem

  verificarFim();    // verifica se atingiu limite de chances

  inLetra.focus();   // joga o foco em inLetra (já referenciado no início do prog)
}
// associa ocorrência do evento click deste elemento à function mostrarDica()
btVerDica.addEventListener("click", mostrarDica);   

function trocarStatus(num) {
  if (num > 0) {
    var imgStatus = document.getElementById("imgStatus");
    imgStatus.src = "img/status" + num + ".jpg";
  }
}

function jogarLetra() {
  var outPalavra = document.getElementById("outPalavra");
  var outErros = document.getElementById("outErros");
  var outChances = document.getElementById("outChances");
   
  var letra = inLetra.value.toUpperCase();   // obtém o conteúdo do campo inLetra

  // valida o preenchimento de uma única letra
  if (letra == "" || letra.length != 1) {
    alert("Informe uma letra");
    inLetra.focus();
    return;
  }

  var erros = outErros.textContent;     // obtém o conteúdo dos elementos da página
  var palavra = outPalavra.textContent;    

  // se a letra apostada já consta em erros, significa que ele já apostou esta letra
  if (erros.indexOf(letra) >= 0 || palavra.indexOf(letra) >= 0) {
    alert("Você já apostou esta letra");
    inLetra.focus();
    return;
  }

  if (palavraSorteada.indexOf(letra) >= 0) {   // se letra consta em palavraSorteada

    var novaPalavra = "";                      // para compor novaPalavra
    // for para montar palavra a ser exibida
    for (var i = 0; i < palavraSorteada.length; i++) {
      // se igual a letra apostada, acrescenta esta letra na exibição
      if (palavraSorteada.charAt(i) == letra) {
        novaPalavra += letra;
      } else {                              // senão...
        novaPalavra += palavra.charAt(i);   // acrescenta a letra ou ""_" existente
      }
    }
    outPalavra.textContent = novaPalavra;   // exibe a novaPalavra

  } else {                               // se letra não consta em palavraSorteada   
    erros += letra;                      // acrescenta letra em erros
    outErros.textContent = erros;        // exibe os erros
    var chances = Number(outChances.textContent) - 1;  // diminui nº de chances
    outChances.textContent = chances;    // exibe novo nº de chances

    trocarStatus(chances);               // troca imagem
  }

  verificarFim();                        // verifica se já ganhou ou perdeu

  inLetra.value = "";
  inLetra.focus();
}
btJogar.addEventListener("click", jogarLetra);

// associa evento keypress à function anônima que verifica se pressionou enter (13)
inLetra.addEventListener("keypress", function (tecla) {
  if (tecla.keyCode == 13) {
    jogarLetra();              // ... e chama jogarLetra
  }
});

function verificarFim() {
  var outChances = document.getElementById("outChances");
  var outMensagemFinal = document.getElementById("outMensagemFinal");

  var chances = Number(outChances.textContent);   // obtém número de chances

  if (chances == 0) {                             // se 0, perdeu
    // display-3 é um estilo do Bootstrap
    outMensagemFinal.className = "display-3 fonteVermelho";
    outMensagemFinal.textContent = "Ah... é " + palavraSorteada + ". Você Perdeu!";
    concluirJogo();
  // se não é 0 e a palavra exibida em outPalavra é igual a palavra sorteada, ganhou
  } else if (outPalavra.textContent == palavraSorteada) {
    outMensagemFinal.className = "display-3 fonteAzul";
    outMensagemFinal.textContent = "Parabéns!! Você Ganhou.";
    concluirJogo();
  }
}

// function concluirJogo, modifica o texto da dica e desabilita os botões de jogar
function concluirJogo() {
  var outDica = document.getElementById("outDica");
  outDica.textContent = "* Clique no botão 'Iniciar Jogo' para jogar novamente";
  inLetra.disabled = true;
  btJogar.disabled = true;
  btVerDica.disabled = true;
}