

function Student(rollNo, firstName, semester, subject){
    this.rollNo=rollNo;
    this.firstName=firstName;
    this.semester= semester;
    this.subject= subject;
    printData=function(){
        return  `Student roll no: ${this.rollNo} , fist name ${this.firstName} , semester: ${this.semester}, subject: ${this.subject} `;
    }
}
let students=[];
function addNewStudent(rollNo, firstName, semester, subject){
    let student = new Student(rollNo, firstName, semester, subject);
    students.push(student);
    return students.length;
}
function getStudents(){
    return students;
}


