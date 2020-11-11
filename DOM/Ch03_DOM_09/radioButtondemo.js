function getResult(){
    var resultYes = document.getElementById('resultYes');
    //attribute checked indicates radio button is selected/checked or not
    //attribute value provides corresponding value of radio button
    console.log('value '+ resultYes.value  +  ' - checked - ' + resultYes.checked);
    var resultNo = document.getElementById('resultNo');
    var answer = document.getElementById('answer');
    if(resultYes.checked)
        answer.value ='Yes Selected';
    else if (resultNo.checked)
        answer.value ='No Selected';
    else
        answer.value='None Selected'
}
function clearAll(){
    var resultYes = document.getElementById('resultYes');
    var resultNo = document.getElementById('resultNo');
    resultYes.checked=false;
    resultNo.checked =false;
}
function resultChange(){
    console.log(event.target.value);
    console.log(event.srcElement);
}