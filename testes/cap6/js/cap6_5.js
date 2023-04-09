var inNome = document.getElementById("inNome");
var outEmail = document.getElementById("outEmail");

function gerarEmail() {

    var funcionario = inNome.value;
    if (funcionario == "" || !isNaN(funcionario) || funcionario.indexOf(" ") == -1){
        alert("insira um nome completo.");
        inNome.value = "";
        inNome.focus();
        return;
    }

    var palavras = funcionario.split(" ");
    var email = "";
    var qtdPalavras = palavras.length;

    for (i = 0; i < qtdPalavras - 1; i++) {
        email += palavras[i].charAt(0);
    }

    email += palavras[qtdPalavras - 1] + "@empresa.com.br";

    outEmail.textContent = "Email: " + email.toLowerCase();
}

var btnGerar = document.getElementById("btnGerar");
btnGerar.addEventListener("click", gerarEmail);