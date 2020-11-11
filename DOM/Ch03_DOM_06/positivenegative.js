function positivenegative(){
    var value1 = document.getElementById('value1');
    var result = document.getElementById('result');
    let num = Number(value1.value);
    if(num==0){
        result.value="Zero";
    }
    else if(num>0){
        result.value = "Positive";
    }
    else{
        result.value="Negative";
    }
}