import cipher from './cipher.js';

console.log(cipher);


// 'ref' valores que quiero que tome js 
let input = document.getElement('texto')//nombre mi función para que la funcion input tome la data de esa funcion
let offset = document.getElement('numero')
let button = document.getElementById('button'


// funciones lo que quiero que haga

function transform(){
    let text = input.value // tomar el valor desde el cifrado
    let off = offset.value
    let res = cipher.encode(text,off) 
    //
    document.getElementById('resultado').innerHTML = res
}

// listeners. observadores que que llama a la funcion cuando ocurra un evento
button.addEventListener('click',transform)