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

    const meme = getMemeForDisplay()

    var img = new Image()
    img.src = `./images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        // drawText(meme.lines[0].txt, 100, 50)
        drawText()
    }
}

function drawText(text, x, y) {

    const meme = getMemeForDisplay()
    
    gCtx.strokeStyle = `${meme.lines[0].color}`;
    gCtx.font = `${meme.lines[0].size}px Arial`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(meme.lines[0].txt, 100, 50);
  }


  