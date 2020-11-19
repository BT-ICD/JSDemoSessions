var timerId;
function startTimer(){
   // timerId = setTimeout(displayTime, 5000);
   timerId = setInterval(displayTime, 1000);
   console.log('started',timerId);
}
function stopTimer(){
    clearInterval(timerId);
    console.log('stopped',timerId);
}
function displayTime(){
    let dateTextbox = document.getElementById('dateTextbox');
    let currentDate = new Date();
    dateTextbox.value =currentDate;
    
}