/**
 * 
 * Learning References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
 */

let txtDemo = document.getElementById('txtDemo');
let txtDemoArrow = document.getElementById('txtDemoArrow');
let txtDemoArrowRestrictNumbers = document.getElementById('txtDemoArrowRestrictNumbers');
let btnFunctionExpressionExample = document.getElementById('btnFunctionExpressionExample');

btnFunctionExpressionExample.addEventListener('click', getArea)
//Example of anonymous function
txtDemo.addEventListener('keydown', function(event){
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    //console.log(event.keyCode); //keyCode depricated
    let charCode = event.key.toString().charCodeAt(0);
    console.log(charCode);
   
});

//Example of Arrow Function with only one statement to execute
txtDemoArrow.addEventListener('keydown', (event)=>console.log(event.key));

//example of arrow function
txtDemoArrowRestrictNumbers.addEventListener('keydown',(event)=>{
    console.log(event.code);
    let charCode = event.key.toString().charCodeAt(0);
    if(!((charCode>=48 && charCode<=57) || (charCode==66))){
        event.preventDefault();
    }
    //if(e.key)
});

/**
 * Function Expression
 */
const square = function(number){return number*number}
function getArea(){
    let result = square(2);
    alert(result);
}