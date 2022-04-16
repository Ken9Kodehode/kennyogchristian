//JavaScript skal skrives her :)


function addValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function removeValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}

//Change color randomly when hitting "pluss"

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

//Change color randomly when hitting "minus"
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

