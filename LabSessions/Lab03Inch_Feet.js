function GetInchAndFoot(){
    let totalInch= document.getElementById('totalInch');
    let feet = document.getElementById('feet');
    let remaininginch = document.getElementById('remaininginch');
    let inches = +totalInch.value; //Get value of a total inches and convert it to a numetic
    let resultFoot = Math.floor(inches/12);
    let resultInch = inches%12;
    feet.value =resultFoot //display value of a variable resultFoot into a feet textbox
    remaininginch.value =resultInch//display value of a variable resultInch into remainingInch textbox

}
function clearData(){
    let totalInchElemement = document.getElementById('totalInch');
    let feet = document.getElementById('feet');
    let remainingInch = document.getElementById('remaininginch');
    totalInchElemement.value='';
    feet.value ='' ;
    remainingInch.value ='';
}