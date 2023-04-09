function carregarImagens(){
      
    var xmlHttpRequest = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random"

    xmlHttpRequest.open("GET", url, true);

    xmlHttpRequest.onreadystatechange = function() {
        if (xmlHttpRequest.readyState == 3) {
            console.log('Carregando o conteúdo');
        }
        if (xmlHttpRequest.readyState == 4) {
             
            var jsonResponse = JSON.parse(xmlHttpRequest.responseText);

            console.log('Requisição Finalizada');
            console.log('Resultado da Requisição: ' + jsonResponse);
            console.log('Resultado da Requisição: ' + jsonResponse.message);

            var imgDog = document.getElementById("img_dog");
            imgDog.src = jsonResponse.message;
        }
    };
         
    xmlHttpRequest.send(null);

}

function testeXMLhttpRequest(){

    // "connect" passa a ser a ponte para qualquer requisição a essa URL
    var minhaConexao = new XMLHttpRequest();
    var url = "https://dog.ceo/api/breeds/image/random";

    /*
    método open, que recebe 3 parâmetros: o método de requisição dos dados, a url remota/do servidor que queremos acessar
    e o tipo de requisição – onde “true” define que será feita uma requisição assíncrona e “false”, uma síncrona.
    Esse argumento é opcional. Logo, pode não ser definido, assumindo o valor padrão “true”;
    */
    minhaConexao.open("GET", url, true);

    /*
    propriedade “onreadystatechange”, que monitora o status da requisição XMLHttpRequest – propriedade “readyState” − e especifica
    uma função a ser executada a cada mudança;
    */
    minhaConexao.onreadystatechange = function() {
        if (minhaConexao.readyState == 3) {
            console.log('Carregando o conteúdo');
        }
        //Além da propriedade “readyState”, 
        //poderíamos também monitorar a propriedade “status”, que armazena o código de resposta do servidor Http utilizado pela XMLHttpRequest;
        if (minhaConexao.readyState == 4) {
            // !!!!!PARSE!!!!!! foi utilizado outro método, o parse. Esse método não pertence ao objeto XMLHttpRequest,
            //mas este é necessário quando o recurso requisitado devolve o conteúdo em formato JSON;
            var jsonResponse = JSON.parse(minhaConexao.responseText);

            console.log('Requisição Finalizada');
            console.log('Resultado da Requisição: ' + jsonResponse);
            console.log('Resultado da Requisição: ' + jsonResponse.message);

            var imgDog = document.getElementById("img_dog");
            imgDog.src = jsonResponse.message;

            /* 
                No JS pede o "message":
                imgDog.src = jsonResponse.message;
                
                No JSON define o que é o "message":
                {
:               "message": "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
                "status": "success"
                }
             */
        }
    };
    //é utilizado o método send, que envia a requisição.
    minhaConexao.send(null);


}