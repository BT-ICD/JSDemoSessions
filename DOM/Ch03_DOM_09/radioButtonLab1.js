function displaySelected(){
    let answer = '';
    let male = document.getElementById('male');
    let sem1 = document.getElementById('sem1');
    let sem2 = document.getElementById('sem2');
    let sem3 = document.getElementById('sem3');
    let result = document.getElementById('result');
    if(male.checked){
        answer='Male'
    }
    else{
        answer='Female'
    }
    if(sem1.checked){
        answer+=" Semester 1"
    }
    else if(sem2.checked){
        
        answer+=" Semester 2"
    }
    else if(sem3.checked){
        answer+=" Semester 3"
    }
    else {
        answer+=" Semester 4"
    }
    result.value = answer;   
    
}