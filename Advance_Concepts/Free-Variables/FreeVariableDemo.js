/**
 * About Free Variables
 * References: http://dmitrysoshnikov.com/ecmascript/es5-chapter-3-1-lexical-environments-common-theory/
 * Thank you Dmistry
 * 
 * In this example we have three environments: GE, E1 and E2, which correspond respectively to the global object, foo function and bar function.
 * Thus, for the bar function, x, y and z variables are free — they are neither formal parameters, nor local variables of bar.
 * Notice, that foo function does not use free variables. However, since x variable is used inside the bar function, and because bar function is created during execution of the foo function, the later one should nevertheless save the bindings of the parent environment — in order to pass the information about the x binding further to the deeper nested functions (to the bar in our case).
 * Correct and expected result 100 after the bar function activation means, that bar function somehow remembers the environment of the foo function activation (where internal bar function is created), even if the context of the foo is finished. Repeat again, this is the difference from the stack-based activation record model used in C.
 * Obviously, if we allow nested inner functions and want to have the static (lexical) scope, and at the same time — to have all these functions as first-class, we should save all free variables used by a function at the moment of the function’s creation.
 * * */
//Global environment (GE)
var x=10;
function foo(y){
    //environment of "foo" function (E1)
    console.log('foo function - value of y is ', y);
    var z=30;
    function bar(q){
        //environment of bar function (E2)
        console.log('bar function - value of q is ', q);
        return x+y+z+q;
    }
    //return "bar" to the outside
    return bar;
}
//variable bar contains holds function bar;
var bar = foo(20);
let result =bar(40); //100 (q=40, y=20, z=30, x=10);
console.log(result);