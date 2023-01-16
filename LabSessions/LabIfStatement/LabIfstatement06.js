function displayResult() {
    let math = +document.getElementById('math').value;
    let science = +document.getElementById('science').value;
    let result = document.getElementById('result');
    //using nested if
    // if (math >= 35) {
    //     if (science >= 35) {
    //         result.value = "Pass";
    //     }
    //     else {
    //         result.value = "Fail";
    //     }
    // }
    // else {
    //     result.value = "Fail";
    // }

    //using and (&&) operator
    if (math >= 35 && science >= 35) {
        result.value = "Pass";
    }
    else {
        result.value = "Fail";
    }

}



