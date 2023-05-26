/**
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
 * https://stackoverflow.com/questions/12477364/draw-a-line-on-an-image-using-javascript
 */
let divContainer = document.getElementById('divContainer');
const canvas = document.getElementById('canvas');
//canvas.addEventListener('mousemove',onMouseMove(event));
const btnSaveImage = document.getElementById('btnSaveImage');
const selection = document.getElementById('selection');
const freehand = document.getElementById('freehand');
const mark01 = document.getElementById('mark01');
const mark02 = document.getElementById('mark02');
const mark03 = document.getElementById('mark03');

btnSaveImage.addEventListener('click', saveImage);
canvas.onmousemove = (event) => onMouseMove(event);
canvas.onmousedown=(event)=>onMouseDown(event);
function onMouseDown(event){
    if(event.buttons==1){
        if(mark01.checked){
            const ctx = canvas.getContext('2d');
            const bounding = canvas.getBoundingClientRect();
            
            let x = event.clientX - bounding.left;
            let y = event.clientY - bounding.top;
            
            //console.log(event);
            // const img = new Image(15,15);
            // img.src='../Images/One.png';
            // img.onclick= (event)=>removeImage(event);
            // img.onload=()=>{
            //     ctx.drawImage(img,x,y);
            // };
            
            addElementAtPos(x,y);
            
        }
        else if (mark02.checked){

        }
        else if(mark03.checked){

        }
    }
    
}
function onImageClick(event, ele){
    // console.log('remove image');
    // console.log(event);
    // console.log(ele);
    event.target.remove();
    event.preventDefault();
}
function addElementAtPos(left,top){
    ele = document.createElement('img')
    ele.setAttribute('src','../Images/One.png')
    ele.setAttribute('height','15')
    ele.setAttribute('style',' z-index: 1')
    divContainer.appendChild(ele);
    ele.style.position = 'absolute'
    ele.style.top = top+'px';
    ele.style.left = left+'px';
    ele.onclick =(event) =>onImageClick(event, ele);
}
function onMouseMove(event) {
    if(freehand.checked ){
        //To determine that button clicked when mouse moves
        if (event.buttons == 1) {
            const ctx = canvas.getContext('2d');
            const bounding = canvas.getBoundingClientRect();
            let x = event.clientX - bounding.left;
            let y = event.clientY - bounding.top;
            ctx.fillStyle = "rgb(255,0,0)";
            ctx.fillRect(x, y, 2, 2)
        }
    }
}
function saveImage() {
    
    let divElement = document.getElementById('divContainer');
    //    createImageFromDiv(divElement);
    html2canvas(canvas).then(
            function (canvas) {
                // Convert the canvas to a data URL
                const dataURL = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.href = dataURL;
                link.download = "content.png";
                link.click();
    });
}