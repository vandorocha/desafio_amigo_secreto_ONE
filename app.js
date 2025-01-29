//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigo = []

function adicionarAmigo() {
    let amigoAdicionado = document.getElementById('amigo').value;
    if(amigoAdicionado){
        if(listaAmigo.includes(amigoAdicionado)){
            alert("Amigo já esta na lista");
        } else{
            listaAmigo.push(amigoAdicionado);
            mostrarNomes(amigoAdicionado);
        }
    }else{
        alert("Por favor, insira um nome válido!")
    }
    console.log(listaAmigo);
}


function mostrarNomes(nomeAmigo){
   let nome = document.querySelector('ul');
   nome.innerHTML(`<li>${nomeAmigo}</li>`)
}