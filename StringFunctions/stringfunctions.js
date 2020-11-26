let inputString = document.getElementById('inputString');
let data = inputString.value +'';
function charAtDemo(){
    let c = data.charAt(0);
    alert('Character at first position (0) is : ' + c);
}
function lengthDemo(){
    let c = data.length;
    alert('Length of a string is : ' + c);
}
function lowerCaseDemo(){
    let c = data.toLowerCase();
    alert('Lower Case:  ' + c);
}
function upperCaseDemo(){
    let c = data.toUpperCase();
    alert('Upper Case:  ' + c);
}
function indexOfDemo(){
    let mainString1 = document.getElementById('mainString1').value+'';
    let searchString1 = document.getElementById('searchString1').value+'';
    let result = mainString1.indexOf(searchString1);
    alert('Result - position is :'+ result);
}
function substringDemo(){
    let mainString = document.getElementById('mainString').value+'';
    let startPosition = +document.getElementById('startPosition').value+'';
    let endPosition = +document.getElementById('endPosition').value+'';
    let resultSubstring =document.getElementById('resultSubstring');
    let result = mainString.substring(startPosition, endPosition)

    resultSubstring.value = result;
    


}