function displayResult(){
    let v1 = +document.getElementById('val1').value;
    let result = document.getElementById('result');
    if(v1<0){
        result.value = v1*-1;
    }
    else{
        result.value = v1;
    }
}