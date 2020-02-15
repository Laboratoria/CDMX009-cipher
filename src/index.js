//import cipher from './cipher.js';

//console.log(cipher);


    //Cargando a Página de Instroducción (FOLIO)
    function enter() {
  let folio = document.getElementById("folio").value;
  if (folio = "H0G2NB") {
    document.getElementById("first-page").style.display = "block";
    document.getElementById("login").style.display = "none";
  } else {
    alert("Folio incorrecto")
  }
}
    //Link a Página de registro
    function yes(){
      document.getElementById("form").style.display = "block";
      document.getElementById("login").style.display = "none";
    }

    //Icono a Página de Instroducción
    //function send(){

    //Leyenda al clickear enviar
      function send(){
        document.getElementById("name").value;
        document.getElementById("email").value;
        if ("name" === "" && "email" === ""){
          document.getElementById("form").innerHTML="En breve nos pondremos en contacto contigo"
        }
    }
    //Funcionalidad de logo: de registro a Login
    function back1(){
      document.getElementById("login").style.display = "block";
      document.getElementById("reg").style.display = "none";
    }

    //Funcionalidad de logo: de first-page a login
    function back(){
      document.getElementById("login").style.display = "block";
      document.getElementById("first-page").style.display = "none";
    }

    //Funcionalidad de Menú
    function menu(){

    }

    //Página de herramienta
  window.onload=()=>{
      //Links
      const linkOn = document.getElementById("link-encode");
      const linkOff = document.getElementById("link-decode");

      linkOn.addEventListener("click", function() {
        document.getElementById("link-encode").classList.add("link-active");
        document.getElementById("link-decode").classList.remove("link-active");
        document.getElementById("box-encode").classList.remove("display_none");
        document.getElementById("box-encode").classList.add("display_block");
        document.getElementById("box-decode").classList.remove("display_block");
        document.getElementById("box-decode").classList.add("display_none");
    });

      linkOff.addEventListener("click", function() {
        document.getElementById("link-encode").classList.remove("link-active");
        document.getElementById("link-decode").classList.add("link-active");
        document.getElementById("msg-decode").classList.remove("display_none");
        document.getElementById("msg-decode").classList.add("display_block");
        document.getElementById("msg-encode").classList.remove("display_block");
        document.getElementById("msg-encode").classList.add("display_none");
    });

  }

  //Mensaje en box-ENCODE
  const  buttonDecoder = document.getElementById("btn-encode");
    buttonDecoder.addEventListener("click", function(){
        let storyEncode = document.getElementById("box-msg-encode").value;
        let numberOffset  =  document.getElementById("offset-e").value;
        document.getElementById("encode-ready").innerHTML=window.cipher.encode(storyEncode, numberOffset);
    });
