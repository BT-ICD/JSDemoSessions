let txt = document.getElementById('txt');
let btn1 = document.getElementById('btn1');

txt.addEventListener('keydown', onKeyDown)
btn1.addEventListener('click', ABCD);
//addEventListner - allow us to register event with an object. First Argument event name and second argument name of the function that we have to call when event raised

function ABCD(){
    alert('Button Clicked');
}
function onKeyDown(event){
    console.log(event);
    
    if(event.keyCode!=49){
        event.preventDefault();
    }
}

window.addEventListener('load', textFun);
function textFun(){
    alert('Alert from textFun - when window load');
}