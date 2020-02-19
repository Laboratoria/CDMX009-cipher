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

    //Leyenda al clickear enviar
    function send(){
      document.getElementById("form").style.display = "block";
    }

    //Funcionalidad de logo: de registro a Login
    function back1(){
      document.getElementById("login").style.display = "block";
      document.getElementById("reg").style.display = "none";
    }

    //Funcionalidad de logo: de first-page a login
    function back2(){
      document.getElementById("login").style.display = "block";
      document.getElementById("first-page").style.display = "none";
    }

    //Funcionalidad de Menú
    function menu2(){
      document.getElementById("second-page").style.display = "block";
      document.getElementById("first-page").style.display = "none";
    }
    function menu3(){
      document.getElementById("last-page").style.display = "block";
      document.getElementById("first-page").style.display = "none";
    }

    //Página de herramienta

    //Funcionalidad de logo: de second-page a login
    function back3(){
      document.getElementById("login").style.display = "block";
      document.getElementById("second-page").style.display = "none";
    }

  window.onload=()=>{
      //Links
      const linkOn = document.getElementById("link-encode");
      const linkOff = document.getElementById("link-decode");

      linkOn.addEventListener("click", function() {
        document.getElementById("link-encode").classList.add("link-active");
        document.getElementById("link-decode").classList.remove("link-active");
        document.getElementById("encode").classList.remove("display_none");
        document.getElementById("encode").classList.add("display_block");
        document.getElementById("decode").classList.remove("display_block");
        document.getElementById("decode").classList.add("display_none");
    });

      linkOff.addEventListener("click", function() {
        document.getElementById("link-encode").classList.remove("link-active");
        document.getElementById("link-decode").classList.add("link-active");
        document.getElementById("decode").classList.remove("display_none");
        document.getElementById("decode").classList.add("display_block");
        document.getElementById("encode").classList.remove("display_block");
        document.getElementById("encode").classList.add("display_none");
    });

  //Mensaje en box-ENCODE
  const  btnEncode = document.getElementById("btn-encode");
    btnEncode.addEventListener("click", function(){
        let storyEncode = document.getElementById("box-encode").value;
        let numberOffset  =  document.getElementById("offset-e").value;
        document.getElementById("encode-ready").innerHTML=window.cipher.encode(storyEncode, numberOffset);
    });

  //Mensaje en box-DECODE
  const  btnDecode = document.getElementById("btn-decode");
    btnDecode.addEventListener("click", function(){
        let storyDecode = document.getElementById("box-decode").value;
        let numberOffset  =  document.getElementById("offset-d").value;
        document.getElementById("decode-ready").innerHTML=window.cipher.decode(storyDecode, numberOffset);
    });
  }

    ////Funcionalidad de logo: de last-page a login
    function back4(){
      document.getElementById("login").style.display = "block";
      document.getElementById("last-page").style.display = "none";
    }

    //Splash-screen
    function start(){
      document.getElementById("login").style.display = "block";
      document.getElementById("splash").style.display = "none";
    }
