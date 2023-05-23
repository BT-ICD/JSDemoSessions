let btn1 = document.getElementById('btnDoWhileDemo1');

//To add event handler - Click event
btn1.addEventListener('click',dowhileDemo1);
function dowhileDemo1(){
    
    // let i=1;
    // do{
    //     console.log(i);
    //     i++;
    // }while(i<=5);


    let i=100;
    do{
        console.log(i);
        i++;
    }while(i<=5);

    let j=100;
    while(j<=5){
        console.log(j);
        j++;
    }


    // do{
    //     result = prompt("Like to give a party")??'';
    // }while(result!='yes');
    // console.log("Thanks");
}
