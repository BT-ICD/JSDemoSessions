var btn = document.getElementById('setFocusButton')
btn.addEventListener('click',setFocusButtonClick);

function getNameButtonClick(){

    //Access reference of inout tag with id firstName
    var firstName = document.getElementById('firstName');
    console.log(firstName);
    alert('First Name is ' + firstName.value);
    console.log(firstName.type);

    //Access para <p> tag 
    var para = document.getElementById('para');
    para.textContent =`Name is: ${firstName.value}`;
    para.style.fontSize="200%";
    para.style.backgroundColor='yellow';
}
function setNameButtonClick(){
    var firstName = document.getElementById('firstName');
    firstName.value ='Rajesh Shah'
}
function setFocusButtonClick(){
    var firstName = document.getElementById('firstName');
    firstName.focus();
}