function displayResult(){
    let values = document.getElementById('values');
    let answer = document.getElementById('answer');
    let i;
    let sum =0;
    values.value ='';
    for(i = 1 ;i<=5;i++){
        values.value = values.value +i+'\n';
        sum = sum +i;
    }
    answer.value=sum;
}