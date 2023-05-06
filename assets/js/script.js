//Seleçòes

const input = document.querySelectorAll(".input");
const formHeight = document.querySelector(".form--height");
const formWeight = document.querySelector(".form--weight");
const resultContainer = document.querySelector(".result--container");

const one = formHeight.value;
const two = formWeight.value;
let resultImc = [];


//Funções

function start() {
    resultContainer.style.display = 'none';
}

function calc(one, two) {
    
    let result = '';

    if (one !== 0 && two !==0) {
        
        result = one / (two * two);
    }

    resultImc.push(result);
}



function clear() {

    alert("Limpou");
}

function back() {

    alert("Voltar");
}

start();