let btnStudentAdd = document.getElementById('btnStudentAdd');

btnStudentAdd.addEventListener('click',()=>{
    let arrStudents;
    let data = sessionStorage.getItem('data');
    if(data){
        arrStudents = JSON.parse(data);
    }
    else{
        arrStudents = students;
    }
    
    let student = new Student(101,'A',1,'JavaScript');
    arrStudents.push(student);
    sessionStorage.setItem('data',JSON.stringify(arrStudents));
    console.log(arrStudents.length);

});

