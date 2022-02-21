/**
 * To clear all the input tag within a particular div tag
 */
function clearAll(){
    let i=0;
    let studentNameDiv = document.getElementById("studentName");
    let inputs = studentNameDiv.getElementsByTagName('input');

    console.log(inputs.length);
    for(i=0;i<inputs.length;i++){
        inputs[i].value="";
    }
}

/**
 * To fetch all the checkbox from a document.
 * Check All
 */
function checkAll(){
    let i=0;
    let inputs = document.querySelectorAll('input[type=checkbox]');
    console.log(inputs.length);
    for(i=0;i<inputs.length;i++){
        inputs[i].checked=true;
    }
}