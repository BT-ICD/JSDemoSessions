let btnObjEx1 = document.getElementById('btnObjEx1');
let btnObjEx2 = document.getElementById('btnObjEx2');
let btnObjEx3 = document.getElementById('btnObjEx3');

btnObjEx1.addEventListener('click',objectExample1);
btnObjEx2.addEventListener('click',objectExample2);
btnObjEx3.addEventListener('click',objectExample3)
/**
 * Create object using object constructor
 * The Object constructor creates an object wrapper for the given value.
 * If the value is null or undefined, it will create and return an empty object. 
 * Otherwise, it will return an object of a Type that corresponds to the given value.
 * If the value is an object already, it will return the value.
 * References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
 * Access property using . operator as well as [] operator
 */
function objectExample1(){
    let person = new Object();
    person.firstName = 'Rajesh';
    person.lastName = 'shah'
    person.age =35;
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.age);

    let employee = new Object();
    employee.id=101;
    employee.name = 'Manan';
    employee['designation']='Manager';
    console.log(employee['id']);
    console.log(employee['name']);
    console.log(employee.designation);

    //Access property using variable 
    let propName = 'designation';
    console.log(employee[propName]);    // Manager
    console.log(employee.propName); //Wrong -- result undefined


    let distance1 = new Object();
    console.log(distance1);

    
   
}
/**
 * To create object using Object initializer syntax
 * An object initializer is a comma-delimited list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}).
 * Object contains member as well as methods. Example printData
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */
function objectExample2(){
    const employee= {
        id:101,
        name:'Manan',
        designation:'Manager',
        salary:50000,
        printData: function(){
            console.log(`Id: ${this.id}`);
            console.log(`name: ${this.name}`);
            console.log(`designation: ${this.designation}`);
            console.log(`commission is: ${this.getCommission()}`);
        },
        /**An arrow function doesn’t have its own this value and the arguments object. Therefore, you should not use it as an event handler, a method of an object literal, a prototype method, or when you have a function that uses the arguments object. */
        /**Reference: https://www.javascripttutorial.net/es6/when-you-should-not-use-arrow-functions/ */
        // getCommission: ()=>{
            //this points to click event of button
        //     console.log(this);
        //     return (salary*0.1).toFixed(2);
        // }
        getCommission: function(){
            //this points to current object
            console.log(this);
            return (this.salary*0.1).toFixed(2);
        }
    };
    employee.printData();
    console.log(employee.getCommission());
}

/**
 * for...in to iterate over all the enumerable properties of an object
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#creating_new_objects
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
 */
function objectExample3(){
    const student={
        rollNumber:101,
        firstName:'Manan',
        semester:1,
        subject:'JavaScript',
        printData:function(){
            console.log(JSON.stringify(this));
        }
    }
    student.printData();

    for(const  property  in student){
        console.log(typeof student[property]);
        if( typeof student[property] != 'function'  ){
            console.log(`${property}: ${student[property]}`);
        }
    }
}