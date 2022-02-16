'use strict';

var gCanvas = document.getElementById('my-canvas');
var gCtx = gCanvas.getContext('2d');

function renderMeme() {
    drawMemeFromGallery();

}

function onSetText(el) {
    const memeTxt = el.value
    setLineTxt(memeTxt)

    renderMeme()
}

function drawMemeFromGallery() {

    const meme = getMemeForDisplay();

    var img = new Image();
    img.src = `./images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // drawText(meme.lines[0].txt, 100, 50)
        drawText(meme.lines[0].txt, 100, 50);
    };

}

function drawText(text, x, y) {

    const meme = getMemeForDisplay();

    gCtx.strokeStyle = `${meme.lines[0].color}`;
    gCtx.fillStyle = 'white';
    gCtx.font = `${meme.lines[0].size}px Arial`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}


