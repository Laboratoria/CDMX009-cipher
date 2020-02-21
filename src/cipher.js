const cipher = {
  encode,
  decode}
export default cipher;
//ENCODE
//function encode(offset,str) {
//if (typeof offset !=="number" && typeof str !=="string") {
//    throw new TypeError
//  } else {
//  let solved="";
//  for (let i=0; i<str.length; i++) {          //Esta parte le dice al bucle que debe repetirse hasta llegar a la última letra.
//  let asciiNum = str.charCodeAt(i);           //Esto genera el códigos ascii de cada letra
//  if (asciiNum < 65 || asciiNum > 90){
//  alert("Ingresa sólo mayúsculas.")
//  throw new TypeError;}
//  else {
//    asciiNum = (asciiNum-65+parseInt(offset))%26+65;//Esto genera el número por el que se debe desplazar el alfabeto y lo suma a la posicion original de cada letra
//      solved += String.fromCharCode(asciiNum);  //Esta parte llama a la nueva letra a partir de los nuevos codigos ascii de las nuevas posiciones.
//    }
//  }
//    return(solved);
//  }
//}

//ENCODE con soporte para todos los caracteres imprimibles
function encode(offset,str) {
  if (typeof offset !=="number" && typeof str !=="string") {
    throw new TypeError
  } else {
    let solved="";
  for (let i=0; i<str.length; i++) {          //Esta parte le dice al bucle que debe repetirse hasta llegar a la última letra.
      let asciiNum = str.charCodeAt(i);           //Esto genera el códigos ascii de cada letra
       asciiNum = (asciiNum+parseInt(offset))%255;//Esto genera el número por el que se debe desplazar el alfabeto y lo suma a la posicion original de cada letra
      solved += String.fromCharCode(asciiNum);  //Esta parte llama a la nueva letra a partir de los nuevos codigos ascii de las nuevas posiciones.
    }
    return(solved);
}
}

//function decode(offset, str) {
//  if (typeof offset !=="number" && typeof str !=="string") {
//    throw new TypeError
//  } else {
//  let solved="";
//  for (let i=0; i<str.length; i++) {          //Esta parte le dice al bucle que debe repetirse hasta llegar a la última letra.
//      let asciiNum = str.charCodeAt(i);           //Esto genera el códigos ascii de cada letra
//      if (asciiNum < 65 || asciiNum > 90){
//      throw new TypeError}
//     else {
//        asciiNum = (asciiNum+65-parseInt(offset))%26+65;//Esto genera el número por el que se debe desplazar el alfabeto y lo suma a la posicion original de cada letra
//      solved += String.fromCharCode(asciiNum);  //Esta parte llama a la nueva letra a partir de los nuevos codigos ascii de las nuevas posiciones.
//    }
//  }
//}
//    return(solved);
//}

//DECODE con soporte para todos los caracteres imprimibles
function decode(offset,str) {
//  if (typeof offset !=="number" && typeof str !=="string") {
//    throw new TypeError
//  } else {
    let solved;
    for (let i=0; i<str.length; i++) {          //Esta parte le dice al bucle que debe repetirse hasta llegar a la última letra.
      let asciiNum = str.charCodeAt(i);           //Esto genera el códigos ascii de cada letra
       asciiNum = (asciiNum-parseInt(offset))%255;//Esto genera el número por el que se debe desplazar el alfabeto y lo suma a la posicion original de cada letra
      solved += String.fromCharCode(asciiNum);  //Esta parte llama a la nueva letra a partir de los nuevos codigos ascii de las nuevas posiciones.
//    }
  }
    return(solved);
}
