/**
 * About Object prototypes
 * Reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
 */
let btnEx1 = document.getElementById('btnEx1');
let btnEx2 = document.getElementById('btnEx2');
const myObject ={
    city:'Madrid',
    greet(){
        console.log(`Greetings from ${this.city}`);
    }
}
btnEx1.addEventListener('click',objectEx1);
btnEx2.addEventListener('click',objectEx2);
function objectEx1(){
    
    myObject.greet();
    console.log(myObject);
    console.log(myObject.__proto__); //Object
    console.log(myObject.__proto__.__proto__); //null
    console.log(myObject.toString());
    //What is the prototype for myObject? To find out we can use the function
    let obj = Object.getPrototypeOf(myObject);
    console.log(obj);
    obj = Object.getPrototypeOf(obj);
    console.log(obj);
}

/**
 * To iterate over prototype chain
 */
function objectEx2(){
    const myDate  = new Date();
    let object = myDate;
    do{
        object = Object.getPrototypeOf(object);
        console.log(object);
    }while(object)
}