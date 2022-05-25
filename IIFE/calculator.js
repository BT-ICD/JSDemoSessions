function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}

let calculator = (function(){
    function subtract(a,b){
        return a-b;
    }
    function multiply(a,b){
        return a*b;
    }
    return {
        subtract:subtract,
        multiply:multiply
    }
}

)();
