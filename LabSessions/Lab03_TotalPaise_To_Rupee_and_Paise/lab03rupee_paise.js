let txtTotalPaise = document.getElementById('txtTotalPaise');
let txtRupees = document.getElementById('txtRupees');
let txtPaise = document.getElementById('txtPaise');
let btnCalculate= document.getElementById('btnCalculate');
let btnClear= document.getElementById('btnClear');

btnCalculate.addEventListener('click', calculate);
btnClear.addEventListener('click',clearValues);

function calculate(){
let totalPaise = +txtTotalPaise.value;

let rupees= parseInt(totalPaise/100);
let paise = totalPaise%100;
txtRupees.value= rupees;
txtPaise.value= paise;

}
function clearValues(){
txtTotalPaise.value='';
txtRupees.value='';
txtPaise.value='';
}