import cipher from './cipher.js';

console.log(cipher);

let bluetoothSwitchStatus = document.getElementById("bluetoothSwitch");
bluetoothSwitch(bluetoothSwitchStatus);
bluetoothSwitchStatus.addEventListener("click", bluetoothSwitch);

let contactsSelectStatus = document.getElementById("contacts");
contactsSelect(contactsSelectStatus);
contactsSelectStatus.addEventListener("change", contactsSelect);

let codeStatus = document.getElementById("code");
codeStatus.addEventListener("change", codeSelectedStatus);
let decodeStatus = document.getElementById("decode");
decodeStatus.addEventListener("change", codeSelectedStatus);

let offsetStatus = document.getElementById("offset");
offsetStatus.addEventListener("input", offsetValidate);

function bluetoothSwitch() {
    if (bluetoothSwitchStatus.checked === true){
        console.log("ON");
        document.getElementById("contacts").disabled = false;
    }else{
        console.log("OFF");
        let statusElement = document.getElementsByClassName("btStatus");
        disabledElements(statusElement);
    }
    console.log(bluetoothSwitchStatus.checked);
}

function contactsSelect() {
    if(contactsSelectStatus.value != "contactsTitle"){
        console.log("select entra");
        let statusElement = document.getElementsByClassName("contactInit");
        ableElements(statusElement);
        console.log("regresa");
    }else{
        let statusElement = document.getElementsByClassName("contactsStatus");
        disabledElements(statusElement);
    }
}

function offsetValidate() {
    console.log(offsetStatus.value);
    if(isNaN(offsetStatus.value)){
        document.getElementById("offset").value = "";
        document.getElementById("offsetWarning").innerHTML = "El offset debe ser un número.";    
    }else{
        document.getElementById("offsetWarning").innerHTML = "";
    }
    codeDecode();
}

function codeSelectedStatus() {
    console.log("entra a la función");
    if(codeStatus.checked){
        console.log("Es code");
    }else if(decodeStatus.checked){
        console.log("Es decode");
    }else{
        console.log("no es ninguna");
    }
    codeDecode();
}

function codeDecode(){
    let codeStatus = document.getElementById("code");
    let decodeStatus = document.getElementById("decode");
    let offsetStatus = document.getElementById("offset");
    if (codeStatus.checked && offsetStatus.value != ""){
        let statusElement = document.getElementsByClassName("codeCheck");
        ableElements(statusElement);
        let inputTextStatus = document.getElementById("inputTextarea");
        let inputText = inputTextStatus.value;
        cipher(inputText,offsetStatus.value);
        console.log(cipher);  
    }
}

function disabledElements(statusElement) {
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = true;
    }
}

function ableElements(statusElement) {
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = false;
    }
}

//PENDIENTE
function cleanElements(statusElement) { 
    console.log("entra al clean");
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = false;
    }
}

