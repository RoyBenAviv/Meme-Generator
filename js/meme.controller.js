'use strict';

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    renderMeme()
    
}

function renderMeme() {
    drawImgFromlocal()
}



function drawImgFromlocal() {
    var img = new Image()
    img.src = './images/1.jpg';
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        drawText('First Test', 100, 50)
    }
}

function drawText(text, x, y) {
    // gCtx.lineWidth = -;
    // gCtx.strokeStyle = 'black';
    gCtx.fillStyle = 'white';
    gCtx.font = '40px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }


  