function displayResult(){
    let i;
    let sum=0;
    let num=0;
    let result = document.getElementById('result');
    for(i=1;i<=5;i++){
        num = +(prompt("Enter value"));
        sum = sum + num;
    }
    result.value  = sum;
}
function displayEvenOddZero(){
    let i;
    let resultEven = document.getElementById('resultEven');
    let resultOdd = document.getElementById('resultOdd');
    let resultZero = document.getElementById('resultZero');
    let even=0,odd=0,zero=0;
   
    
    for(i=1;i<=5;i++){
        num = +(prompt("Enter value"));
        if(num==0){
            zero++;
        }
        else if (num%2==0){
            even++;
        }
        else{
            odd++;
        }
    }
    resultEven.value  = even;
    resultOdd.value=odd;
    resultZero.value = zero;

}