function displayResult(){
    let charValue = document.getElementById('charValue').value;
    let result=  document.getElementById('result');
    if(charValue=='a' || charValue=='e' || charValue=='i' || charValue=='o' || charValue=='u'){
        result.value="Yes, it is vowel";
    }
    else{
        result.value="No, it is vowel";
    }
}