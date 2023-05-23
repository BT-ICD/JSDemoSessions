function example1(){
    let i=1;
    do{

        console.log(i);
        i++;
    }while(i<=5);
}
function example2(){
    let i=100;
    console.log("From i Loop");
    do{

        console.log(i);
        i++;
    }while(i<=5);
    console.log("From j Loop");
    let j=100;
    while(j<=5){
        console.log(j);
        j++;
    }
}