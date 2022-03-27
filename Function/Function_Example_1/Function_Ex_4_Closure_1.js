/**
 * Example to understand nested function and closure
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */

/**
 * Nested Function and closure
 */
function addSquares(a,b){
    function square(x){
        return x*x;
    }
    return square(a)+square(b);
}

let a = addSquares(2,3); //return 13
console.log(a);

a = addSquares(3,4); //return 25
console.log(a);

/**
 * Since the inner function forms a closure, 
 * you can call the outer function and specify arguments for both the outer and inner function:
 */
function outside(x){
    function inside(y){
        return x+y;
    }
    return inside;
}
let fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
console.log(fn_inside);
let result = fn_inside(5); //it returns 8
console.log(result);
//Or
let result1 = outside(3)(5); //it returns 8
console.log(result1);

/**
 * Preservation of variables
 * Notice how x is preserved when inside is returned. 
 * A closure must preserve the arguments and variables in all scopes it references. 
 * Since each call provides potentially different arguments, a new closure is created for each call to outside. 
 * The memory can be freed only when the returned inside is no longer accessible.
 * This is not different from storing references in other objects, 
 * but is often less obvious because one does not set the references directly and cannot inspect them.
 * * */


/**
 * Multiply-nested functions (Scope Chaining)
 * 
 */
console.log('Multiply-nested functions (Scope Chaining)');
function A(x){
    function B(y) {
        function C(z){
            console.log(x+y+z);
        }
        C(3); //Call function c with parameter value 3
    }
    B(2); //Call function c with parameter value 2
}
A(1); //logs 6


// function A(x){
//     function B(y) {
//         function C(z){
//             return x+y+z;
//         }
//         //C(y); //Call function c with parameter value 3
//         return C;
//     }
//     //B(x); //Call function c with parameter value 2
//     return B;
// }
// //let ans = A(10)(20)(30);
// let ans = A(10);
// let ans1 = ans(20);
// let ans2  = ans1(30);
// console.log(ans2);
