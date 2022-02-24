let addNewTagButton = document.getElementById('addNewTagButton');
let divContainer = document.getElementById('divContainer');
addNewTagButton.addEventListener('click',addNewDiv);

function addNewDiv(){
const div = document.createElement('div');
div.innerText = "DIV";
div.setAttribute('class',"row col-md-12");
divContainer.appendChild(div);
console.log(divContainer);
}