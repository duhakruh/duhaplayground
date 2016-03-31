//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript

var canvas = document.getElementById("myCanvas"); //vytvoření plátna
var ctx = canvas.getContext("2d"); //vytvoření kontextu pro kreslení na plátně

var x = canvas.width/2; //nastavení startovní souřadnice x míčku
var y = canvas.height-30; //nastavení startovní souřadnice y míčku
var dx = -1; //nastavení rychlosti míčku po ose x
var dy = -1; //nastavení rychlosti míčku po ose y
var ballRadius = 10; //deklarace proměnné pro poloměr míčku
var colorR = 255;

//fce pro nakreslení míčku
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "rgb(" + colorR + ", 102, 102)";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //vyčisti plátno
    drawBall(); //nakresli míček
    
    //odraz míčku od stěny
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        //vygenerování náhodného čísla od 0 do 255
        //http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
        colorR = getRandomInt(0,255);
        
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        colorR = getRandomInt(0,255);
    }
    
    x += dx; //změň souřadnice x míčku
    y += dy; //změň souřadnice y míčku
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(draw, 10); //smyčka po 10ms