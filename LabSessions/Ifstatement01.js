function displayResult(){
    let marks= document.getElementById('marks');
    let result= document.getElementById('result');
    let m = +marks.value;
    if (m >= 40){
        result.value="Pass";
        console.log("Pass");
    }
    console.log("Thank you!");

}