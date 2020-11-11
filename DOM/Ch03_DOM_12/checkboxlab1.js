function getResult(){
    var mobile = document.getElementById('mobile');
    var web = document.getElementById('web');
    var desktop = document.getElementById('desktop')
    var result = document.getElementById('result');
    var choice='';
    if(mobile.checked)
        choice='Mobile';
    if(web.checked)
        choice+= ', Web';
    if(desktop.checked)
        choice+=', Desktop';
    result.value = choice;
}

