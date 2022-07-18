import validator from './validator.js';

function validateNumCard() {
    let numCard= document.getElementById('ncard').value;
    let alertBox= document.getElementsByClassName('alertBox');
    // alert para ingresar número
    if (numCard===''|| numCard===null){
    alert('Write your card number');
    return false;
    }

    // Validar y enmascarar número
    let validate= validator.isValid(numCard);
    let mask= validator.maskify(numCard);

    for (let i= 0; i < alertBox.length; i++){
    if (validate === true) {
        alertBox[i].style.display= 'block';
        document.getElementById('valid').innerText= '¡Your credit card ' + mask + ' is valid!';

    } else{
        alertBox[i].style.display= 'block';
        document.getElementById('valid').innerText= '¡Your credit card ' + mask + ' is not valid!';
    }
}
}
document.getElementById('button-36validbtn').addEventListener('click', validateNumCard, false);

// Sólo números en input
function event(evt) {
    function keyNumbers(key) {
        let code= key.keyCode || key.which;
        if(code >= 48 && code <= 57) {
            return true;
        } else {
            alert('Just write numbers please');
            return false;
        }
    }
    if (keyNumbers(evt) === false) {
    evt.preventDefault();
    }
}
document.getElementById('ncard').addEventListener('keypress', event, false);

// reiniciar
function inputClean() {
    let numCard= document.getElementById('ncard');
    let numCode= document.getElementById('ncode');
    let alertBox= document.getElementsByClassName('alertBox');
    numCard.value='';
    numCode.value='';
    for (let i= 0; i < alertBox.length; i++) {
        alertBox[i].style.display='none';
    }
}
document.getElementById('button-36restartbtn').addEventListener('click', inputClean, false);