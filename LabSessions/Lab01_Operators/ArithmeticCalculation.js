let txtVal1 = document.getElementById('txtVal1');
let txtVal2 = document.getElementById('txtVal2');
let txtAnswer = document.getElementById('txtAnswer');

let btnAddition = document.getElementById('btnAddition');
let btnSubtract = document.getElementById('btnSubtract');
let btnMultiply = document.getElementById('btnMultiply');
let btnDivide = document.getElementById('btnDivide');
let btnRemainder = document.getElementById('btnRemainder');
let btnPower = document.getElementById('btnPower');


btnAddition.addEventListener('click', addition);
btnSubtract.addEventListener('click', subtraction);
btnMultiply.addEventListener('click', multiplication);
btnDivide.addEventListener('click', divide);
btnRemainder.addEventListener('click', remainder);
btnPower.addEventListener('click', power);

function addition(){
    let num1= +txtVal1.value;
    let num2= +txtVal2.value;    
    let ans = num1+num2;
    txtAnswer.value = ans;
}
function subtraction(){
    let num1= +txtVal1.value;
    let num2= +txtVal2.value;    
    let ans = num1-num2;
    txtAnswer.value = ans;
}

function multiplication(){
    let num1= +txtVal1.value;
    let num2= +txtVal2.value;    
    let ans = num1*num2;
    txtAnswer.value = ans;
}
function divide(){
    let num1= +txtVal1.value;
    let num2= +txtVal2.value;    
    let ans = num1/num2;
    txtAnswer.value = ans;
}
function remainder(){
    let num1= +txtVal1.value;
    let num2= +txtVal2.value;    
    let ans = num1%num2;
    txtAnswer.value = ans;
}
function power(){
    let num1= +txtVal1.value;
    let num2= +txtVal2.value;    
    let ans = num1**num2;
    txtAnswer.value = ans;
}