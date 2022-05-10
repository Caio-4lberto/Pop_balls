function addBall() {
    var ball = document.createElement("div");
    ball.setAttribute("class", "ball");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    ball.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    ball.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(ball);
}

function estourar(elemento) {
    document.body.removeChild(elemento);
}
function iniciar() {
    setInterval(addBall, 1000);
}