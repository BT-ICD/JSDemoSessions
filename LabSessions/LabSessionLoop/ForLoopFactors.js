function displayResult(){
    let value1 = +document.getElementById('value1').value;
    let factors = document.getElementById('factors');
    let i;
    let count=0;
    for(i=1;i<=value1;i++){
        if(value1%i==0){
            factors.value += i+"\n";
            count++;
        }
    }
    numberoffactors.value = count;

}