const entrada = document.querySelector('#entrada');
const btn = document.querySelector('#btn');
const lista = document.querySelector('#lista');

btn.onclick = () => {
    if (entrada.value != "") {
     if(alertify.confirm('Mestre da lista fala:','Você tem certeza que quer incluir ' + entrada.value + ' na lista?'
    ,
        function() {
        let itemLista = document.createElement('li');
        let texto = document.createTextNode(entrada.value);  //vai pega o valor digitado no input e colocar na variável texto
        let iconeOk = document.createElement('ion-icon')     // cria um texto de tipo icone
        let iconeRemover = document.createElement('ion-icon');
        iconeOk.classList.add('icone')
        iconeOk.setAttribute('name', 'checkmark-circle-outline');// atributo especificando o icone
        iconeRemover.classList.add('icone2');
        iconeRemover.setAttribute('name' , 'close-circle-outline');
        itemLista.classList.add('entrada');
        itemLista.append(texto);
        itemLista.append(iconeOk);        
        iconeRemover.onclick = () => {
            itemLista.classList.add('saida');
            removerItem = lista.removeChild(itemLista);

             // esperar terminar para remover item
             // async
        }
        itemLista.append(iconeRemover);        
        lista.append(itemLista);
            alertify.success('Item incluido com sucesso!');
        entrada.value = '';
        },
        function() {
            alertify.error('Item cancelado!');
        entrada.value = '';
        }
    ));
    
    } else {
        alertify.alert('O mestre da lista fala:', 'Preencha o campo!');
    }
};
