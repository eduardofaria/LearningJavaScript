function adicionarProduto() {
  var inProduto = document.getElementById("inProduto");

  var produto = inProduto.value;

  if (produto == "") {
    alert("Informe o produto");
    inProduto.focus();
    return;
  }

  // se houver dados salvos ...
  if (localStorage.getItem("comprasProduto")) {
    // obtém itens separando-os em elementos de vetor
    produtos = localStorage.getItem("comprasProduto").split(";");    

    // adiciona o novo produto ao vetor
    produtos.push(produto);                                          

    // classifica o vetor
    produtos.sort();

    // salva vetor classificado (com elementos separados por ";")
    localStorage.setItem("comprasProduto", produtos.join(";"));
  } else {
    // senão (é a primeira inclusão), salva apenas o produto
    localStorage.setItem("comprasProduto", produto);
  }

  listarProdutos();

  inProduto.value = "";
  inProduto.focus();
}
var btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarProduto);

function listarProdutos() {
  var outCompras = document.getElementById("outCompras");

  if (!localStorage.getItem("comprasProduto")) {
     outCompras.textContent = "";
     return;
  }  

  produtos = localStorage.getItem("comprasProduto").split(";");

  outCompras.textContent = "Produtos Adicionados\n-----------------------\n"+produtos.join("\n");
}
listarProdutos();

function limparLista() {
  if (localStorage.getItem("comprasProduto")) {
    if (confirm("Deseja realmente excluir todos os itens da lista?")) {
      localStorage.removeItem("comprasProduto");
      listarProdutos();
    }
  } else {
    alert("Lista está vazia...");
  }
}
var btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparLista);