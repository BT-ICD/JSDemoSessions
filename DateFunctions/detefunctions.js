function getDate(){
    //currentDate
let currentDate = document.getElementById('currentDate');
let dd = document.getElementById('dd');
let mm = document.getElementById('mm');
let yyyy = document.getElementById('yyyy');

let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let milliseconds = document.getElementById('milliseconds');
let time = document.getElementById('time');
let weekday = document.getElementById('weekday');

let toLocaleString = document.getElementById('toLocaleString');
let toLocaleDateString = document.getElementById('toLocaleDateString');
let toLocaleTimeString = document.getElementById('toLocaleTimeString');

let date = new Date();
currentDate.value = date;
dd.value = date.getDate();
mm.value = date.getMonth();
yyyy.value = date.getFullYear();

hours.value = date.getHours();
minutes.value = date.getMinutes();
seconds.value = date.getSeconds();

milliseconds.value = date.getMilliseconds();
time.value = date.getTime();
weekday.value = date.getDay();

toLocaleString.value = date.toLocaleString();
toLocaleDateString.value  = date.toLocaleDateString();
toLocaleTimeString.value = date. toLocaleTimeString();

}