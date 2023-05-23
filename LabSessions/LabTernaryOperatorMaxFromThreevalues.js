function displayResult(){
    let a = +document.getElementById('val1').value;
    let b = +document.getElementById('val2').value;
    let c = +document.getElementById('val3').value;
    let result = document.getElementById('result');
    result.value = (a>b && a>c)?a:(b>a && b>c)?b:c;

}