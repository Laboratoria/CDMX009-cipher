//const cipher = {encode, decode};
//
//
//
//function encode (space, world) {
//  let results= '';
//let newLetter;
//let realPosition;
//
//for (let i=0; i<world.length; i++) {
//    let position= world.charCodeAt(i);
//  //  if (world=== '^[A-Z]+$') {
//  //             continue;
//  //           }
////  var letters = /^[A-Z]+$/;
////if (world.match(letters)) {
////                   continue;
//
////  }else  {
////      try {
////    throw new Error("sólo letrasS!");
////} catch (e) {
////    alert(e.name + ": " + e.message);
////}
////      //    else {
////        //    continue;
////
////    //if (world=== '^[A-Z]+$') {
////      //         continue;}
////
////// (world!== '^[A-Z]+$') {
////
////  //        throw (new Error('Usa sólo letras'));
////  //       }
////        //   else {
////          //   continue;
////            // }
////  //if (world!== '^[A-Z]+$'){
////  //     break; console.log("buuu");
////
//
//if ( position >= 65 && position <=90) {
//      realPosition = (((position - 65 + parseInt(space)) % 26 ) +65);
//      newLetter= (String.fromCharCode(realPosition));
//      results+=newLetter;
//
////    } else if (position >= 97 && position <=122) {
////   realPosition= ((position - 97 + parseInt(space) % 26) + 97);
////   newLetter= (String.fromCharCode(realPosition));
////   results+=newLetter;
// }
// else {
//   break;
// }
//}
//  return results;
//
//}
//
//
//function decode (spaceDecode, worldDecode) {
//  let resultsD= '';
//  let realPositionD;
//  let newLetterD;
//    for (let i=0; i<worldDecode.length; i++) {
//      let positionD= worldDecode.charCodeAt(i);
//      //if (worldDecode.match(/[A-Z]/i))  {
////if (worldDecode=== '^[A-Z]+$') {
////           continue;
////         }
//        // else {return typeError};
//      if( positionD >= 65 && positionD <=90){
//        realPositionD = (((positionD - 13 - parseInt(spaceDecode)) % 26 ) +65);
//        newLetterD= (String.fromCharCode(realPositionD));
//        //newLetterDe= (newLetterD.match(/^[A-Z]+$/)
//        resultsD+=newLetterD;
//    //  }  else if (positionD >= 97 && positionD <=122) {
//    // newLetterD= ((positionD + 97 - parseInt(spaceDecode) % 26) + 97);
//    // newLetterD= (String.fromCharCode(realPositionD));
//    // resultsD+=newLetterD;
//   }
//   else {
//     break;
//   }
//}
//    return resultsD;
//
//}
//////document.getElementById("FirstButton").addEventListener("click", cipher());
////
////function encode (world, space) {
////  let results= '';
////let newLetter;
////let realPosition;
////let position;
////  for (let i=0; i<world.length; i++) {
////
////    //if(world.match(/[A-Z]/i)!== (/[A-Z]/i)  {
////    if (world!== '^[A-Z]+$'){
////      break;
////    }
////
////return alert("Sólo letras");
////
////if (worldDecode.match(/[A-Z]/i)){
////  position= world.charCodeAt(i);
////}
////    if (position >= 65 && position <=90) {
////      realPosition = (((position - 65 + parseInt(space)) % 26 ) +65);
////      newLetter= (String.fromCharCode(realPosition));
////      results+=newLetter;
////
////  //  } else if (position >= 97 && position <=122) {
////  // realPosition= ((position - 97 + parseInt(space) % 26) + 97);
////  // newLetter= (String.fromCharCode(realPosition));
////  // results+=newLetter;
//// }
//// else {
////  break;
//// }
////
////  return results;
////
////}
////
////
////function decode (worldDecode, spaceDecode) {
////  let resultsD= '';
////  let realPositionD;
////  let newLetterD;
////  let positionD;
////
////    for (let i=0; i<worldDecode.length; i++) {
////      if (worldDecode.match(/[A-Z]/i)) {
////       positionD= worldDecode.charCodeAt(i);
////} else {return new typeError("solo letras");}
////      if( positionD >= 65 && positionD <=90){
////        realPositionD = (((positionD - 13 - parseInt(spaceDecode)) % 26 ) +65);
////        newLetterD= (String.fromCharCode(realPositionD));
////        resultsD+=newLetterD;
////    //  }  else if (positionD >= 97 && positionD <=122) {
////    // newLetterD= ((positionD + 97 - parseInt(spaceDecode) % 26) + 97);
////    // newLetterD= (String.fromCharCode(realPositionD));
////    // resultsD+=newLetterD;
////   }
////   else {
////     break;
////   }
////    }
////    return resultsD;
////
////
////  }
//////      var letters = /^[A-Z]+$/;
//      if (!worldDecode.match(letters)) {
//                 try {
//      throw new Error("sólo letrasS!");} catch (e) {
//      alert(e.name + ": " + e.message);
//  }
//{break;
//  }  }
////
//////    var letters = /^[A-Z]+$/;
//    if (!world.match(letters)) {
//
//               try {
//    throw new Error("sólo letrasS!");} catch (e) {
//    alert(e.name + ": " + e.message);
//}
//
//
//{break;
//}  }
// else if
//////
////
//
