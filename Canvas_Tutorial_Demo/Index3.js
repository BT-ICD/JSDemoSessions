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
const eraser = document.getElementById('eraser');
const btnZoomIn = document.getElementById('btnZoomIn');
btnZoomIn.addEventListener('click',zoomIn);

const marksData=[];
btnSaveImage.addEventListener('click', saveImage);
canvas.onmousemove = (event) => onMouseMove(event);
canvas.onmousedown=(event)=>onMouseDown(event);

/**
 * Function to create marks object
 */
function MarksDetail(mark,markObj, id, left, top){
    this.mark = mark;
    this.markObj= markObj;
    this.id  = id;
    this.isDeleted=false;
    this.createdOn  = Date().toLocaleString();
    this.deletedOn= '';
    this.left=left;
    this.top = top
}
function onMouseDown(event){
    if(event.buttons==1){
        const ctx = canvas.getContext('2d');
        const bounding = canvas.getBoundingClientRect();
        let x = event.clientX - bounding.left+5;
        let y = event.clientY - bounding.top;
        if(mark01.checked){
            //console.log(event);
            // const img = new Image(15,15);
            // img.src='../Images/One.png';
            // img.onclick= (event)=>removeImage(event);
            // img.onload=()=>{
            //     ctx.drawImage(img,x,y);
            // };
            addElementAtPos(x,y,'../Images/001.png',1);
        }
        else if (mark02.checked){
            addElementAtPos(x,y,'../Images/002.png',2);
        }
        else if(mark03.checked){
            addElementAtPos(x,y,'../Images/003.png',3);
        }
    }
    
}
function onImageClick(event, ele){
    
    event.target.remove();
    event.preventDefault();
    let position = marksData.findIndex((data)=> data.id ==event.target.id);
    console.log(position);
    if(position>-1){
        marksData[position].isDeleted = true;
        marksData[position].deletedOn = Date().toLocaleString();
    }
        //marksData.splice(position,1);
    renderTableRows();
    const ctx = canvas.getContext('2d');
    ctx.clearRect(marksData[position].left-10, marksData[position].top+5, 20, 20)
}
function findIndexOfElement(data,i, id){
    console.log(data.id, id, data.id==id);
    if(data.id ==id){
        return true
    }
    return false;
}
function addElementAtPos(left,top, selectedImageName, selectedMark){
    const ctx = canvas.getContext('2d');
    // let img = document.getElementById('img001');
    // ctx.drawImage(img,left-10,top+5,10,10);

    ele = document.createElement('img')
    //ele.setAttribute('src','../Images/One.png');
    ele.setAttribute('src',selectedImageName);
    ele.setAttribute('height','15')
    ele.setAttribute('style',' z-index: 1')
    ele.setAttribute('id', marksData.length);
    ele.setAttribute('draggable', false);
    divContainer.appendChild(ele);
    ele.style.position = 'absolute'
    ele.style.top = top+'px';
    ele.style.left = left+'px';
    ele.onclick =(event) =>onImageClick(event, ele);
    let mark= new MarksDetail(selectedMark,ele, marksData.length, left,top)
    marksData.push(mark);
    renderTableRows();


    
    console.log(marksData);
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
    else if (eraser.checked){
        if (event.buttons == 1) {
            const ctx = canvas.getContext('2d');
            const bounding = canvas.getBoundingClientRect();
            let x = event.clientX - bounding.left;
            let y = event.clientY - bounding.top;
            //ctx.fillStyle = "rgb(255,0,0)";
            ctx.clearRect(x, y, 2, 2);
        }
    }
}
function saveImage() {
    
    let divElement = document.getElementById('divContainer');
    //    createImageFromDiv(divElement);
    drawMarksOnImage();
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
function drawMarksOnImage(){
    let i;
    const ctx = canvas.getContext('2d');    
    for(i=0;i<marksData.length;i++){
        if(marksData[i].isDeleted==false){
            let img = marksData[i].markObj;
            ctx.drawImage(img,marksData[i].left-15,marksData[i].top,14,14);
        }
    }
}
function renderTableRows(){
    const tbody = document.getElementById('tbody');
    while (tbody.hasChildNodes()) {
        tbody.removeChild(tbody.lastChild);
      }
    for(i=0;i<marksData.length;i++){
        let tr = document.createElement('tr');
        let tdmarks = document.createElement('td');
        tdmarks.innerHTML=marksData[i].mark+'';
        
        tdCreatedOn = document.createElement('td');
        tdCreatedOn.innerHTML=marksData[i].createdOn+'';
       
        tddeletedOn = document.createElement('td');
        tddeletedOn.innerHTML=marksData[i].deletedOn+'';
        tr.appendChild(tdmarks);
        tr.appendChild(tdCreatedOn);
        tr.appendChild(tddeletedOn);
        
        tbody.appendChild(tr)
    }
}
function zoomIn(){
    // const ctx = canvas.getContext('2d');
    // ctx.scale(2,2);
    // ctx.setTransform(1, 0, 0, 1, 0, 0);
    //canvas.style.transform = scale(1.5);
    canvas.classList.replace('canvas1','canvas2');
}

// To do: To draw image when user click on save image - to draw marks which are not deleted at a particular location