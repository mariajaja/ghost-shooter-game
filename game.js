var canvasBg = document.getElementById("canvasBg"),
    ctxBg = canvasBg.getContext("2d"),
    canvasEntities = document.getElementById("canvasEntities"),
    ctxEntities = canvasEntities.getContext("2d"),
    canvasWidth = canvasBg.width,
    canvasHeight = canvasBg.height,
    isPlaying = false,
    requestAnimFrame = window.requestAnimationFram ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame ||
                       window.oRequestAnimationFrame ||
                       window.msRequestAnimationFrame ||
                       function(callback) {
                        window.setTimeout(callback, 1000/60);
                       },
    imgSprite = new Image();

imgSprite.src = "images/sprite.png";
imgSprite.addEventListener("load", init, false);

function init() {
    begin();
}

function begin() {

}