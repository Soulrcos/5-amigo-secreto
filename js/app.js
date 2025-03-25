const select = (identificador) => document.querySelector(identificador);
let arrayAmigos = [];
let nome = select('#nome-amigo');
let listaAmigos = select('#lista-amigos');
let sorteio = select('#lista-sorteio');

nome.addEventListener('keydown', (e) =>{
        if (e.key == 'Enter') {
            e.preventDefault();
            adicionar();
        }
})

function adicionar(){
    if (listaAmigos.innerText.length == 0 && nome.value.length > 0){
        listaAmigos.innerText = nome.value;
        arrayAmigos.push(nome.value);
    } else if (nome.value.length > 0) {
        listaAmigos.innerText += `, ${nome.value}`
        arrayAmigos.push(nome.value);
    }
    nome.value = '';
    
}

function sortear(){
    sorteio.innerHTML = '';
    embaralha(arrayAmigos);
    for(let i = 0; i<(arrayAmigos.length); i++){
        if (i == arrayAmigos.length-1){
            sorteio.innerHTML += `${arrayAmigos[i]} -> ${arrayAmigos[0]}<br>`
        } else {
            sorteio.innerHTML += `${arrayAmigos[i]} -> ${arrayAmigos[i+1]}<br>`
        }
    }
    arrayAmigos = [];
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    nome.value = '';
    listaAmigos.innerText = '';
    sorteio.innerHTML = '';
}