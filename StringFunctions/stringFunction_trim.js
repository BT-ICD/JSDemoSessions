
let trimStart = document.getElementById('trimStart');
let trimEnd = document.getElementById('trimEnd');
let trim = document.getElementById('trim');
let btnResult = document.getElementById('btnResult');
let txtResult = document.getElementById('txtResult');

btnResult.addEventListener('click', displayResult);
function displayResult(){
    let content = document.getElementById('txtName').value;
 
if(trimStart.checked){
    txtResult.value= content.trimStart();
}
else if (trimEnd.checked){
    txtResult.value= content.trimEnd();
}
else{
    txtResult.value= content.trim();
}
// let data = "      We will do it      "
// let ans1 = data.trimStart();
// console.log(ans1);
// console.log(ans1.length);
// let ans2 = data.trimEnd();
// console.log(ans2);
// console.log(ans2.length);
// let ans3 = data.trim();
// console.log(ans3);
// console.log(ans3.length);

}