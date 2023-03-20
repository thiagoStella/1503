const entrada = document.querySelector('#entrada');
const btn = document.querySelector('#btn');
const lista = document.querySelector('#lista');

btn.onclick = () => {
    if (entrada.value != "") { // pega valor(value) da variável entrada com vazio
        let itemLista = document.createElement('li');
        let texto = document.createTextNode(entrada.value);  //vai pega o valor digitado no input e colocar na variável texto
        let iconeOk = document.createElement('ion-icon')     // cria um texto de tipo icone
        let iconeRemover = document.createElement('ion-icon');
        iconeOk.classList.add('icone')
        iconeOk.setAttribute('name', 'checkmark-circle-outline');// atributo especificando o icone
        iconeRemover.classList.add('icone2');
        iconeRemover.setAttribute('name' , 'close-circle-outline');
        itemLista.append(texto);
        itemLista.append(iconeOk);
        itemLista.append(iconeRemover);        
        lista.append(itemLista);
    } else {
        alert("Preencha o campo!");
    }
};

