//window valor global, cipher es el objeto
window.cipher = {
//Codificar, cadena de texto, numero de desplazamiento
encode: (string, offset) => {
//variable para que introduzcan la palabra a cifrar
let wordCipher = "";
//mi ciclo "for" se va a estar ejecutando cada que el usuario introduzca una
//cadena de texto e ira incrementando
for (let i = 0; i < string.length; i++) {
//variable que declara que word es igual a una cadena de texto[incrementar]
let word = string[i];
//mi variable word solo se va a ejecutar siempre y cuando sea equivalente
//a solo letras
if (word.match(/[a-z]/i)) {
//mi variable word solo se va a ejecutar si mi cadena de texto respeta el
//codigo al caracter tiene que ser igual o mayor a "A" pero igual y menor a "Z"
//del codigo ASCII
if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
//variable que indica que mi cadena de texto respeta el codigo al caracter menos
// la primera letra de ASCII más numero de desplazamiento(entero) % alfabeto más
// primera letra ASCII.
let textWord = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
//Mi cifrado de palabras va a ser más o igual a la palabra introducida y solo
//pueden ser letras Mayusculas y no numeros
wordCipher += String.fromCharCode(textWord);
//mi variable word solo se va a ejecutar si mi cadena de texto respeta el codigo
// al caracter tiene que ser igual o mayor a "a" pero igual y menor a "z" del
//codigo ASCII
} else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
//pero mi cadena de texto debe de respeta el codigo al caracter menos
// la 97 letra "a" de ASCII más numero de desplazamiento(entero) % alfabeto más
//la 97 letra "a" letra ASCII
textWord = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
//Mi cifrado de palabras va a ser más o igual a la palabra introducida y solo
//pueden ser letras minusculas y no numeros
wordCipher += String.fromCharCode(textWord);
}
} else {
wordCipher += word;
}
}
//retorna en Cifrado de palabra
return wordCipher;
},
//Decodificar, cadena de texto y numero de desplazamiento
decode: (string, offset) => {
//Se asigna una variable para descifrar
let wordDeCipher = "";
//mi ciclo "for" se va a ejecutar siempre y cuando se introduzca una cadena de
//texto e ira incrementando
for (let i = 0; i < string.length; i++) {
// mi variable declara de mi palabra es igual a una cadena de texto e ira
//incrementando
let wordD = string[i];
//mi variable dice que solo se pueden introducir letras
if (wordD.match(/[a-z]/i)) {
//mi variable word solo se va a ejecutar si mi cadena de texto respeta el
//codigo al caracter tiene que ser igual o mayor a "A" pero igual y menor a
//"Z" del codigo ASCII
if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
let textWord = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
//Mi descifrado de palabras va a ser más o igual a la palabra introducida y
//solo pueden ser letras Mayusculas y no numeros
wordDeCipher += String.fromCharCode(textWord);
//mi variable word solo se va a ejecutar si mi cadena de texto respeta el codigo
//al caracter tiene que ser igual o mayor a "a" pero igual y menor a "z" del
//codigo ASCII
} else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
//pero mi variable indica que se ejecuta con la formula de codigo ASCII con
//palabras en minusculas
let textWord = (string.charCodeAt(i) - 97 - parseInt(offset))% 26 + 97;
//Mi descifrado de palabras va a ser + o = a una cadena de texto, no numeros
wordDeCipher += String.fromCharCode(textWord);
}
} else {
wordDeCipher += wordD;
}
}
//retornar en Descifrado de palabra
return wordDeCipher;
}
}
