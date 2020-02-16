
function cipher (offNum, nTxt) {

    //definir variables
  var nTxt = document.getElementById('nText').value;
  var i=0;

  var offNum = parseInt(document.getElementById("offNumber").value);

    //conversión
for (i=0; i<=nTxt.length; i++){

    r=(nTxt.charCodeAt(i) -65 +offNum) %26 +65; //aplica la formula
    var finalTxt= String.fromCharCode(r);

console.log(finalTxt);
}
document.getElementById("demo").innerHTML = "Paragraph changed!";
}

/*function CodeWrite (){
let plantCode = document.getElementById("plantCode").innerHTML;
plantCode = finalTxt
}
CodeWrite ()//  document.write(finalTxt)
}
}*/

// export default cipher;
