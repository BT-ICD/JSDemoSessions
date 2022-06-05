/**
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */
let btnEx1 = document.getElementById('btnEx1');
let btnEx2 = document.getElementById('btnEx2');
let btnEx3 = document.getElementById('btnEx3');
let btnEx5 = document.getElementById('btnEx5');


/**
 * Example 1
 */
function init(){
    var name = 'Mozila';
    function displayName(){
        alert(name);
    }
    displayName();
}
btnEx1.addEventListener('click',btn1OnClick );
function btn1OnClick(){
    init();
}

/**
 * Example 2
 */
function makeFunc(){
    var name = 'Mozila';
    function displayName(){
        alert(name);
    }
    return displayName;
}
var myFunc = makeFunc();
btnEx2.addEventListener('click',btn2OnClick );
function btn2OnClick(){
    myFunc();
}

/**
 * Example 3
 */
function makeAdder(x){
    return function(y){
        return x+y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);
btnEx3.addEventListener('click',btn3OnClick );
function btn3OnClick(){
    console.log(add5(2));   //7
    console.log(add10(2));  //12
}
/**
 * Example 4
 */
function makeSizer(size){
    return function(){
        document.body.style.fontSize=size+'px';
    }
}
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;


/**
 * Example 5
 * Emulating private methods with closures
 */
var counter = ( function(){
    var privateCounter =0;
    function changeBy(val){
        privateCounter+=val;
    }
    return {
        increment: function(){
            changeBy(1);
        },
        decrement: function(){
            changeBy(-1);
        },
        value:function(){
            return privateCounter;
        }
    };
})();

btnEx5.addEventListener('click',btn5OnClick)
function btn5OnClick(){
    console.log(counter.value()); //0
    counter.increment();
    counter.increment();
    console.log(counter.value()); //2
    counter.decrement();
    console.log(counter.value()); //1
}