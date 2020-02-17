const cipher = {encode, decode};
  // ...
function encode (texto,offset) {
    let solved="";
    for (let i=0; i<texto.length; i++){
   let ascciNum;
   let cipherFormula;
   ascciNum = texto.charCodeAt(i);
   if (ascciNum>=65 && ascciNum<=90);
    cipherFormula = ((ascciNum-65 + parseInt(offset))%26)+65;
    let letter= String.fromCharCode(cipherFormula);
    solved+= letter;
    }
  return solved;
  }

 function decode (texto,offset) {
  let solved="";
  for (let i=0; i<texto.length; i++){
 let ascciNum;
 let cipherFormula;
 ascciNum = texto.charCodeAt(i);
 if (ascciNum>=65 && ascciNum<=90);
  cipherFormula = ((ascciNum-65 - parseInt(offset))%26)+65;
  let letter= String.fromCharCode(cipherFormula);
  solved+= letter;
  }
  return solved;
}
//};
export default cipher;
