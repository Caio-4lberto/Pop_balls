function addBall() {
    var ball = document.createElement("div");
    ball.setAttribute("class", "ball");

    var p1 = Math.floor(Math.random() * 100);
    var p2 = Math.floor(Math.random() * 100);

    var color1 = Math.floor(Math.random() * 255);
    var color2 = Math.floor(Math.random() * 255);
    var color3 = Math.floor(Math.random() * 255);
    
    ball.setAttribute("style", "left:"+p1+"vw;top:"+p2+"vh; background-color: rgb("+ color1 +","+ color2 +","+ color3 +");");
    ball.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(ball);
}

function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBall, 1000);
}