let radius = document.getElementById('radius');
let area = document.getElementById('area');
let circumference = document.getElementById('circumference');

let result = document.getElementById('btnResult');
result.addEventListener('click', displayResult);

function displayResult(){
    let areaValue = Math.PI* Math.pow(Number(radius.value), 2) ;
    let circumferenceValue = 2*Math.PI* Number(radius.value);
    area.value = areaValue.toFixed(2);
    circumference.value = circumferenceValue.toFixed(2);
}
