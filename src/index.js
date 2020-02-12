/*import cipher from './cipher.js';

console.log(cipher);*/

let bluetoothSwitchStatus = document.getElementById("bluetoothSwitch");
bluetoothSwitch(bluetoothSwitchStatus);
bluetoothSwitchStatus.addEventListener("click", bluetoothSwitch);

let contactsSelectStatus = document.getElementById("contacts");
contactsSelect(contactsSelectStatus);
contactsSelectStatus.addEventListener("change", contactsSelect);


let codeStatus = document.getElementById("code");
codeStatus.addEventListener("change", prueba);
//let codeSelectorStatus = document.getElementsByName("codeSelector");
//console.log(codeSelectorStatus[0]);
//codeSelectorStatus[0].onclick = codeSelectedStatus();
/*
codeSelectorStatus[0].addEventListener("change", codeSelectedStatus);
codeSelectorStatus[1].addEventListener("change", codeSelectedStatus);
*/

function prueba(){
    if(codeStatus.checked !== true){
        console.log("Prueba code on");
    }else{
        console.log("Prueba code off");
    }
}

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
        codeSelectedStatus();
    }else{
        let statusElement = document.getElementsByClassName("contactsStatus");
        disabledElements(statusElement);
    }
}

function codeSelectedStatus() {
    console.log("entra a la función");
    let codeSelectorStatus = document.getElementsByName("codeSelector");
    for (let i=0; i < codeSelectorStatus.length; i++){
        if(codeSelectorStatus[0].checked){
            console.log("Es code");
        }
        else if(codeSelectorStatus[1].checked){
            console.log("Es decode");
        }else{
            console.log("no es ninguna");
        }
    }
    /*
    let codeButtonSatus = codeSelectorStatus[0].checked;
    let decodeButtonSatus = codeSelectorStatus[1].checked;
    console.log("Status de radio buttons:" + codeButtonSatus + "-" +decodeButtonSatus);
    */
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

function cleanElements(statusElement) { //PENDIENTE
    console.log("entra al clean");
    for(let i=0; i<statusElement.length; i++){
        statusElement[i].disabled = false;
    }
}

console.log("Llegó aquí");