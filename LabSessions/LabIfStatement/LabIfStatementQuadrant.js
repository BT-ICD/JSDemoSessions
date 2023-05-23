function displayResult(){
    let xaxis= document.getElementById('xaxis').value;
    let yaxis= document.getElementById('yaxis').value;
    let result= document.getElementById('result');
    if(xaxis==0 && yaxis==0){
        result.value="Origin"
    }
    else if(xaxis>0 && yaxis>0){
        result.value="First quadrant"
    }
    else if(xaxis<0 && yaxis>0){
        result.value="Second quadrant"
    }
    else if(xaxis<0 && yaxis<0){
        result.value="Third quadrant"
    }
    else if(xaxis>0 && yaxis<0){
        result.value="Fourth quadrant"
    }


}