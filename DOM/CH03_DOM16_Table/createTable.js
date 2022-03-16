/***
 * Example to create table using JavaScript API
 * Reference: https://www.delftstack.com/howto/javascript/create-table-javascript/
 * 
 */

let btnCreateTable = document.getElementById('btnCreateTable');
let divContainer = document.getElementById('divContainer');

btnCreateTable.addEventListener('click', ()=>{
    createTable();
});
function createTable(){
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    //Header Row
    let tr = document.createElement('tr');

    //Header
    let th = document.createElement('th');
    th.innerHTML="Id";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML="Name";
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML="Semester";
    tr.appendChild(th);

    thead.appendChild(tr);

    //Body data

    //Body Row - 1
    tr = document.createElement('tr');
    let tcolId = document.createElement('td');
    let tcolName= document.createElement('td');
    let tcolSemester = document.createElement('td');
    tcolId.innerHTML="101";
    tcolName.innerHTML="Rajesh";
    tcolSemester.innerHTML = 1;
    tr.appendChild(tcolId);
    tr.appendChild(tcolName);
    tr.appendChild(tcolSemester);
    tbody.appendChild(tr);

    //Body Row - 2
    tr = document.createElement('tr');
    tcolId = document.createElement('td');
    tcolName= document.createElement('td');
    tcolSemester = document.createElement('td');
    tcolId.innerHTML="102";
    tcolName.innerHTML="Manan";
    tcolSemester.innerHTML = 2;
    tr.appendChild(tcolId);
    tr.appendChild(tcolName);
    tr.appendChild(tcolSemester);
    tbody.appendChild(tr);

    divContainer.appendChild(table);
}
function removeTable(){
console.log('remove');
}