function displayResult() {
    let math = +document.getElementById('math').value;
    let science = +document.getElementById('science').value;
    let result = document.getElementById('result');
    if (math >= 35) {
        if (science >= 35) {
            result.value = "Pass";
        }
        else {
            result.value = "Fail";
        }
    }
    else {
        result.value = "Fail";
    }
}

