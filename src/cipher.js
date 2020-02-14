const cipher = {
  // ...
  function encode (text,offset) {
    let solved="";
    for (let i=0; i<text.length; i++){
   let ascciNum;
   let cipherFormula;
   ascciNum = text.charCodeAt(i);
   if (ascciNum>=65 && ascciNum<=90);
    cipherFormula = ((ascciNum-65 + offset)%26)+65;
    let letter= String.fromCharCode(cipherFormula);
    solved+= letter;
    }
    return solved;
  }
  function decode (text,offset) {
  let solved="";
  for (let i=0; i<text.length; i++){
 let ascciNum;
 let cipherFormula;
 ascciNum = text.charCodeAt(i);
 if (ascciNum>=65 && ascciNum<=90);
  cipherFormula = ((ascciNum-65 - offset)%26)+65;
  let letter= String.fromCharCode(cipherFormula);
  solved+= letter;
  }
  return solved;
}
};
export default cipher;
