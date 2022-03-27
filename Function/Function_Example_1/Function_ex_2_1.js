const x=1;
//const p=7; //local variable hides global variable within their scope
function a(){
    const y=2;
}
function b(){
    const z=3;
}
function output(value){
    console.log(value);
}

function a1(){
    const p=4; //local variable hides global variable within their scope
    output(p);
}
/**
 * To create seperate example of following code to understand. 
 * How hoisting, function works differently between function expression and function declaration
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions
 */
// console.log(square);
// console.log(square(5));
// var square =function (n){
//     return n*n;
// }
