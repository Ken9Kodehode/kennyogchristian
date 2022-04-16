//JavaScript skal skrives her :)

let colorArray = ["AliceBlue", "Coral", "Crimson", "Yellow", "Lavender", "Chartreuse", "Fuchsia", "PaleGreen"]

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



