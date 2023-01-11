function displayResult(){
    let marks= document.getElementById('marks');
    let result= document.getElementById('result');
    let m = +marks.value;
    if (m >= 40){
        result.value="Pass";
        console.log("Pass");
    }
    else{
        result.value="Fail";
    }
    console.log("Thank you!");

}