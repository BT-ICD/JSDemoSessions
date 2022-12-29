//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function addition(){
    let txtVal1 = document.getElementById('txtVal1');
    let txtVal2 = document.getElementById('txtVal2');
    let txtAnswer = document.getElementById('txtAnswer');
    txtAnswer.value = parseInt(txtVal1.value)+ parseInt( txtVal2.value);

}
function clearData(){
    
    let txtVal1 = document.getElementById('txtVal1');
    let txtVal2 = document.getElementById('txtVal2');
    let txtAnswer = document.getElementById('txtAnswer');
    txtVal1.value='';
    txtVal2.value='';
    txtAnswer.value=''; 
}