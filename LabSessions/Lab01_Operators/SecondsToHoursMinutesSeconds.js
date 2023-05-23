function displayResult(){
    let totalSeconds= document.getElementById('totalSeconds');
    let hours= document.getElementById('hours');
    let minutes= document.getElementById('minutes');
    let seconds= document.getElementById('seconds');

    let h = totalSeconds/3600;
    let remainingSeconds=totalSeconds%3600;
    minutes.value = remainingSeconds/60;
    seconds.value = remainingSeconds%60;
    
    
    

}