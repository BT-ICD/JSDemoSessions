let txtName= document.getElementById('txtName');
let btnResult= document.getElementById('btnResult');
let caseChoice= document.getElementById('caseChoice');
let txResult= document.getElementById('txResult');

btnResult.addEventListener('click', displayResult);

function displayResult(){
    let selectedChoice= +caseChoice.value;
    txResult.value ="";
    switch(selectedChoice){
        case 1:
            txResult.value = txtName.value.toUpperCase();
            break;
        case 2:
            txResult.value = txtName.value.toLowerCase();
            break;
    }
}