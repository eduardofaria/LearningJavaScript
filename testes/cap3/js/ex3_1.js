function calcularMedia() {
    // input formulário
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    // calculo da média
    nota1 = Number(inNota1.value);
    nota2 = Number(inNota2.value);
    media = (nota1 + nota2) / 2;

    // exibe média
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    //situação
    if (media >= 7) {
        outSituacao.textContent = "Parabéns " + inNome.value + "! Você foi Aprovado!";
        outSituacao.style.color = "blue";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + inNome.value + ", você está em Recuperação!";
        outSituacao.style.color = "green";
    } else {
        outSituacao.textContent = "Nossa, que pena, " + inNome.value + ". Você foi Reprovado :(";
        outSituacao.style.color = "red";
    }
}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularMedia);

