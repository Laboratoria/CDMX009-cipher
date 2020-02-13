const cipher = {
  decode
};

function decode(tex,offset){
  let position
  for (let index = 0; index < tex.length; index++) {
    let toConv= tex.charCodeAt(index);
    
    // aqui el if de los espacios
    // if (toConv===32) {
    //   let position= parseInt(toConv);
    // } else {
      // borrar hasta aqui
  
    position= parseInt(toConv)+ parseInt(offset);
  
     if (position >= 91) {
    let x=26;
    position= position - x ;
   }  
  
      else{
      position= parseInt(toConv)+ parseInt (offset);   } 
    }
    let texConv = String.fromCharCode(position);
    return texConv
}

export default cipher;

