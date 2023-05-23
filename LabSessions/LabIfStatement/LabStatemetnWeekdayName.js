function displayResult(){
    let weekdayNum=+document.getElementById('weekdayNum').value;
    let weekdayName=document.getElementById('weekdayName');
    //using seperate if statement
    // if(weekdayNum==0){
    //     weekdayName.value ="Sunday";
    // }
    // if(weekdayNum==1){
    //     weekdayName.value ="Monday";
    // }
    // if(weekdayNum==2){
    //     weekdayName.value ="Tuesday";
    // }
    // if(weekdayNum==3){
    //     weekdayName.value ="Wednesday";
    // }
    // if(weekdayNum==4){
    //     weekdayName.value ="Thursday";
    // }
    // if(weekdayNum==5){
    //     weekdayName.value ="Friday";
    // }
    // if(weekdayNum==6){
    //     weekdayName.value ="Saturday";
    // }
    
    if(weekdayNum==0){
        weekdayName.value ="Sunday";
    }
    else if(weekdayNum==1){
        weekdayName.value ="Monday";
    }
    else if(weekdayNum==2){
        weekdayName.value ="Tuesday";
    }
    else if(weekdayNum==3){
        weekdayName.value ="Wednesday";
    }
    else if(weekdayNum==4){
        weekdayName.value ="Thursday";
    }
    else if(weekdayNum==5){
        weekdayName.value ="Friday";
    }
    else if(weekdayNum==6){
        weekdayName.value ="Saturday";
    }
    else{
        weekdayName.value="Please enter value between 0-6"
    }

}