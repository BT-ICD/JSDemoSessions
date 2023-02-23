
let trimStart = document.getElementById('trimStart');
let trimEnd = document.getElementById('trimEnd');
let trim = document.getElementById('trim');
let btnResult = document.getElementById('btnResult');
let txtResult = document.getElementById('txtResult');

btnResult.addEventListener('click', displayResult);
function displayResult(){
    let content = document.getElementById('txtName').value;
 
if(trimStart.checked){
    txtResult.value= content.trimStart();
}
else if (trimEnd.checked){
    txtResult.value= content.trimEnd();
}
else{
    txtResult.value= content.trim();
}
}