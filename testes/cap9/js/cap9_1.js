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


function selecionarTarefa(){
    let ordem = 0;
    let div_Quadro = document.getElementById("div_Quadro");
    let lista_Tarefas = div_Quadro.getElementsByTagName("h5");

    if (lista_Tarefas.length == 0) {
        alert("Não há tarefas para selecionar.");
        return;
    }
    
    for (let i = 0; i < lista_Tarefas.length; i++) {
        if (lista_Tarefas[i].className == "selecionada") {
            ordem = i + 1;
            break;
        }
    }

    if (ordem >= lista_Tarefas.length) {
        lista_Tarefas[(ordem - 1)].className = "naoSelecionada";
        lista_Tarefas[0].className = "selecionada";
        ordem = 0;
    } else if (ordem < lista_Tarefas.length) {
        if (ordem == 0) {
            lista_Tarefas[(ordem)].className = "selecionada";
        } else if (ordem > 0){
            lista_Tarefas[(ordem - 1)].className = "naoSelecionada";
            lista_Tarefas[(ordem)].className = "selecionada";
        }
    }
}

let btn_Select = document.getElementById("btn_Select");
btn_Select.addEventListener("click", selecionarTarefa);


function removerTarefa(){
    let div_Quadro = document.getElementById("div_Quadro");
    let lista_Tarefas = div_Quadro.getElementsByTagName("h5");
    let index_Selecionada = -1;
    for (let i = 0; i < lista_Tarefas.length; i++) {
        if (lista_Tarefas[i].className == "selecionada") {
            index_Selecionada = i;
            break;
        }
    }

    if (index_Selecionada != -1) {
        if (confirm(`Deseja remover a tarefa "${lista_Tarefas[index_Selecionada].textContent}"?`)){
            div_Quadro.removeChild(lista_Tarefas[index_Selecionada]);
        }
    } else if (index_Selecionada == -1) {
        alert("Selecione uma tarefa.");
    }

    console.log("index: " + index_Selecionada);
}

let btn_Delete = document.getElementById("btn_Delete");
btn_Delete.addEventListener("click", removerTarefa);

let tarefas_regatadas;

function salvar_tarefas(){
    let div_Quadro = document.getElementById("div_Quadro");
    tarefas_regatadas = div_Quadro.getElementsByTagName("h5");

    if (tarefas_regatadas.length == 0) {
        alert("Não há tarefas para serem salvas");
        return;
    }

    let tarefas = "";
    for (let i = 0; i < tarefas_regatadas.length; i++) {
        tarefas += tarefas_regatadas[i].textContent + ";";
    }
    
    localStorage.setItem("tarefas", tarefas.substring(0, (tarefas.length - 1)));

    if (localStorage.getItem("tarefas")) {
        alert("Tarefas salvas com sucesso!");
    }
}
let btn_Save = document.getElementById("btn_Save");
btn_Save.addEventListener("click", salvar_tarefas);

