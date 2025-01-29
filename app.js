//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigo = [];

function adicionarAmigo() {
    let amigoAdicionado = document.getElementById('amigo').value;
    if (amigoAdicionado) {
        if (listaAmigo.includes(amigoAdicionado)) {
            alert("Amigo já está na lista");
        } else {
            listaAmigo.push(amigoAdicionado);
            mostrarNomes(amigoAdicionado);
        }
    } else {
        alert("Por favor, insira um nome válido!");
    }
    console.log(listaAmigo);
}

function mostrarNomes(nomeAmigo) {

    let lista = document.getElementById('listaAmigos');
    let novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;

    lista.appendChild(novoItem);
}


function sortearAmigo() {
    if (listaAmigo.length === 0) {
        alert("A lista está vazia! Adicione amigos antes de realizar o sorteio.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigo.length);
    let amigoSorteado = listaAmigo[indiceSorteado];

    let resultado = document.getElementById('resultado');
    let novoResultado = document.createElement('li');
    novoResultado.textContent = resultado;
}

