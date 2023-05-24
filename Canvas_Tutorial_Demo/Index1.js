/**
 * Canvas - Example 1 
 * Referencse 
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage
 * https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
 */
const body = document.getElementById('body');
const canvas = document.getElementById('tutorial');
body.onload= ()=>bodyOnLoad();
function bodyOnLoad(){
    console.log('bodyOnLoad');
    ctx= canvas.getContext("2d");

    // Example - 1 
    // ctx.fillStyle = "rgb(200,0,0)";
    // ctx.fillRect(30,30,30,30); //fillRect(x, y, width, height)

    // ctx.fillStyle = "rgba(0,0,200,0.5)";
    // ctx.fillRect(30,30,50,50); //fillRect(x, y, width, height)

    // Example - 2
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    // Example - 3 Drawing a triangle
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    
    ctx.fill();
    //ctx.stroke(); ctx.lineTo(75, 50);

}