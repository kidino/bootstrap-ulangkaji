

function sayHello() {

    let btnHello = document.getElementById('hello-button')
    let chgButtn = document.getElementById('change-button')
    let inpName = document.getElementById('hello-input')
    let areaHello = document.getElementById('hello-area')

    let hello_phrase = 'Hello '+ inpName.value; 
    if(inpName.value.trim() == '') {
        hello_phrase = 'Hello friend';
    }

    areaHello.innerHTML = hello_phrase;
   
}

function changeButton() {

}