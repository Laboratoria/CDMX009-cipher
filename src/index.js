/*import cipher from './cipher.js';

console.log(cipher);*/

let bluetoothSwitchStatus = document.getElementById("bluetoothSwitch");
bluetoothSwitch(bluetoothSwitchStatus);
bluetoothSwitchStatus.addEventListener("click", bluetoothSwitch);

function bluetoothSwitch() {
    if (bluetoothSwitchStatus.checked == true){
        console.log("ON");
        document.getElementById("contacts").disabled = false;
        
    }else{
        console.log("OFF");
        let BtStatusElement = document.getElementsByClassName("BtStatus");
        console.log(BtStatusElement.length);
        //BtStatusElement[0].disabled = true;
        for(let i=0; i< 9; i++){
            console.log(BtStatusElement[i]);
            BtStatusElement[i].disabled = true;
            console.log("Si entra al for");
        }
    }
    console.log(bluetoothSwitchStatus.checked);
}
