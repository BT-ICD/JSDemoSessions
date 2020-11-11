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