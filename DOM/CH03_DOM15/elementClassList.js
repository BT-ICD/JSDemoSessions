/*
*Element.classList - To add - remove class from an element
 https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 */
let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
let classList = btn.classList;
console.log(classList);
btn.classList.add('btn');
btn.classList.add('btn-primary');
});