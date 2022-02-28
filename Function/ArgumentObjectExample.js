/**
 * Learning Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 * 
 */
let cmd1 = document.getElementById('cmd1');
let cmd2 = document.getElementById('cmd2');
let cmd3 = document.getElementById('cmd3');

cmd1.addEventListener('click', ()=> demo());
cmd2.addEventListener('click', ()=> demo(10));
cmd3.addEventListener('click', ()=>demo(10,20));


function demo(){
    console.log(arguments);
    console.log(arguments.length);
    // for(let i=0;i<arguments.length;i++){
    //     console.log(arguments[i]);
    // }
    for (const item of arguments) {
        console.log(item);
    }
}