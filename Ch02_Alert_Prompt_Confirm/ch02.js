function alertDemo(){
    alert('Hello JavaScript');
}
function alertDemoWithMessage(message){
    alert(message);
}
function promptDemo(){
    var result = prompt('What is your favorite color?');
    console.log('result: '+ result);
    if(result==null)
        console.log('Cancel selected');
    else if(result==='')
        console.log('Ok selected with no input');
    else 
        console.log('ok selected with data '+ result);
    return result;
}
function confirmDemo(){
    result = confirm('You are about to submit this form. Are you sure?')
    console.log('result: ' + result);
    
}
function buttonInnerHTMLClick(){
    var data= document.getElementById('dv1');

    console.log(data.innerHTML);
}