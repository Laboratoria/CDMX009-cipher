const cipher = {
  decode
};

function decode(tex,offset){
  let position
  var texConv="";
  for (let index = 0; index < tex.length; index++) {
    let toConv= tex.charCodeAt(index);
    

    // let contador= [index];
    
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
      position= parseInt(toConv)+ parseInt (offset);
     } 
     texConv+= String.fromCharCode(position);
      
    }
    return texConv;

    

      // texConv= String.fromCharCode(position);
      // document.write(texConv);
     
    }
   
    
  //  let texConv += contador;

  //  contador= String.fromCharCode(position);
  //  let texConv += contador;
    



export default cipher;

