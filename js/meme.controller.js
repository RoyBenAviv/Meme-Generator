'use strict';

var gCanvas = document.getElementById('my-canvas');
var gCtx = gCanvas.getContext('2d');

function initCanvas() {

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
    switchLine();
    const memeLine = getMemeLine();
    document.querySelector('input[name=meme-text]').value = memeLine.txt;
}

function onAddLine() {
    setLine()
    renderMeme();
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

function onSetFont(value) {
    const txtFont = value;
    document.querySelector('input[name=meme-text]').style.fontFamily = txtFont;
    setTxtFont(txtFont)
    renderMeme();
}

function drawMemeFromGallery() {
    const meme = getMemeForDisplay();
    var img = new Image();
    img.src = `./images/meme-images/${meme.selectedImgId + 1}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        renderTxt()
    }
}

function renderTxt() {

    var currLineIdx = 0
    const meme = getMemeForDisplay();
    meme.lines.forEach(line => {
        drawText(line.txt, line.posX, line.posY, currLineIdx++)
    })
}

function drawText(text, x, y, selectedLineIdx) {
    const meme = getMemeForDisplay();
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = 3;
    gCtx.fillStyle = `${meme.lines[selectedLineIdx].color}`;
    gCtx.textAlign = `${meme.lines[selectedLineIdx].align}`;
    gCtx.font = `${meme.lines[selectedLineIdx].size}px ${meme.lines[selectedLineIdx].font}`;
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
    const meme = getMemeForDisplay()
    // UI Changes
    document.querySelector('.gallery').style.display = 'flex';
    document.querySelector('.editor').style.display = 'none';
    document.querySelector('.canvas-bg').style.opacity = '0';
    document.querySelector('.nav-gallery').style.display = 'flex'
    document.querySelector('.nav-canvas').style.display = 'none'
    // Clear Canvas
    // meme.lines.forEach(line => {
    //     line.txt = ''
    // })
    document.querySelector('input[name=meme-text]').value = '';
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}