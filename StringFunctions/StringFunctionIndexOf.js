let btnResult = document.getElementById('btnResult');
btnResult.addEventListener('click', findOccurrences);
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

function findOccurrences(){
    let content = document.getElementById('txtMain').value;
    let search = document.getElementById('txtSearch').value;
    let txtResult = document.getElementById('txtResult');
    let position = content.indexOf(search);
    let count =0;
    while(position>=0){
        count+=1;
        position = content.indexOf(search,position+1);
    }
        txtResult.value = count;
    
}