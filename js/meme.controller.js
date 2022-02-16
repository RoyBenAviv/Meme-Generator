'use strict';

var gCanvas = document.getElementById('my-canvas');
var gCtx = gCanvas.getContext('2d');

function renderMeme() {
    drawMemeFromGallery();
}


function onSwitchLine() {    
    document.querySelector('input[name=meme-text]').value=''
    setLine()
}


function onSetText(el) {
    
    const memeTxt = el.value
    setLineTxt(memeTxt)
    renderMeme()
}

function onSetColor(el) {
    const memeClr = el.value;
    document.querySelector('input[name=meme-text]').style.color = memeClr
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
    var img = new Image();
    img.src = `./images/meme-images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(meme.lines[0].txt, 200, 50, 0);
        drawText(meme.lines[1].txt, 200, 350, 1);
    };
}

function drawText(text, x, y, index) {
    const meme = getMemeForDisplay();
    gCtx.strokeStyle = 'black';
    gCtx.fillStyle = `${meme.lines[index].color}`;
    gCtx.textAlign = `${meme.lines[index].align}`;
    gCtx.font = `${meme.lines[index].size}px Arial`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}


