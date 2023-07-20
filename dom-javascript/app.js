var btnHello = document.getElementById('hello-button');
var chgButtn = document.getElementById('change-button');
var inpName = document.getElementById('hello-input');
var areaHello = document.getElementById('hello-area');
function sayHello() {
    var hello_phrase = 'Hello ' + inpName.value;
    if (inpName.value.trim() == '') {
        hello_phrase = 'Hello friend';
    }
    areaHello.innerHTML = hello_phrase;
}
function changeButton() {
}
