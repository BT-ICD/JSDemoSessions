/**
 * Array - Lab - Allow user to add and remove contact at run time
 * Next to add - search Feature and if available highlight
 */
let divContainer = document.getElementById('divContainer');
let txtName = document.getElementById('txtName');
let btnAdd = document.getElementById('btnAdd');
let contacts=[];
btnAdd.addEventListener('click',()=>{
    let contactName = txtName.value;
    addNewContact(contactName);
});

function addNewContact(contactName){
    let divToAdd = document.createElement('div');
    contacts.push(contactName);

    divToAdd.setAttribute('id','div'+contacts.length);
    divToAdd.classList.add("row");
    divToAdd.classList.add("col-md-12");

    let spanTag =  document.createElement('span');
    spanTag.innerText=`${contactName}`;
    spanTag.setAttribute('id','span'+ contacts.length);
    spanTag.classList.add("col-md-4");
    let buttonToAdd = document.createElement('button');
    buttonToAdd.setAttribute('id','btn'+contacts.length);
    buttonToAdd.classList.add("col-md-4");
    buttonToAdd.classList.add("btn");
    buttonToAdd.classList.add("btn-secondary");
    buttonToAdd.innerText='Remove';
    buttonToAdd.addEventListener('click',removeContact);
   
    divToAdd.append(spanTag);
    divToAdd.appendChild(buttonToAdd)

    divContainer.appendChild(divToAdd);
}
function removeContact(e){
    // console.log(e.target);
    // console.log(e);
    let parenDiv = document.getElementById(e.target.id).parentNode
    let spanTags = parenDiv.getElementsByTagName('span'); 
    divContainer.removeChild(parenDiv)
    //console.log(parenDiv);
    //console.log(parenDiv.innerText);
    //console.log(spanTags);
    let position = contacts.findIndex((data)=>data==spanTags[0].innerText);
    // console.log(position);
    contacts.splice(position,1);
    console.log(contacts);
}