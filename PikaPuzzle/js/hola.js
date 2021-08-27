var piezas = document.getElementsByClassName('movil');

for(var i = 0; i<piezas.length; i++){
    piezas[i].setAttribute("width", tamWidh);
    piezas[i].setAttribute("height", tamHeight);
    piezas[i].setAttribute("x", Math.floor(Math.random()*10) +1);
    piezas[i].setAttribute("y", Math.floor(Math.random()*409) +1);
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect = 0;
var currentX = 0;
var currentY = 0;
var currentPostX = 0;
var currentPostY = 0;

function seleccionarElemento(evt){
    elementSelect = reordenar(evt);
    currentX = evt.ClientY;
    currentY = evt.ClientY;
    currentPosX = parseFloat(elementSelect.getAttribute("x"));
    currentPosY = parseFloat(elementSelect.getAttribute("y"));
    elementSelect = setAttribute("onmousemove", "moverElemento(evt)");
}