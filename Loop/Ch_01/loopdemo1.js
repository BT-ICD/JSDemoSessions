function demo1(){
    let i;
    console.log('Loop Demo 1 ');
    // for(i=1;i<=5;i++){
    //     console.log(i);
    // }

    // for(i=1;i<=5;i=i+2){
    //     console.log(i);
    // }
    
    // for(i=10;i<=5;i=i+3){
    //     console.log(i);
    // }
    let number=5;
    let display = document.getElementById('display');
    display.value ="";
    for(i=1;i<=10;i++){
        display.value += number.toString()+ " * " + i.toString() + "="+ (number*i).toString() + '\n'; 
    }


}


