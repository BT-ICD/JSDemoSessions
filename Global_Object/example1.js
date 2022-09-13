myglobal ="hello"; //antipattern
console.log(myglobal);  //hello
console.log(window.myglobal); //hello
console.log(window["myglobal"]); //hello
console.log(this.myglobal); //hello

function sum(x,y){
    //antupattern: implied global
    result = x+y;
    return result;
}
ans = sum(10,20);
console.log(ans);
console.log('Value of a variable result is ',result);