const cipher = {
  code,
  decode
};

function code(tex,offset){
  let position
  var texConv="";
  for (let index = 0; index < tex.length; index++) {
       let toConv= tex.charCodeAt(index);          
       if (toConv==32) {
           position= 32;
    }
    else {
        
    position= parseInt(toConv)+ parseInt(offset);
  
     if (position >= 91) {
      let x=26;
      position= position - x ;
      }    
    else{
      position= parseInt(toConv)+ parseInt (offset);
     } 
    }
     texConv+= String.fromCharCode(position);
      
    }
    return texConv;
             
    }


// funcion decodificar
    
function decode(tex,offset){
  let positionD
  var texConvD="";
  for (let indexD = 0; indexD < tex.length; indexD++) {
    let toConvD= tex.charCodeAt(indexD);
            
       if (toConvD==32) {
      positionD= 32;
    }
    else {
     
    positionD= parseInt(toConvD)- parseInt(offset);
  
     if (positionD < 65) {
      let xD=26;
      positionD= positionD + xD;
      }    
    else{
      positionD= parseInt(toConvD)- parseInt (offset);
     } 
    }
     texConvD+= String.fromCharCode(positionD);
      
    }
    return texConvD;
             
    }
      

export default cipher;

