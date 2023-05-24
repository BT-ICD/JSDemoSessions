/**
 * References:
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
 * https://stackoverflow.com/questions/12477364/draw-a-line-on-an-image-using-javascript
 */
const canvas = document.getElementById('canvas');
//canvas.addEventListener('mousemove',onMouseMove(event));
const btnSaveImage = document.getElementById('btnSaveImage');
btnSaveImage.addEventListener('click', saveImage);
canvas.onmousemove = (event) => onMouseMove(event);
function onMouseMove(event) {
    //To determine that button clicked when mouse moves
    if (event.buttons == 1) {
        const ctx = canvas.getContext('2d');
        const bounding = canvas.getBoundingClientRect();
        let x = event.clientX - bounding.left;
        let y = event.clientY - bounding.top;

        ctx.fillStyle = "rgb(255,0,0)";
        ctx.fillRect(x, y, 2, 2)
    }
    //console.log(event.buttons);
    //console.log(event.clientX, bounding.left,event.clientX- bounding.left );

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