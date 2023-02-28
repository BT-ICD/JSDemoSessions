let btnEx1 = document.getElementById('btnEx1');
let btnEx2 = document.getElementById('btnEx2');
let btnEx3 = document.getElementById('btnEx3');
let btnEx4 = document.getElementById('btnEx4');
let btnEx5 = document.getElementById('btnEx5');
let btnEx6 = document.getElementById('btnEx6');

btnEx1.addEventListener('click',ex1);
btnEx2.addEventListener('click',ex2);
btnEx3.addEventListener('click',ex3);
btnEx4.addEventListener('click',ex4);

function ex1(){
    sayHello();
}

function ex2(){
    sayHelloTo("Rajesh");   //firstName = Rajesh
    sayHelloTo("Miloni");   //firstName = Miloni
}
function ex3(){
    let ans;
    let m,n;
    ans = addition(10,20);
    alert(ans);

    m=20;
    n=50;
    ans = addition(m,n);
    console.log(ans);


}

function ex4(){
    let a=  +document.getElementById('txt1').value;
    let b=  +document.getElementById('txt2').value;
    let txtAns = document.getElementById('txtAns');
    txtAns.value = addition(a,b);
}

/**
 * Function without argument
 * To print Hello into console window
 */
function sayHello(){
    console.log("Hello");
}

/**
 * Function with argument
 * To print Hello into console window with name of a user
 */
function sayHelloTo(firstName){
    console.log("Hello ," + firstName );
}
/**
 * Function with argument and return value
 * To perform addition of two numbers
 */
function addition(num1, num2){
    let result = +num1 + +num2;
    return result;
}

/**
 * Example of Arrow Function
 */
btnEx5.onclick = ()=>{
        console.log('Hello From Arrow function');
    }



/**
 * Example of Function expressions
 */
const area = function (length, width){
    return length*width;
}

btnEx6.addEventListener('click', ex6);
function ex6(){
    let answer = area(10,5);
    console.log(answer);
}