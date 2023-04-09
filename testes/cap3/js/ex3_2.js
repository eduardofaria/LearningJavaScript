function calcularPeso() {
    //referências DOM
    var inNome = document.getElementById("inNome");
    var rbMasculino = document.getElementById("rbMasculino");
    var rbFeminino = document.getElementById("rbFeminino");
    var inAltura = document.getElementById("inAltura");
    var outResult = document.getElementById("outResult");

    //captura dos dados
    var nome = inNome.value;
    var masculino = rbMasculino.checked;
    var feminino = rbFeminino.checked;
    var altura = Number(inAltura.value);

    //verificar preenchimento nome e sexo
    if (nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo.");
        inNome.focus(); //foca o cursor no campo do nome
        return;
    }

    if (altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente.");
        inAltura.focus();
        return;
    }

    if (masculino) {
        var peso = 22 * Math.pow(altura, 2);
    } else {
        var peso = 21 * Math.pow(altura, 2);
    }

    //Resultado
    outResult.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg";
}

function limparCampos() {
    document.getElementById("inNome").value = "";
    document.getElementById("rbMasculino").checked = false;
    document.getElementById("rbFeminino").checked = false;
    document.getElementById("inAltura").value = "";
    document.getElementById("outResult").textContent = "";
    document.getElementById("inNome").focus();
}

//ações dos botões
var calcular = document.getElementById("btnCalcular");
var limpar = document.getElementById("btnLimpar");

calcular.addEventListener("click", calcularPeso);
limpar.addEventListener("click", limparCampos);