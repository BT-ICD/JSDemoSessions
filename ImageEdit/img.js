let btnWrite = document.getElementById('btnWrite');
let img  = document.getElementById('img');
let controls = document.getElementById('controls');
let ele =document.getElementById('img1') .cloneNode();
// const canvas = canvas.getContext("2d");

btnWrite.addEventListener('click', addText);

function addText() {
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
//   const text = document.getElementById("textInput").value;
//   const fontSize = parseInt(document.getElementById("fontSizeInput").value);
//   const textColor = document.getElementById("colorInput").value;
const text="Hello World";
ctx.font = "bold 24px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, 50, 50);
}
// document.addEventListener('DOMContentLoaded', ()=>{
   
// })
function drag(ev){
//console.log(ev);
//console.log(ev.srcElement);
ev.dataTransfer.setData("text", ev.srcElement.id);
console.log(ev.dataTransfer)
}
function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drop(ev){
    console.log('dropped');
    console.log(ev)
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
//   const text = document.getElementById("textInput").value;
//   const fontSize = parseInt(document.getElementById("fontSizeInput").value);
//   const textColor = document.getElementById("colorInput").value;
const text="01";
ctx.font = "bold 16px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, ev.layerX-15, +ev.layerY-50);
    
    img.src= canvas.toDataURL();
    
    controls.appendChild( ele);

}