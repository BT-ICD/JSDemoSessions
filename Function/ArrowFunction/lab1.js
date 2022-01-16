// Simple Function
let greetings = function(){
    return "Hello World";
}
let message = greetings();
console.log(message);

// Arrow Function
let greetings2 = ()=>{
    return "Hello From Arrow Function";
}
let message2 = greetings2();
console.log(message2);

// As arrow function contains only one return statement we can write like this also
let greetings3 = ()=> "Hello From Arrow Function having one statement";

let message3 = greetings3();
console.log(message3);

// Arrow function with parameter
let greetings4 = name=> 'Hello '+ name;
let message4 = greetings4('ICD');
console.log(message4);

// Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument:
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
      result[i] = f(a[i]);
    return result;
  }
  const f = function(x) {
     return x * x * x;
  }
  let numbers = [0, 1, 2, 5, 10];
  let cube = map(f,numbers);
  console.log(cube);