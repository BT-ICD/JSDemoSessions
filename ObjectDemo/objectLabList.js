let btnStudentList = document.getElementById('btnStudentList');
let btnOpenAddStudentPage=document.getElementById('btnOpenAddStudentPage');
btnStudentList.addEventListener('click', ()=>{
    console.log(students.length);

});
btnOpenAddStudentPage.addEventListener('click',()=>{
    let studentData = JSON.stringify( students);
    sessionStorage.setItem('data',studentData);
    window.location.href='./objectLab1_add.html';
    
});

/**
 * Get list of students on window load event
 */
window.addEventListener('load',()=>{
    let data = sessionStorage.getItem('data');
    if(data){
        console.log(data);
    }
    else{
        console.log('no data found');
    }
});