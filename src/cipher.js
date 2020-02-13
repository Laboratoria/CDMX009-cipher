window.cipher = { //window valor global, cipher es el objeto
  encode(string, offset) => { //Codificar, cadena de texto, numero de desplazamiento
    let wordCipher = ""; //variable para que introduzcan la palabra a descifrar
    for ( i = 0; i < string.lenght; i++ ){ //mi ciclo "for" se va a estar ejecutando cada que el usuario introduzca una cadena de texto e ira incrementando
    let word = string[i]; //variable que declara que word es igual a una cadena de texto[incrementar]
    if (word.match(/[a-z]/i)){//mi variable word solo se va a ejecutar siempre y cuando sea equivalente a solo letras
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=90 ){//mi variable word solo se va a ejecutar si mi cadena de texto respeta el codigo al caracter tiene que ser igual o mayor a "a" pero igual y menor a "z" del codigo ASCII
        let textword = (string.charCodeAt(i) -65 + parseInt(offset)) % 26 + 65;//variable que indica que mi cadena de texto respeta el codigo al caracter -la primera letra de ASCII + numero de desplazamiento(entero) % alfabeto + primera letra ASCII
        wordCipher+= String.fromCharCode(textword);



      }

    }
    }
  }

}
