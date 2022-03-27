/**
 * To learn about closure
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
 */
/**
 * Example 1
 * * */
var pet = function(name){
    var getName = function(){
        return name;
    }
    return getName;
}
let myPet = pet('Vivie');
let myPetName = myPet();
console.log(myPetName);

/// Example 1 Ends

/***
 * Example 2 started 
 */
console.log('Example 2');
var createPet = function(name){
    var sex;
    return {
        setName: function(newName){
            name = newName
        },
        getName: function(){
            return name;
        },
        setSex: function(newSex){
            sex= newSex;
        },
        getSex:function(){
            return sex;
        }

    }
}
var petEx2 = createPet('Vivie');
petEx2.setName('Oliver');
petEx2.setSex('male');
console.log(petEx2.getName());
console.log(petEx2.getSex());