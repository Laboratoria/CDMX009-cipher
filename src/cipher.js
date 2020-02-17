const cipher = {encode, decode};


function encode (space, world) {
  let results= '';
let newLetter;
let realPosition;
  for (let i=0; i<world.length; i++) {
    let position= world.charCodeAt(i);
  //  if (world=== '^[A-Z]+$') {
  //             continue;
  //           }
            //  else {
            //    break typeError();
            //  }
  //if (world!== '^[A-Z]+$'){
  //     break; console.log("buuu");
if( position >= 65 && position <=90) {
  realPosition = (((position - 65 + parseInt(space)) % 26 ) +65);
  console.log(realPosition);
  newLetter= (String.fromCharCode(realPosition));
  results+=newLetter;
        }
else  {
  break;
        }
      }
return results;
console.log(results);
}




function decode (spaceDecode, worldDecode) {
  let resultsD= '';
  let realPositionD;
  let newLetterD;
    for (let i=0; i<worldDecode.length; i++) {
      let positionD= worldDecode.charCodeAt(i);
      console.log(positionD);
      //if (worldDecode.match(/[A-Z]/i))  {
//if (worldDecode=== '^[A-Z]+$') {
//           continue;
//         }
        // else {return typeError};
      if( positionD >= 65 && positionD <=90){
        realPositionD = (((positionD - 13 - parseInt(spaceDecode)) % 26 ) +65);
        newLetterD= (String.fromCharCode(realPositionD));
        resultsD+=newLetterD;
    //  }  else if (positionD >= 97 && positionD <=122) {
    // newLetterD= ((positionD + 97 - parseInt(spaceDecode) % 26) + 97);
    // newLetterD= (String.fromCharCode(realPositionD));
    // resultsD+=newLetterD;
  }
   else {
     break;
   }
    }
    return resultsD;
console.log(resultsD);
  }

export default cipher;
