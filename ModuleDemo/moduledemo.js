// import {isPrime} from './mathmodule'

// import { isPrime } from "./mathmodule";
var myModule = require('./mathmodule.js');
myModule.printMessage('Hello From Node');
 function onPrimeButtonClick(){
    let n=10;
    // let result = isPrime(n);
    myModule.printMessage('Hello Module ');
    alert(n);
}
 function btnClick(){
    alert('Hello');
    myModule.printMessage('Hello Module ');
}
