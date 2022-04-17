//JavaScript skal skrives her :)

//Funtion to add value while clicking pluss
function addValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
//Funtion to take away value when clicking minus
function removeValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}

//Change color randomly when hitting "pluss png"

var buton=document.getElementById("butonPluss");
var allchar="0123456789ABCDEF";

buton.addEventListener("click",changeColor);

function changeColor(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}

//Change color randomly when hitting "minus png"

var buton=document.getElementById("butonMinus");
var allchar="0123456789ABCDEF";

buton.addEventListener("click",changeColor);

function changeColor(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}

