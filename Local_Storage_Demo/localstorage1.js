/**
 * About Local Storage
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
 */

let txtName = document.getElementById('txtName');
let btnSubmit = document.getElementById('btnSubmit');
let btnGet = document.getElementById('btnGet');
let btnRemoveFirstName = document.getElementById('btnRemoveFirstName');
let btnClearAll = document.getElementById('btnClearAll');



btnSubmit.addEventListener('click',setDataToLocalStorage);
btnGet.addEventListener('click',getDataFromLocalStorage);
btnRemoveFirstName.addEventListener('click',removeFirstName);
btnClearAll.addEventListener('click',clearAll);
window.addEventListener('load',onWindowLoad);

function setDataToLocalStorage(){
    localStorage.setItem('firstName',txtName.value);
}
function getDataFromLocalStorage(){
    let data =localStorage.getItem('firstName');
    if(data){
        txtName.value =data;
    }
    else{
        txtName.value='No data found ...';
    }
}
function onWindowLoad(){
    console.log('Window loaded')
    getDataFromLocalStorage();
}
function removeFirstName(){
    if(localStorage.getItem('firstName')){
        localStorage.removeItem('firstName');
    }
    else{
        alert("No data exist");
    }
}
function clearAll(){
    alert('clearall');
    localStorage.clear();
}