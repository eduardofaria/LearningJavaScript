function calcularHora() {
    var inHora = document.getElementById("inHora");
    var outHora = document.getElementById("outHora");

    var hBrasil = Number(inHora.value);

    if (hBrasil == "" || isNaN(hBrasil) || hBrasil > 24){
        outHora.textContent = "Por favor, informe um horário no formato 24h.";
        inHora.focus();

        return;
    }

    var franca = hBrasil + 5;

    if (franca > 24) {
        franca = franca - 24;
    }

    outHora.textContent = "Hora na França: " + franca.toFixed(2);

}

var btnHora = document.getElementById("btnHora");
btnHora.addEventListener("click", calcularHora);