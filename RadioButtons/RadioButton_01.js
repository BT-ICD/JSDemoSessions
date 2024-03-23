let btnSelectedGender = document.getElementById('btnSelectedGender');
let radioMale= document.getElementById('radioMale');
let radioFemale = document.getElementById('radioFemale');
let txtSelectedGender = document.getElementById('txtSelectedGender');

let txtSelectedSem = document.getElementById('txtSelectedSem');
let btnSelectedSem = document.getElementById('btnSelectedSem');
let radiosem1= document.getElementById('radiosem1');
let radiosem2= document.getElementById('radiosem2');
let radiosem3= document.getElementById('radiosem3');
let radiosem4= document.getElementById('radiosem4');

let txtSelectedSub = document.getElementById('txtSelectedSub');
let btnSelectedSub = document.getElementById('btnSelectedSub');

let radiophp= document.getElementById('radiophp');
let radiojava= document.getElementById('radiojava');
let radiocsharp= document.getElementById('radiocsharp');

let btnSelectedAll=document.getElementById('btnSelectedAll');
let txtSelectedAll=document.getElementById('txtSelectedAll');

btnSelectedGender.addEventListener('click',displaySelectedGender);
btnSelectedSem.addEventListener('click',displaySelectedSem);
btnSelectedSub.addEventListener('click',displaySelectedSub);
btnSelectedAll.addEventListener('click',displaySelectedAll);


function displaySelectedGender(){
    if(radioMale.checked){
        txtSelectedGender.value = "Male Selected"
    }
    else{
        txtSelectedGender.value = "Female Selected"
    }
}
function displaySelectedSem(){

    if(radiosem1.checked){
        txtSelectedSem.value = `${radiosem1.value} selected`;
    }
    else if(radiosem2.checked){
        txtSelectedSem.value = `${radiosem2.value} selected`;
    }
    else if(radiosem3.checked){
        txtSelectedSem.value = `${radiosem3.value} selected`;
    }
    else {
        txtSelectedSem.value = `${radiosem4.value} selected`;
    }

}
function displaySelectedSub(){
    if(radiophp.checked){
        txtSelectedSub.value = `${radiophp.value} selected`;
    }
    else if(radiojava.checked){
        txtSelectedSub.value = `${radiojava.value} selected`;
    }
    else {
        txtSelectedSub.value = `${radiocsharp.value} selected`;
    }
}
function displaySelectedAll(){
    let result = "";
    if(radioMale.checked){
        result = "Male"
    }
    else{
        result = "Female"
    }
    //Semester
    if(radiosem1.checked){
        result += ", " + radiosem1.value;
    }
    else if(radiosem2.checked){
        result += ", " + radiosem2.value;
    }
    else if(radiosem3.checked){
        result += ", " + radiosem3.value;
    }
    else {
        result += ", " + radiosem4.value;
    }
    //Subject
    if(radiophp.checked){
        result += ", " + radiophp.value;
    }
    else if(radiojava.checked){
        result += ", " + radiojava.value;
    }
    else {
        result += ", " + radiocsharp.value;
    }
    txtSelectedAll.value= result;   
}