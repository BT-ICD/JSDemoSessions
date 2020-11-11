function checkEvenOdd(){
    let value1 = document.getElementById('value1');
    if (value1.value==""){
        alert('Please enter value');
        value1.focus();
        return;
    }
    let result = document.getElementById('result');
    let value = Number(value1.value)
    if(value==0)
        result.innerHTML="<h2>Number is zero</h2>"
    else if(value%2==0)
        result.innerHTML="<h2>Number is even</h2>"
    else
        result.innerHTML="<h2>Number is odd</h2>"
}