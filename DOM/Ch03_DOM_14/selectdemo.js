let soap = document.getElementById('soap');
let selectedSoapButton = document.getElementById('selectedSoapButton');
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
    
    console.log(soap.length);
    let dataOptions = soap.options;    
    for(let i=0;i<dataOptions.length;i++){
        let opt = dataOptions[i];
        if(opt.selected){
            console.log(opt.value);
        }
    }
}