import cipher from './cipher.js'

// refs
let inputNumero = document.querySelector('#numerosecreto')
let textoInput = document.querySelector('#mensajesinconvertir')
let cifrarboton = document.querySelector('#cifrarboton')
let mensajeConvertido = document.querySelector('#mensajeconvertido')


// funciones
function convertirTexto(){
  // 1.- traemos los datos
  let offset = inputNumero.value
  let texto = textoInput.value
  // 2.- usamos el cipher
  let resultado = cipher.cifrar(offset, texto)
  // 3.- Colocarlo en la pantalla
  mensajeConvertido.value = resultado

}

function bienvenido() {
  alert("Estas a punto de entrar a una pagina súper secreta");
}

window.onload = bienvenido


// observadores
cifrarboton.addEventListener('click', convertirTexto)
