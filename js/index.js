//Easter JavaScript

//Simple funtion to add value while clicking pluss button
//Under the png image is actually a transparent button thats linked to this function
function addValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
//Simple funtion to take away value when clicking minus button
//Under the png image is actually a transparent button thats linked to this function
function removeValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;
}


//Pluss button from ID
var button=document.getElementById("buttonPluss");
//For changeColor function
var allchar="0123456789ABCDEF";
//EventListener that listens for 'click'
//This EventListener is for colorchange
button.addEventListener("click",changeColor);
//Change color randomly when hitting "pluss png"
function changeColor(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}


//Minus button from ID
var button=document.getElementById("buttonMinus");
//Change color randomly when hitting "minus png"
function changeColor(){
  var  randcol= "";
for(var i=0; i<6; i++){
   randcol += allchar[Math.floor(Math.random()*16)];
}
document.body.style.backgroundColor= "#"+randcol;
}

