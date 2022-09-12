let txtLength= document.getElementById('txtLength');
let txtWidth= document.getElementById('txtWidth');
let txtArea= document.getElementById('txtArea');
let txtPerimeter= document.getElementById('txtPerimeter');
let btnCalculate= document.getElementById('btnCalculate');
let btnClear= document.getElementById('btnClear');

btnCalculate.addEventListener('click',calculateResult);
btnClear.addEventListener('click',clearValues)

function calculateResult(){
    let l = +txtLength.value;
    let w = +txtWidth.value
    txtArea.value = l*w;
    txtPerimeter.value = 2*(l+w);
}
function clearValues(){
    txtLength.value='';
    txtWidth.value='';
    txtArea.value = '';
    txtPerimeter.value = '';
}