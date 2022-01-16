let totalInches = document.getElementById('totalInches');
let btnResult = document.getElementById('btnResult');
let feet = document.getElementById('feet');
let inches = document.getElementById('inches');
btnResult.addEventListener('click', displayResult);
function displayResult(){
    let availableInch = +totalInches.value;
    let calculatedFeet= parseInt(availableInch/12);
    let remainingInch = (Number(availableInch))%12;
    feet.value = calculatedFeet;
    inches.value = remainingInch;

}
