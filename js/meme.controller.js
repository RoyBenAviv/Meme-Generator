'use strict';

var gCurrLineIdx
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

function onSetColor(el) {
    const memeClr = el.value;
    setColorTxt(memeClr)
    renderMeme()
}

function onSetSize(value) {
    document.getElementById("font-size").innerHTML = value;
    const txtSize = value

    setTxtSize(txtSize)
    renderMeme()
}

function drawMemeFromGallery() {

    const meme = getMemeForDisplay();
    gCurrLineIdx = getCurrLineIdx()
    var img = new Image();
    img.src = `./images/meme-images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        // drawText(meme.lines[0].txt, 100, 50)
        drawText(meme.lines[gCurrLineIdx].txt, 100, 50);
    };

}

function drawText(text, x, y) {

    const meme = getMemeForDisplay();
    gCurrLineIdx = getCurrLineIdx()
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = `${meme.lines[gCurrLineIdx].color}`;
    gCtx.textAlign = `${meme.lines[gCurrLineIdx].align}`;
    gCtx.font = `${meme.lines[gCurrLineIdx].size}px Arial`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}


