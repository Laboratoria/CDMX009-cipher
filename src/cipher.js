const cipher = {
   encode:(despderecha, msjusuario) => {
    let textcif = "";
    for (let i = 0; i < msjusuario.length; i++) {
      let character=message[i];
    if (character.match(/[a-z]/i)){
      let textMayu=msjusuario.toUpperCase();
      let msj2=(textMayu.charCodeAt(i)- 65 + parseInt(despderecha))%26+65;
      textcif += String.FromCharCode=(msj2);
    }

    else{
      textcif+=character;
    }
  }
    return textcif;
  },
  decode: (despizquierda, msjusuario) => {
    let textdecifrado= "";

    for (let i=0;i < msjusuario.length;i++){
      //characterD=message[i];
      let textdecifrado=(msjusuario.charCodeAt(i)- 65 + parseInt(despizquierda))%26+65;
      let result= String.FromCharCode=(textdecifrado);
      if ()
      textdecifrado=result;
    }else {
      textdecifrado+=characterD;
    }
    return textdecifrado;
  }
}


export default cipher;
