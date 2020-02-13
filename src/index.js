 import cipher from './cipher.js';
 
 const getData = (elegirFuncion) => 
 {
  const offset = parseInt(document.getElementById('posicion').value);//Desplazamiento
  //condicion if para ejecutar si es verdadero o falso
  if(elegirFuncion){
     const string = document.getElementById('mensaje').value;//Obtener el texto para cifrar
     document.getElementById('messResult').value=cipher.encode(offset, string);
     //Imprime el resultado del texto
 }
}

 console.log(cipher);