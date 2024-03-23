function displayResult(){
    let num = document.getElementById('value');
    let result = document.getElementById('result');
    let i;
    let a = +num.value;
    result.value ='';
    for(i=1;i<=a;i++){
        result.value+= i + "\t" + i*i + "\n";
    }
}