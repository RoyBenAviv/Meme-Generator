'use strict';

var gCanvas
var gCtx

function initCanvas() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        renderMeme()
    });
}


function resizeCanvas() {

    if(window.innerWidth < 490) {
        gCanvas.width = 200 ;    
        gCanvas.height = 200
        
    } else {
        gCanvas.width = 400;    
        gCanvas.height = 400
    }
}

function renderMeme() {
    drawMemeFromGallery();
}


function onSwitchLine() {    
    const meme = getMemeForDisplay();
    var lineIdx = setLine()
    document.querySelector('input[name=meme-text]').value = meme.lines[lineIdx].txt
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
        drawText(meme.lines[1].txt, 200, gCanvas.width - 50, 1);
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


