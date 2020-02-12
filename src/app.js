function FormularioCifrar(){
	location.href= "cifrar.html";
}

function FormularioDecifrar(){
	location.href= "decifrar.html";
}

function resultadocifrar(){
 	let dezplazamiento = document.getElementById("cantidad").value;
 	let texto = document.getElementById("textocifrar").value;
  	let mayu = texto.toUpperCase(); 
  	let code = mayu[0].charCodeAt(0); 
  	let newcode = code + dezplazamiento; 
  //let newLetter = charFromcodeAt(newCode); 
  document.write(newcode);
  //document.write(newLetter);    
  //var i = abc.indexOf(c.toLowerCase());
  /*if(cantidad === "")   {
    alert("La cantidad esta vacia"); 
    document.getElementById("cantidad").focus();
    return false;
  }

   if (isNaN(parseInt(cantidad))) {
      alert('El campo debe de ser numerico');
      document.getElementById("cantidad").focus();
      return false;
     }
     if(texto === "")   {
    alert("Ingresa el texto a cifrar"); 
    document.getElementById("textocifrar").focus();
    return false;
  }*/


    document.getElementById('resul').style.display = 'block';
  
  document.getElementById('iniciocifrar').style.display = 'none';
}

