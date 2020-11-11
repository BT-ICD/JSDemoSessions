function getValues(){
    let cnt=0, sum=0;
    let data='', dataValues='';
    let values = document.getElementById('values');

    while(cnt<5){
        data = prompt("Enter positive value");
        if(Number.isFinite(parseInt(data))){
            let numberValue = parseInt(data);
            if(numberValue>0){
                dataValues+=data+","
                cnt++;
                sum += numberValue;
            }
        }
    }
    values.value = dataValues;
    alert('Sum of positive values' +sum);
}
function doWhileDemo1(){
    let i=1;
    do{

        console.log(i);
        i++;
    }while(i<=5);
}