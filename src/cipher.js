function cipher (offNum, nTxt) {

    //definir variables
  var nTxt = document.getElementById('nText').value;
  var i=0;
  var finalTxt= " ";
  var offNum = parseInt(document.getElementById("offNumber").value);

    //conversión
for (i=0; i<=nTxt.length; i++){

  r=(nTxt.charCodeAt(i) -65 +offNum) %26 +65; //aplica la formula
  var finalTxt= String.fromCharCode(r);

console.log(finalTxt);
//  document.write(finalTxt);
document.getElementById("plantCode").innerHTML = offNum;
}
}

// export default cipher;
