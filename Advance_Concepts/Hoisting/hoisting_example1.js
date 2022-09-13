myname ='global'; //global variable
function func(){
    console.log(myname); //undefined
    var myname = "local";
    console.log(myname); //local
}
func();