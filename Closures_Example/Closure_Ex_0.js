var setup = function(){
    var count =0;
    return function(){
        return (count+=1);
    };
};

var myCounter = setup();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

var secondCounter = setup();
console.log(secondCounter());

