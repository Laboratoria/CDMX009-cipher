import cipher from './cipher.js'

// referencias
let inputNumero = document.querySelector('#numerosecreto')
let textoInput = document.querySelector('#mensajesinconvertir')
let cifrarboton = document.querySelector('#cifrarboton')
let mensajeConvertido = document.querySelector('#mensajeconvertido')
let descifrarboton = document.querySelector('#descifrarboton')

// funciones
function convertirTexto(){
  //  traemos los datos
  let offset = inputNumero.value
  let texto = textoInput.value
  //  usamos el cipher
  let resultado = cipher.cifrar(offset, texto)
  //  Colocarlo en la pantalla
  mensajeConvertido.value = resultado

}
function revertirTexto(){

  let offset = inputNumero.value
  let texto = textoInput.value

  let resultado = cipher.descifrar(offset, texto)

  mensajeConvertido.value = resultado

}

function bienvenido() {
  alert("Estas a punto de entrar a una pagina súper secreta");
}

window.onload = bienvenido


// observadores
cifrarboton.addEventListener('click', convertirTexto)
descifrarboton.addEventListener('click', revertirTexto)
