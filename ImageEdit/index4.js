let btnAdd = document.getElementById('btnAdd');
let divContainer = document.getElementById('divContainer');
let btnSave = document.getElementById('btnSave');
// divContainer.addEventListener('mousedown', addMarks);
btnAdd.addEventListener('click',addElement);
btnSave.addEventListener('click',SaveImage1);
// divContainer.onmousemove=(event)=>{
//     // console.log(event)
// }
divContainer.onmousedown=(event)=>{
    // console.log(this);
    console.log(event)
    //ev.layerX-15, +ev.layerY-50
    addElementAtPos(event.offsetX,event.offsetY);
}
function addElementAtPos(left,top){

    console.log(left)
    console.log(top)
    ele = document.createElement('img')
    ele.setAttribute('src','../Images/One.png')
    ele.setAttribute('height','20')
    // ele.setAttribute('top',top)
    // ele.setAttribute('left',left)
    // ele.style.left = 300
    // ele.style.top = 100
    
    ele.setAttribute('style',' z-index: 1')
    
    //ele.onclick = (event)=>onMarksClick(event)
    ele.addEventListener('click',onMarksClick,)
    divContainer.appendChild(ele);
    ele.style.position = 'relative'
    // ele.style.top = 148+'px';
    // ele.style.left = 98+'px';

    ele.style.top = top+'px';
    ele.style.left = left+'px';
}
function addElement(){
    ele = document.createElement('img')
    ele.setAttribute('src','../Images/One.png')
    ele.setAttribute('height','20')
    ele.setAttribute('top','0')
    ele.setAttribute('left','0')
    ele.setAttribute('style',' z-index: 1')
    //ele.addEventListener('click',onImageClick)
    ele.onClick = (event)=>onMarksClick(event)
    divContainer.appendChild(ele);
}
function onMarksClick(event){
    // console.log(this)
    alert('marks clicked ...');
    this.remove();
    //preventDefault();
    event.stopPropagation();
    event.preventDefault();
}
function SaveImage1(){
    let divElement= document.getElementById('divContainer');
//    createImageFromDiv(divElement);
    html2canvas(divElement).then(function (canvas) {
    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "content.png";
    link.click();
    // // Create an image element
    // const image = new Image();

    // // Set the image source to the data URL
    // image.src = dataURL;

    // // Append the image element to the document
    // document.body.appendChild(image);
  });
}
function saveImage(){
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    let element = divContainer
    canvas.width = element.offsetWidth;
    canvas.height = element.offsetHeight;

// Draw the element's content on the canvas
    //context.drawWindow(window, element.offsetLeft, element.offsetTop, element.offsetWidth, element.offsetHeight, "rgb(255,255,255)");

    const computedStyle = window.getComputedStyle(element);
    const width = parseInt(computedStyle.width, 10);
    const height = parseInt(computedStyle.height, 10);
    canvas.width = width;
    canvas.height = height;

    // Draw the div content on the canvas
    context.fillStyle = computedStyle.backgroundColor;
    context.fillRect(0, 0, width, height);
    //context.drawImage(element, 0, 0);

    // Convert the canvas to a data URL
   // const dataURL = canvas.toDataURL("image/png");
    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");
// Create an image element
const image = new Image();

// Set the image source to the data URL
image.src = dataURL;

// Append the image element to the document
document.body.appendChild(image);

    // Create a link element to download the image
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "content.png";
    link.click();

}
function createImageFromDiv(divElement) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set the canvas dimensions to match the div element
    const computedStyle = window.getComputedStyle(divElement);
    const width = parseInt(computedStyle.width, 10);
    const height = parseInt(computedStyle.height, 10);
    canvas.width = width;
    canvas.height = height;

    // Draw the div content on the canvas
    context.fillStyle = computedStyle.backgroundColor;
    context.fillRect(0, 0, width, height);
   // context.drawImage(divElement, 0, 0);

   // Create a new DOMParser instance
   const parser = new DOMParser();

   // Serialize the HTML content of the div
   const divHtml = new XMLSerializer().serializeToString(divElement);

   // Parse the serialized HTML content into a document
   const parsedDiv = parser.parseFromString(divHtml, "text/html");

   // Draw the parsed div content onto the canvas
   context.fillStyle = computedStyle.backgroundColor;
   context.fillRect(0, 0, width, height);
   context.drawImage(parsedDiv.documentElement, 0, 0);



    // Convert the canvas to a data URL
    const dataURL = canvas.toDataURL("image/png");

    // Create an image element
    const image = new Image();

    // Set the image source to the data URL
    image.src = dataURL;

    // Append the image element to the document
    document.body.appendChild(image);
  }