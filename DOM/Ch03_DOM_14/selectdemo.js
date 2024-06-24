let soap = document.getElementById('soap');
let selectedSoapButton = document.getElementById('selectedSoapButton');

let selectOptions = document.getElementById('selectOptions');
let addOptions = document.getElementById('addOptions');

selectedSoapButton.addEventListener('click', getSelectedSoaps);
function getSelected(){
    var selectEle = document.getElementById('browser');
    var result = document.getElementById('result');
    result.value = selectEle.value;
}
function setSelected(){
    var selectEle = document.getElementById('browser');
    var result = document.getElementById('result');
    //If value is not defined
    //selectEle.value = 'Google Chrome';
    selectEle.value = '2';
}
function getSelectedSoaps(){
    let soap = document.getElementById('soap');
    let selectedSops = document.getElementById('selectedSops');
    let selectedData="";
    let dataOptions = soap.options; 

    console.log(soap.length);

    for(let i=0;i<dataOptions.length;i++){
        let opt = dataOptions[i];
        if(opt.selected){
            console.log(opt.value);
            selectedData+= opt.innerHTML+ ","
        }
    }
    selectedSops.value =selectedData;
}

addOptions.addEventListener('click',addOptionsAtRuntime);
/*
*To add options at runtime to select (dropdown)
 */
function addOptionsAtRuntime(){
    let i;
    //Remove all
    for(i=selectOptions.options.length-1;i>=0;i--){
        selectOptions.remove(i);
    }
    //Add new
    for(i=1;i<=10;i++){
        var newOption = document.createElement('option');
        newOption.value = i;
        newOption.innerHTML = 'Option '+i;
        selectOptions.appendChild(newOption);
    }
  
}