function print(){
    let txtData = document.getElementById('txtData');
    let data = document.getElementById('data');

    let ans='', ans1='';
    
   for(let i=1;i<=10;i++){
       ans += i + ","; 
       ans1+=i +"\n";
       console.log(i);
   }
   data.value =ans;
   txtData.value = ans1;
}
function printTable(){
    let tableDataValue = document.getElementById('tableDataValue');
    let tableData = document.getElementById('tableData');
    let n =  parseInt (tableDataValue.value);
    let tableContent = '';
    
    for (let i = 1; i <=10; i++) {
        tableContent+= n + ' * ' + i + ' = ' + (n*i) + '\n';
    }
    tableData.value = tableContent;
}