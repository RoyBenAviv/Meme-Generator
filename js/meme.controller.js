'use strict';

var gCanvas;
var gCtx;

function initCanvas() {
    gCanvas = document.getElementById('my-canvas');
    gCtx = gCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', () => {
        resizeCanvas();
        renderMeme();
    });
}


function resizeCanvas() {

    if (window.innerWidth < 490) {
        gCanvas.width = 200;
        gCanvas.height = 200;

    } else {
        gCanvas.width = 400;
        gCanvas.height = 400;
    }
}

function renderMeme() {
    drawMemeFromGallery();
}

function onSwitchLine() {
    const memeLine = getMemeLineIdx();
    setLine();
    document.querySelector('input[name=meme-text]').value = memeLine.txt;
}

function onSetText(el) {
    const memeTxt = el.value;
    setLineTxt(memeTxt);
    renderMeme();
}

function onSetColor(el) {
    const memeClr = el.value;
    document.querySelector('input[name=meme-text]').style.color = memeClr;
    setColorTxt(memeClr);
    renderMeme();
}

function onAlign(direction) {
    setAlign(direction);
    renderMeme();
}

function onSetSize(value) {
    document.getElementById("font-size").innerHTML = value;
    const txtSize = value;
    setTxtSize(txtSize);
    renderMeme();
}

function drawMemeFromGallery() {
    const meme = getMemeForDisplay();
    var img = new Image();
    img.src = `./images/meme-images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        drawText(meme.lines[0].txt, gCanvas.width / 2, 50, 0);
        drawText(meme.lines[1].txt, gCanvas.width / 2, gCanvas.height - 50, 1);
    };
}

function drawText(text, x, y, index) {
    const meme = getMemeForDisplay();
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 3;
    gCtx.fillStyle = `${meme.lines[index].color}`;
    gCtx.textAlign = `${meme.lines[index].align}`;
    gCtx.font = `${meme.lines[index].size}px Impact`;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}

function onDownload(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

// Nav bar
function toggle3d() {
    const canvasContainer = document.querySelector('.canvas-container');
    canvasContainer.classList.toggle('canvas-container-3d');
    var elSwitch = document.querySelector('.switch')
    elSwitch.innerText = (canvasContainer.classList.contains('canvas-container-3d')) ? 'ON' : 'OFF' 
}

function onBack() {
    const memeLine = getMemeLineIdx();
    // UI Changes
    document.querySelector('.gallery').style.display = 'flex';
    document.querySelector('.editor').style.display = 'none';
    document.querySelector('.canvas-bg').style.opacity = '0';
    document.querySelector('.nav-gallery').style.display = 'flex'
    document.querySelector('.nav-canvas').style.display = 'none'
    // Clear Canvas
    document.querySelector('input[name=meme-text]').value = memeLine.txt = '';
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

