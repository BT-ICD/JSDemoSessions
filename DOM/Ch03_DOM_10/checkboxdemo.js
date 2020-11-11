function getResult(){
    var resultJoin= document.getElementById('resultJoin');
    var result = document.getElementById('result');
    console.log('value '+resultJoin.value + ' checked '+ resultJoin.checked);
    if(resultJoin.checked)
        result.value ='Yes selected';
    else
        result.value ='No selected';
}