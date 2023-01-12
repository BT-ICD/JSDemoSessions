function displayResult(){
    let angle1= +document.getElementById('angle1').value;
    let angle2= +document.getElementById('angle2').value;
    let angle3= +document.getElementById('angle3').value;
    let result= document.getElementById('result');
    if(angle1+angle2+angle3==180){
        result.value ="It is a valid triangle";
    }
    else{
        result.value ="It is a not valid triangle";
    }

}