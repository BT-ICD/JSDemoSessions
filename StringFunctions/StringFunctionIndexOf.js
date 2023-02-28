let btnResult = document.getElementById('btnResult');
btnResult.addEventListener('click', displayResult);
function displayResult(){
    let content = document.getElementById('txtMain').value;
    let search = document.getElementById('txtSearch').value;
    let txtResult = document.getElementById('txtResult');
    let position = content.indexOf(search);
    if(position>-1){
        txtResult.value ="Found at " + position;
    }
    else{
        txtResult.value ="Not Found";
    }
}