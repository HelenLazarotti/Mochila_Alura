//pego all meu form:
const form = document.querySelector('#novoItem');
const lista = document.getElementById('lista');

//a cada item posto na lista, ele sobreescreve o anterior, então preciso criar um array pra guarar essas infos:
const itens = JSON.parse(localStorage.getItem('itens')) || [];
console.log(itens);

//peço pra imprimir os dados que estão dentro do meu array:
itens.forEach( (e) => {
    criaElemento(e);
})

//ação é submit/enviar:
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //crio vars p os elementos que estou chamando:
    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];


    //to procurando todos os itens existentes dentro da minha lista/array), pra ver se já existem.
    const existe = itens.find(elemento => elemento.nome === nome.value);

    //crio JSON:
    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    //se já existir o item na minha lista, apenas atualizamos:
    if(existe){
        itemAtual.id = existe.id;
        //atualizo esse elemento:
        atualizaElemento(itemAtual);
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;

    } else {
        //se o elemento não existe, crio e o jogo ele dentro do array e crio um id p ele:
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0;

        //chamo a função passando oq quero acessar:
            criaElemento(itemAtual); 

        //lá no inicio criei um array vazio, agr preencho:
        itens.push(itemAtual);
    }

    //converto pra string:
    localStorage.setItem('itens', JSON.stringify(itens))

    //depois de criar o elemento, quero esvaziar os inputs:
    nome.value = '';
    quantidade.value = '';

})

//crio uma função pra receber os dados do input e serem criados:
function criaElemento(item){

    //e criar uma tag igual as outras da lista, logo:
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');
    //add <strong/> via js:
    const numeroItem = document.createElement('strong');
    //digo onde quero que vá o strong:
    numeroItem.innerHTML = item.quantidade;
    //coloco um atributo:
    numeroItem.dataset.id = item.id;

    //como funciona a inserção de um elemento dentro do outro via JS: ao invés de innerHTML eu uso o appendChild que insere 1 elemento criado dentro do outro, caso use o innerHTML ele cria um objeto e retorna erro no console.
    novoItem.appendChild(numeroItem);
    
    //agr posso acrescentar um nome...
    novoItem.innerHTML += item.nome
    //console.log(novoItem);
    //elemento criado, uhuuuul....

    novoItem.appendChild(btnDeleta(item.id));
    //agora preciso inserir na minha lista:
    lista.appendChild(novoItem);
}

function atualizaElemento(item){
    //preciso encontrar o strong pra atualizá-lo:
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

function btnDeleta (){
    const elementoBtn = document.createElement('button');
    elementoBtn.classList.add('btn-remove');
    elementoBtn.innerText = 'x';

    elementoBtn.addEventListener('click', function(){
        deletaElemento(this.parentNode);
    })

    return elementoBtn
}

function deletaElemento(tag, id){
    tag.remove()

    //remove o item da tela:
    itens.splice(itens.findIndex(elemento => elemento.id === id))

    //remover o item do localStorange:
    localStorage.setItem('itens', JSON.stringify(itens))
}
