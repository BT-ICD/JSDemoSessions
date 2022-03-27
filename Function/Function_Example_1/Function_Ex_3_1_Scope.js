/**
 * Function scope
 * Variables defined inside a function cannot be accessed from anywhere outside the function, 
 * because the variable is defined only in the scope of the function. 
 * However, a function can access all variables and functions defined inside the scope in which it is defined.
 * 
 * In other words, a function defined in the global scope can access all variables defined in the global scope. 
 * A function defined inside another function can also access all variables defined in its parent function, 
 * and any other variables to which the parent function has access.
 * Reference: 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */




var num1=20, num2=3, name ='Chamakh';
//This function is defined in the global scope
function multiply(){
    return num1*num2;
}
console.log(multiply());

//A nested scope example
function getScore(){
    var num1=2, num2=3;
    function add(){
        return name + ' scored ' + (num1+num2);
    }
   
    return add();
}
console.log(getScore());

