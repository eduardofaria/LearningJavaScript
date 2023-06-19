function adicionarTarefa() {
    let in_Tarefa = document.getElementById("in_Tarefa");
    let tarefa = in_Tarefa.value;

    if (tarefa == ""){
        alert("Preench o campo corretamente.");
        in_Tarefa.focus();
        return;
    }

    let div_Quadro = document.getElementById("div_Quadro");

    let h5 = document.createElement("h5");
    let texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    div_Quadro.appendChild(h5);

    in_Tarefa.value = "";
    in_Tarefa.focus();
}

let btn_Add = document.getElementById("btn_Add");
btn_Add.addEventListener("click", adicionarTarefa);

let ordem = 0;
function selecionarTarefa(){
    let div_Quadro = document.getElementById("div_Quadro");
    let lista_Tarefas = div_Quadro.getElementsByTagName("h5");
    if (ordem == lista_Tarefas.length){
        lista_Tarefas[0].className = "selecionada";
        lista_Tarefas[ordem - 1].className = "naoSelecionada";
        ordem = 0;
    }
    if (ordem > 0) {
        lista_Tarefas[ordem - 1].className = "naoSelecionada";
    }

    lista_Tarefas[ordem].className = "selecionada";
    ordem++;
}

let btn_Select = document.getElementById("btn_Select");
btn_Select.addEventListener("click", selecionarTarefa);