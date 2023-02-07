function outputExample1(){
    let i=1;
    while(i<=5){
        console.log(i);
        i++;
    }
}
function outputExample2(){
    let i=10;
    while(i>=5){
        console.log(i);
        i--;
    }
}
function outputExample3(){
    let cnt=0;
    let sum =0;
    let num=0;
    while(cnt<5){
        num= +prompt("Enter a positive number");
        if(num>0){
            cnt++;
            sum+=num;
        }
        else{
            console.log("oops");
        }
    }
    console.log(cnt);
    console.log(sum)      ;

}

/**
 * Nullish coalescing operator (??)
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
 */
function outputExample4(){
    let answer='';
    answer = prompt("Like to give a party?")??'';
    
    while(answer.toLowerCase()!='yes'){
        answer = prompt("Like to give a party?")??'';
        
    }
    alert("Thanks dear");

}
function outputExample5(){
 let num=783;
 let rem,cnt=0;
 while(num>0){
    rem = num%10;
    num= Math.floor(num/10);
    console.log(rem);
    console.log(num);
    cnt++;
 }
 console.log(cnt);

}
function sumOfDigits(){
    
    let rem,sum=0;
    let num= +document.getElementById('txtNum').value;
    let txtResult = document.getElementById('txtResult');
    while(num>0){
       rem = num%10;
       num= Math.floor(num/10);
       sum+=rem
    }
    txtResult.value = sum;

    
      
}