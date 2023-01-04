function GetMinutesAndSeconds(){
    let totalSeconds= document.getElementById('totalSeconds');
    let minutes = document.getElementById('minutes');
    let remainingSeconds = document.getElementById('remainingSeconds');
    let seconds = +totalSeconds.value;
    minutes.value = Math.floor(seconds /60);
    remainingSeconds.value = seconds %60;
}

function clearData(){
    let totalSeconds = document.getElementById('totalSeconds');
    let feet = document.getElementById('minutes');
    let remainingSeconds = document.getElementById('remainingSeconds');
    totalSeconds.value='';
    feet.value ='' ;
    remainingSeconds.value ='';
}
