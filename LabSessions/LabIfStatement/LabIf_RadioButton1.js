function displayResult(){
let python = document.getElementById('python');
let javascript = document.getElementById('javascript');
let result = document.getElementById('result');
console.log(python.checked);
console.log(javascript.checked);
if(python.checked==true){
    result.value = "Python selected";
}
else{
    result.value = "JavaScript selected";
}
}
