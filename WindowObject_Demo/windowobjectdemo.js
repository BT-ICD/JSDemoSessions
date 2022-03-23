/**
 * About Window Object
 * Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window
 */
let btnWindowLocation = document.getElementById('btnWindowLocation');
let btnWindowLocationReload = document.getElementById('btnWindowLocationReload');
let btnWindowClose= document.getElementById('btnWindowClose'); 
let btnWindowLocationHref= document.getElementById('btnWindowLocationHref'); 


btnWindowLocation.addEventListener('click', windowLocationDemo);
btnWindowLocationReload.addEventListener('click',()=>{
    window.location.reload();
});
function windowLocationDemo(){
    console.log(window.location);
}
btnWindowClose.addEventListener('click',()=>window.close());
btnWindowLocationHref.addEventListener('click',()=>window.location.href='../Timer/timer.html');