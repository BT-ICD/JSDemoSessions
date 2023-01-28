function displayResult() {
    let values = document.getElementById('values');
    let answer = document.getElementById('answer');
    let i;
    let sum = 0;
    values.value = '';
    for (i = 1; i <= 5; i++) {
        values.value = values.value + i + '\n';
        sum = sum + i;
    }
    answer.value = sum;



}
function displayResult() {
    //Output of the following code
    /*
    let count = 0;
    for (i = 1; i <= 20; i++) {
        if (i % 3 == 0) {
            count++;
        }
    }
    console.log(count);
    */
    //Answer:6


    
    let n=5;
    let data='';
    for(i=1;i<=5;i++){
        data = n + " * " + i + " = " + n*i;
        console.log(data);
    }
}