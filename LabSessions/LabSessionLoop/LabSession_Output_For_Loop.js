function outputexample1(){
    let i,j;
    for(i=1;i<=4;i++){
        for(j=1;j<=3;j++){
            console.log(j)
        }
    }
}
function outputexample2(){
    let i,j;
    for(i=1;i<=4;i++){
        for(j=1;j<=3;j++){
            console.log("i="+i+" and  j="+j);
        }
    }
}
function outputexample3(){
    let i,j;
    let data='';
    for(i=1;i<=4;i++){
        data=''
        for(j=1;j<=4;j++){
            data=data+' ' + i;    
        }
        console.log(data)
    }
}
function outputexample4(){
    let i,j;
    let data='';
    for(i=1;i<=4;i++){
        data='';
        for(j=1;j<=i;j++){
            data=data+' ' + j;    
        }
        console.log(data)
    }
}
function outputexample5(){
    let i,j;
    let count =0
    for(i=1;i<=4;i++){
        for(j=1;j<=3;j++){
            count++;
        }
    }
    console.log(count);
}
function outputexample6(){
    let i,j;
    let count =0
    for(i=1;i<=4;i++){
            count++;
    }
    for(j=1;j<=3;j++){
        count++;
    }
    console.log(count);
}
