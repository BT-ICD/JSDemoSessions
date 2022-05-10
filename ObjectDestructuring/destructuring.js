/**
 * About Destructuring assignment
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');

//To extract member of Math class
const {PI, E} = Math;
    console.log(PI);
    console.log(E);

btn1.addEventListener('click',()=>{
    //function call - in which circle object passed as an argument
    console.log(circleArea(circle));
});

//Destructuring from array elements
btn2.addEventListener('click',()=>{
    //Destructuring array element (values) into variables
    const [first,second,,forth]= [10,20,30,40];
    console.log(first);
    console.log(second);
    console.log(forth);

    //.... stands for spread operator
    //Get First Item from array and remaining all items into another array
    //Used to get new array
    console.log("First and Rest elements of an array");
    const[firstItem, ...restItems]=[10,20,30,40,50];
    console.log(firstItem);
    console.log(restItems);
});
//Destructuring as a part of argument of the function

//Circle object
const circle={
    label:'circleX',
    radius:10
};


//function to find area of circle. destructured radius from circle object
//Function expects object with radius as a property of an object
const circleArea =({radius})=> (PI*radius*radius).toFixed(2);
//Step - 3
//Assignment separate from declaration
btn3.addEventListener('click',()=>{
let a,b ;
[a,b]=[1,2];
console.log(a);
console.log(b);
});

/**
 * Swapping variables
 * Two variables values can be swapped in one destructuring expression.
 */
btn4.addEventListener('click',()=>{
    let a = 1;
    let b = 3;

    console.log(a); // 1
    console.log(b); // 3

    [a, b] = [b, a];
    console.log(a); // 3
    console.log(b); // 1
});

/**
 * Object destructuring
 * Basic assignment
 */
 btn5.addEventListener('click',()=>{
    const user = {
        id: 42,
        isVerified: true
    };
    
    const {id, isVerified} = user;
    
    console.log(id); // 42
    console.log(isVerified); // true
    
 });