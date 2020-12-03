// To create object using object initializer
let person = {
    firstName: 'Rajesh',
    lastName: 'Shah'
}
let product = {
    id:101,
    name:'Dettol',
}

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

// Object.keys(o) - This method returns an array with all the own (not in the prototype chain) enumerable properties' names ("keys") of an object o.
function objectDemo3() {
    console.log(Object.keys(person));
}
// The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
function objectDemo4(){
console.log(Object.getOwnPropertyNames(person));
}
//To create object using constructor function
function objectWithConstructorFunction(){
    let myCar = new Car('Maruti','SWIFT','2020');
    console.log(myCar);
   console.log( myCar.isCurrentYear());
}
//Function to create object
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
function createNewObjectFromExisting(){
    let p = Object.assign({}, product);
    console.log('Initial p is :',p);
    p.name ='modified name';
    console.log('product ', product);
    console.log('p ',p);
}