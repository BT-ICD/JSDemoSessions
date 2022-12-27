
function displayFullName(){
    console.log('Hello');
    let textFirstName=document.getElementById('textFirstName');
    let textMiddleName=document.getElementById('textMiddleName');
    let textLastName=document.getElementById('textLastName');
    textFullName.value = textFirstName.value+ ' ' + textMiddleName.value+ ' ' + textLastName.value;
}