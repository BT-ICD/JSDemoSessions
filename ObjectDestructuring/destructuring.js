let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

const {PI, E} = Math;
    console.log(PI);
    console.log(E);

btn1.addEventListener('click',()=>{
    //function call - in which circle object passed as an argument
    console.log(circleArea(circle));
});

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

