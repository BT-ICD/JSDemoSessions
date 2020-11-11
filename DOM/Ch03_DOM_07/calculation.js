function addition(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    
    var result = Number(value1.value) + Number(value2.value);
    answer.value = result;
}
function subtract(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    
    var result = Number(value1.value) - Number(value2.value);
    answer.value = result;
}
function multiply(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    
    var result = Number(value1.value) * Number(value2.value);
    answer.value = result;
}
function divide(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    
    var result = Number(value1.value) / Number(value2.value);
    answer.value = result;
}
function modulo(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    
    var result = Number(value1.value) % Number(value2.value);
    answer.value = result;
}
function power(){
    var value1 = document.getElementById('value1');
    var value2 = document.getElementById('value2');
    var answer = document.getElementById('answer');
    
    var result = Number(value1.value) ** Number(value2.value);
    answer.value = result;
}