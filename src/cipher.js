const cipher = {encode, decode};





  function encode (space, world) {
  let results= '';
  let newLetter;
  let realPosition;
  let letters = /^[A-Z]+$/;

//  if (world.match(letters) || world.match(" ")) {
    if (world.match(letters)) {
        for (let i=0; i<world.length; i++) {
          let position= world.charCodeAt(i);

                if ( position >= 65 && position <=90) {
                  realPosition = (((position - 65 + parseInt(space)) % 26 ) +65);
                  newLetter= (String.fromCharCode(realPosition));
                  results+=newLetter;
                }

  //  } else if (position===32){
  //    newLetter=" ";
  //    results+=newLetter;

         }

         return results;

    }
}



  function decode (spaceDecode, worldDecode) {
    let resultsD= '';
    let realPositionD;
    let newLetterD;
    let letters = /^[A-Z]+$/;
    //if (worldDecode.match(letters)|| worldDecode.match(" ")) {
    if(worldDecode.match(letters)){
      for (let i=0; i<worldDecode.length; i++) {
        let positionD= worldDecode.charCodeAt(i);

              if( positionD >= 65 && positionD <=90){
                realPositionD = (((positionD + 65 - parseInt(spaceDecode)) % 26 ) +65);
                newLetterD= (String.fromCharCode(realPositionD));
                resultsD+=newLetterD;
              }

//  } else if (positionD===32){
//    newLetterD=" ";
//    resultsD+=newLetterD;

          }

      return resultsD;
    }
  }






export default cipher;
