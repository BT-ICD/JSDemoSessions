function factorClick(){
    let factorValueTextBox = document.getElementById('factorValueTextBox');
    let totalFactorsTextBox = document.getElementById('totalFactorsTextBox');
    let factorsTextBox = document.getElementById('factorsTextBox');

    
    
    
    let n = factorValueTextBox.value;
    let cntFactors = getFactors(n);
    totalFactorsTextBox.value = cntFactors;
    let factors = getFactorsString(n);
    factorsTextBox.value= factors;



}
function isPrimeClick(){
    let primeValueTextBox = document.getElementById('primeValueTextBox');
    let isPrimeResult = document.getElementById('isPrimeResult');
    let result=false;

    let num = primeValueTextBox.value;
    result = isPrime(num);
    isPrimeResult.innerText="Is Prime: " + result;
}
function getFactors(n){
let cnt=0;
for(i=1;i<=n;i++){
    if(n%i==0)
        cnt++;
}
return cnt;
}
function getFactorsString(n){
let result='';
for(i=1;i<=n;i++){
    if(n%i==0)
        result+= i+",";
    }
    return result;
}

function isPrime(n){
    let numFactors = getFactors(n);
    return (numFactors==2);
}