// To create object using object initializer
let person = {
    firstName: 'Rajesh',
    lastName: 'Shah'
}
let product = {
    id:101,
    name:'Dettol',
}

let p1 = {
    id:101,
    name:'Dettol',
    rate:10,
    addPrice: function(addValue){
        this.rate= this.rate+addValue;
    }
}
console.log(p1);
p1.addPrice(20);
console.log(p1);

function objectDemo1() {
    console.log(person);
    console.log('Ways to access member/property');
    console.log('Using . ', person.firstName);
    console.log('Using []', person['firstName']);

}
// for .. in loops This method traverses all enumerable properties of an object 
function objectDemo2() {
    var result = ``;
    //Method -> hasOwnProperty -  Determines whether an object has a property with the specified name.
    for (var i in person) {
        if (person.hasOwnProperty(i)) {
            result += `Property name: ${i} , Property value: ${person[i]}\n`;
        }
    }
    console.log(result);
}

/**
 * Object.keys(o) - This method returns an array with all the own (not in the prototype chain) enumerable properties' names 
 * ("keys") of an object o. 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 */
// 
function objectDemo3() {
    console.log(Object.keys(person));
}
/**
 * The Object.getOwnPropertyNames() method returns an array of all properties
 * (including non-enumerable properties except for those which use Symbol) found directly in a given object. 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
 * 
 */
// 
// 
function objectDemo4(){
console.log(Object.getOwnPropertyNames(person));
}
//To create object using constructor function
function objectWithConstructorFunction(){
    let myCar = new Car('Maruti','SWIFT','2020');
    console.log(myCar);
   console.log( myCar.isCurrentYear());
}
//Function to create object - Constructor function
function Car(make, model, year){
    this.make  = make;
    this.model= model;
    this.year = year;
    this.isCurrentYear = function(){
        return (this.year=='2020');
    };
    
}
//To create object using the Object.create() method
// Objects can also be created using the Object.create() method. This method can be very useful, because it allows you to choose the prototype object for the object you want to create, without having to define a constructor function.
function objectUsingCreateMethod(){
    //Create an object of Employee
    var e1 = Object.create(Employee);
    e1.name='Manan';
    e1.department='Core Development';
    e1.displayData();

}
//Object with member and member functions
var Employee = {
    name:'',
    department:'',
    displayData:function(){
        console.log(this.name , this.department);
        alert(this.name);
    }
}
//Dynamic nature of JavaScript Object - Allows to add new properties and method at runtime
function addPropertiesToObject(){
 console.log(product);
 product.isAvailable = false;
 console.log(product);
}
/**
 * To create a copy of an object
 * Arguments:
 * 1. The target object — what to apply the sources' properties to, which is returned after it is modified.
 * 2. The source object(s) — objects containing the properties you want to apply.
 * Return: The target object.
 * The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
function createNewObjectFromExisting(){
    let p = Object.assign({}, product);
    console.log('Initial p is :',p);
    p.name ='modified name';
    console.log('product ', product);
    console.log('p ',p);
    var result = (p===product)
    console.log(result);

}
/**
 * You can add a property to a previously defined object type by using the prototype property. 
 * This defines a property that is shared by all objects of the specified type, rather than by just one instance of the object. 
 */
function addPropertiesToObjectDemo1(){
    let car1 = new Car('first make','first model',2020);
    car1.seater = 4; //available to only object car1
    let car2 = new Car('second make','second model',2021);
    Car.prototype.color=null; //available to all car objects under prototype object
    console.log(car1);
    console.log(car2);

    console.log(Object.getOwnPropertyNames(car1));
    console.log(Object.getOwnPropertyNames(car2));
    console.log(Object.keys(car1));
    console.log(Object.keys(car2));
}
/***
 * Object assignmet is by reference.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
function objectAssignmentByRefExample(){
    let car1 = new Car('Maruti','Alto',1980);
    let car2 = car1;
    console.log(car1);
    console.log(car2);
    car2.model='Fronti';
    console.log(car1);
    console.log(car2);
    let result = car1===car2;
    console.log(result);

    let car3 = Object.assign({}, car1);
    console.log(car3);
    car3.make='Toyoto';
    console.log(car3);
    console.log(car1);

    result = car1===car3;
    console.log(result)
}