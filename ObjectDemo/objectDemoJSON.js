let btnObjEx1 = document.getElementById('btnObjEx1');
let btnObjEx2 = document.getElementById('btnObjEx2');
let btnObjEx3 = document.getElementById('btnObjEx3');
let btnObjEx4 = document.getElementById('btnObjEx4');
let btnObjEx5 = document.getElementById('btnObjEx5');
let btnObjEx6 = document.getElementById('btnObjEx6');
let btnObjEx7 = document.getElementById('btnObjEx7');



btnObjEx1.addEventListener('click',objectExample1);
btnObjEx2.addEventListener('click',objectExample2);
btnObjEx3.addEventListener('click',objectExample3)
btnObjEx4.addEventListener('click',objectExample4);
btnObjEx5.addEventListener('click',objectExample5);
btnObjEx6.addEventListener('click',objectExample6);
btnObjEx7.addEventListener('click',objectExample7);


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
/**
 * Various options to iterate over properties of an object
 * 
 */
function objectExample4(){
    let car1 = new Car('Maruti','Alto',2020);
    Car.prototype.color = 'red';
    car1.print = printCar
    console.log(car1);
    car1.print();

    for(const property in car1){
        //This will render property of car as well as properties belongs to prototype
        console.log(property);
    }
    //This method returns an array with all own (not in the prorotype chain) enumerable properties names ("keys") of an object car1
    console.log(Object.keys(car1));

    //This method returns an array containint all own proeprties names (enumerable or not) of an object car1
    console.log(Object.getOwnPropertyNames(car1));

}
function printCar(){
    let result = `Car details make: ${this.make} , model: ${this.model}, year: ${this.year} `;
    console.log(result);
}
/**
 * Constructor Function to create Car object
 * @param {*} make 
 * @param {*} model 
 * @param {*} year 
 */
function Car(make, model, year){
this.make = make;
this.model = model;
this.year = year;
}

/**
 * Using this for object reference
 * JavaScript has a special keyword, this, that you can use within a method to refer to the current object
 * The this refers to the object that it is in.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#using_this_for_object_references
 */
function objectExample5(){
    const Manager = {
        name:'Rajesh',
        age:27,
        job:"Software Engineer"
    }

    const Intern = {
        name:'Manan',
        age:21,
        job:"Software Engineer Intern"
    }

    Manager.sayHi= sayHi;
    Intern.sayHi= sayHi;
    Manager.sayHi();
    Intern.sayHi();

}
function sayHi(){
    console.log(`Hello, my name is ${this.name}`);
    console.log(this);
}
/**
 * To remove properties of an object
 * You can remove a non-inherited property by using the delete operator.
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#deleting_properties
 */
function objectExample6(){
    const myObj = new Object();
    myObj.a=5;
    myObj.b=12;
    console.log(myObj);
    console.log('a' in myObj); //To determine that property exist in myObj (Object)
    delete myObj.a;
    console.log('After deleting property b');
    console.log(myObj);
    console.log('a' in myObj); //To determine that property exist in myObj (Object)

}
/**
 * To implement getter/setter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters
 */
function objectExample7(){
    let d1 = disance;
    d1.feet=5;
    d1.inch=10;
    d1.printData() ;
}
const disance={
    i:0,
    f:0,
    get inch(){
        return this.i;
    },
    set inch(value){
        this.i =value;
    },
    get feet(){
        return this.f;
    },
    set feet(value){
        this.f=value;
    },
    printData: function(){
        let result  =`Feet: ${this.f} and Inche: ${this.i}`;
        console.log(result);
    }

}