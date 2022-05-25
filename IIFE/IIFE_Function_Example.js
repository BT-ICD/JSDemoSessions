/**
 * IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined
 * References:
 * https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 * https://www.javascripttutorial.net/javascript-immediately-invoked-function-expression-iife/
 * */

function add(a,b){
    return a+b;
}
var counter = 10;
console.log(window.add);
console.log(window.counter);
console.log(window);

/**
 * In this example, the sum variable is referenced as the anonymous function that adds two arguments.
 * In addition, you can execute the function immediately after creating it:
 * * */
let sum = (function (a,b){
    return a+b;
})(10,20);

console.log(sum);
;(function(){
    console.log("I am from IIFE");
})();

let btn1 = document.getElementById('btn1');
btn1.addEventListener('click',()=>{
    let result = subtract(20,10);
    console.log(result);

    result = calculator.subtract(20,10);
    console.log(result);

    result = calculator.multiply(15,3)
    console.log(result);

});

