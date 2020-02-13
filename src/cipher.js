//Declarando variables iniciales

let texto= "ABC";
let desplazamiento= 2,
//aquí terminan variables globales
comenzarEn=0

let codificar= texto.charCodeAt(comenzarEn);

function codificando(){
    let convirtiendo=((codificar-65+parseInt(desplazamiento))%26+65).join;
    let resultado= convitiendo;
} 
//alert(codificando);
console.log(codificando);