const frutas = ["laranja", "limão", "uva"];


const fruta1 = document.getElementById("fruta-1") //pegando fruita 1 do HTML com ID
fruta1.innerHTML = frutas[0] //adicionando fruta do array dentro do HTML

const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = frutas[1]

const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = frutas[2]





// exercicio2

const input = document.getElementById("name")// pegando o id do input desejado

// exercicio 3

const fruta = document.getElementById("fruta-4") // pegando o id da fruta que vai substituir


function novaFruta(){ // uma funçao
    fruta.innerHTML = input.value // pegando a fruta que vai substituir, e adicionando oq foi digitado no input
}



const novaFruta1 = () => { //fazendo com arrow
   
    fruta.innerHTML = input.value

}