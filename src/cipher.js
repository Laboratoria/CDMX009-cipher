export const cipher = {
    encode,
    decode
} 

function encode(str,ncc){

    let aqui=[];
    let cadena="";
    let form = 0;
    let char = 0;
    

    for (let i=0; i < str.length; i++){
            char = parseInt(str.charAt(i).charCodeAt(0));
            console.log(char)+"";
            form=((char - 65 + ncc)%26+65);
            console.log("nueva"+form);
            aqui[i]=String.fromCharCode(form);
            cadena += aqui[i]+"";
        

    }
    return cadena;
}


function decode(str,ncc){

    let aqui=[];
    let cadena="";
    let form = 0;
    let char = 0;
    

    for (let i=0; i < str.length; i++){
            char = parseInt(str.charAt(i).charCodeAt(0));
            console.log(char)+"";
            form=((char + 65 - ncc)%26+65);
            console.log("nueva"+form);
            aqui[i]=String.fromCharCode(form);
            cadena += aqui[i]+"";
        

    }
    return cadena;
}

export default cipher;