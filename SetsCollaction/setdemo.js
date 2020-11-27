let data = new Set();
let printSet = document.getElementById('printSet');
data.add("INDIA");
data.add("USA");
data.add("CANADA");

function addNew(){
let nameTextBox = document.getElementById('nameTextBox');
data.add(nameTextBox.value);
print();
}
function print(){
console.log(data);
let content = '<ul> '
for(let item of data){
    content = content+ '<li>' + item + '</li>'
}
content = content + '</ul>';
content = content + "<p> Number of elements: " + data.size + '</p>'
printSet.innerHTML =content;
}
function clearValues(){
    data.clear();
    alert(data.size);
    print();
}
function hasValue(){
    let findString = prompt('Enter String To Search');
    let result = data.has(findString);
    alert('Result: ' + result);
}
function deleteValue(){
    let findString = prompt('Enter String To Delete');
    let result = data.delete(findString);
    alert('Delete: ' + result);
    print();
}