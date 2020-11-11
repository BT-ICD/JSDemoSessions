function arrayDemo1(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log('length: ' +products.length);
    console.log(products);
    console.log('Element at first position: '+ products[0]);
    console.log('Element at last position: '+ products[products.length-1]);
}
function loopDemo1(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    for(let i = 0 ;i<products.length;i++){
        let data = products[i];
        console.log( data);
    }
}
function loopDemo2(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    //example of arrow function as a callback function
    products.forEach((data,index)=> {
        console.log('data ' + data + ' at position: ' + index);
    })
}
function loopDemo3(){
    let products =['Dettol','Cinthol','Hamam','Dove'];

    //example of callback function - anonymous function 
    console.log('Using new function - function body as callback function');
    products.forEach(function(d,i){
        printData(d,i);
    });
    
    //Example of function variable - variable of function as an argument
    // console.log('Using variable of function as an argument - for callback function');
    // let f1 = printData;
    // products.forEach(f1);

    // console.log('Using function as an argument - for callback function');
    // products.forEach(printData);

   
}
function loopDemo4(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    for (const data of products) {
        alert(data);
    }

}
function printData(data, index){
    console.log('------------------------------------------------');
    console.log('data ' + data + ' at position: ' + index);
    console.log('------------------------------------------------');
}
function addNewElement(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log('product array before');
    console.log(products)
    let data = prompt('Enter name');
    //push add new element at last position and returns length of array
    let length =products.push(data);
    console.log('product array after with length: '+ length);
    console.log(products);
}
function findElement(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    let searchData = prompt('Enter a value to search ');
    let position = products.indexOf(searchData);
    console.log(position);
    if(position>=0)
        alert('Found at position' + position);
    else
        alert('Not found');
}
function removeElement(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    let data =prompt('Enter a value to search ');
    let position = parseInt(data);
    console.log('product array before');
    console.log(products)
    //Removes elements from an array. First argument starting position. Second arguments number of elements. Returns list of removed elements
    resultArr = products.splice(position,1);
    console.log('product array after');
    console.log(products);
    console.log('Result array')
    console.log(resultArr);
}
function removeLast(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log('product array before');
    console.log(products);
    //Removes last element and return string 
    let result = products.pop();
    console.log('removed: ',result);
    console.log(products);
}
function copyArray(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    //To create copy of an array or section of an array
    let copyOfProducts = products.slice();
    console.log('product array ');
    console.log(products);
    console.log('copyOfProducts array');
    console.log(copyOfProducts);
    //Starting from index 1 to index 3 get a section of it
    let sectionOfProducts = products.slice(1);
    console.log('sectionOfProducts array');
    console.log(sectionOfProducts)

  
}
function reverseArray(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log(products)
    let revProducts = products.reverse();
    console.log(revProducts);
}
function removeFirst(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log('initial product array ');
    console.log(products);
    //Removes first element removes from array and return it
    var result = products.shift();
    console.log('after removing element - product array '+ result);
    console.log(products);

}
function sortArray(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log('initial product array ');
    console.log(products);
    products.sort();
    console.log('after sorting - product array ');
    console.log(products);

}
function filterArray(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    console.log('initial product array ');
    console.log(products);
    //returns array which satisfies given condition
    var result = products.filter((data)=> data.length>5);
    console.log('Result after filter: ',result);
}
function generateList(){
    let arrayContent1 = document.getElementById('arrayContent1'); 
    let products =['Dettol','Cinthol','Hamam','Dove'];
    let data = "<ul>"
        products.forEach((value)=>{
            data+="<li>" + value + "</li>"
        })
    data += "<ul>"
    arrayContent1.innerHTML = data;    
}
function checkIsArray(){
    let products =['Dettol','Cinthol','Hamam','Dove'];
    let i = 0;
    let result = Array.isArray(products);
    console.log('products is array: ' + result);
    result= Array.isArray(i);
    console.log('i is array '+ result);
}
function demoMap(){
    // The arr.map method is one of the most useful and often used.
    // It calls the function for each element of the array and returns the array of results.
    let marks =[1,2,3,4];
    console.log(marks);
    let result = marks.map((value)=>value*value);
    console.log(result);
}
function splitDemo(){
//convert string to array
    let names = "Dettol,Cinthol,Dove,Lifeboy";
    let arr = names.split(',');
    console.log(arr);
}
function joinDemo(){
//convert from array to string
let products =['Dettol','Cinthol','Hamam','Dove'];
let result = products.join(',');
console.log(result);
}
/*
Reference: https://javascript.info/array-methods
A cheat sheet of array methods:
    To add/remove elements:
        push(...items) – adds items to the end,
        pop() – extracts an item from the end,
        shift() – extracts an item from the beginning,
        unshift(...items) – adds items to the beginning.
        splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
        slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
        concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

    To search among elements:
        indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
        includes(value) – returns true if the array has value, otherwise false.
        find/filter(func) – filter elements through the function, return first/all values that make it return true.
        findIndex is like find, but returns the index instead of a value.

    To iterate over elements:
        forEach(func) – calls func for every element, does not return anything.

    To transform the array:
        map(func) – creates a new array from results of calling func for every element.
        sort(func) – sorts the array in-place, then returns it.
        reverse() – reverses the array in-place, then returns it.
        split/join – convert a string to array and back.
        reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.

    Additionally:
        Array.isArray(arr) checks arr for being an array.

Please note that methods sort, reverse and splice modify the array itself.
*/