function displayResult(){
    let val1= +document.getElementById('val1').value;
    let val2= +document.getElementById('val2').value;
    let result = document.getElementById('result');
    if(val1>val2){
        result.value = val1;
    }
    else{
        result.value = val2;
    }
}