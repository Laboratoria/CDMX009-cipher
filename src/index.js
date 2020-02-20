import cipher from './cipher';

// 'ref' valores que quiero que tome js 
const buttonEncode = document.getElementById("cifrar");
let input = document.getElementById('simpleText');//nombre mi función para que la funcion input tome la data de esa funcion
let offset = document.getElementById('offsetEncode');


const buttonDecode = document.getElementById("descifar");
let input = document.getElementById('codeText');//nombre mi función para que la funcion input tome la data de esa funcion
let offset = document.getElementById('offsetDecode');


/* funciones lo que quiero que haga
function transform(){
    let text = input.("simpleText")value // tomar el valor desde el cifrado
    let off = offset.value
    let result = cipher.encode(text,off) 
    //
    document.getElementById('resultado').innerHTML = result
}
*/
// listeners. observadores que que llama a la funcion cuando ocurra un evento

button.addEventListener('click',transform);

buttonEncode.addEventListener('click', () => {
    let string = document.getElementById("simpleText").value.toUpperCase();
    let offset = document.getElementById("offsetEncode").value;
    let encodedString = window.cipher.encode(string, offset);
    document.getElementById("resultado").value = encodedString;
  });

buttonDecode.addEventListener('click', () => {
    let string = document.getElementById("codeText").value.toUpperCase();
    let offset = document.getElementById("offsetDecode").value;
    let decodedString = window.cipher.decode(string, offset);
    document.getElementById("outputString").value = decodedString;
  });

  
console.log(cipher);
