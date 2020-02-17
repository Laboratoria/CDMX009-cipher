const cipher = {encode, decode};


function encode (space, world) {
  let results= '';
let newLetter;
let realPosition;
var letters = /^[A-Z]+$/;
if (world.match(letters)) {
  for (let i=0; i<world.length; i++) {
    let position= world.charCodeAt(i);

if ( position >= 65 && position <=90) {
  realPosition = (((position - 65 + parseInt(space)) % 26 ) +65);
  console.log(realPosition);
  newLetter= (String.fromCharCode(realPosition));
  results+=newLetter;

      }
    }

        return results;
  //  console.log(results);
    }
  //  else {throw TypeError("Sólo letras");}
    }






function decode (spaceDecode, worldDecode) {
  let resultsD= '';
  let realPositionD;
  let newLetterD;
  var letters = /^[A-Z]+$/;
  if (worldDecode.match(letters)) {
    for (let i=0; i<worldDecode.length; i++) {
      let positionD= worldDecode.charCodeAt(i);
      console.log(positionD);

 if( positionD >= 65 && positionD <=90){
        realPositionD = (((positionD + 65 - parseInt(spaceDecode)) % 26 ) +65);
        newLetterD= (String.fromCharCode(realPositionD));
        resultsD+=newLetterD;

  }
}

    return resultsD;
//console.log(resultsD);
}
//else {throw TypeError("Sólo letras");} {alert("Sólo letras");}
}






export default cipher;
