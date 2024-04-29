const img = document.getElementById("img");
var angle = 0;

function rotateLeft() {
    angle -= 90;
    img.style.transitionDuration = '0.5s';
    img.style.transform = `rotate(${angle}deg)`;
}

function rotateRight() {
    angle += 90;
    img.style.transitionDuration = '0.5s';
    img.style.transform = `rotate(${angle}deg)`;
}