function displayResult(){
    let num = document.getElementById('val1').value;
    let result = document.getElementById('result');
//Using nested if
    if(num==0){
        result.value ="Number is zero";
    }
    else{
        if(num>0){
            result.value ="Number is positive";
        }
        else{
            result.value ="Number is negative";
        }
    }

// //Using else if
// if(num==0){
//     result.value ="Number is zero";
// }
// else if (num>0){
//     result.value ="Number is positive";
// }
// else{
//     result.value ="Number is negative";
// }

}