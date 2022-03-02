let startButton = document.getElementById('startButton');
let stopButton = document.getElementById('stopButton');
let imgLight = document.getElementById('imgLight');
let timerId;
let counter=0;
startButton.addEventListener('click',startTimer);
stopButton.addEventListener('click',stopTimer);

function startTimer(){
    counter=0;
    timerId = setInterval(changeImage,1000)
}
function stopTimer(){
counter=0;
clearInterval(timerId);
}


function changeImage(){
    if(counter===9){
     counter=0;   
    }
    counter++;
    
    if(counter<=3){
        imgLight.src='red.png';
    }
    else if (counter<=6){
        imgLight.src='yellow.png';
    }
    else if (counter<=9){
        imgLight.src='green.png';
    }
    console.log(counter);
    
}
