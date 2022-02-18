'use strict';

var gCanvas = document.getElementById('my-canvas');
var gCtx = gCanvas.getContext('2d');
var gStroke = 1;

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

function onSave() {
    const memeCanvas = gCanvas
    saveMyMemes(memeCanvas)
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

function onDeleteLine() {
    deleteLine()
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

function onStrokeTxt() {
    gStroke++
    if(gStroke >= 5) return gStroke = 1
    setStrokeTxt(gStroke);
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
    img.src = `./images/meme-images/${meme.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        renderTxt()
    }
}

function renderTxt() {
    var currLineIdx = 0
    const meme = getMemeForDisplay();
    meme.lines.forEach(line => {
        // console.log(line)
        // drawText(line.txt, line.stroke, line.color, line.align, line.size, line.font, line.posX, line.posY, currLineIdx++)
        drawText(currLineIdx++)
    })
}

function drawText(lineIdx) {
    const meme = getMemeForDisplay();
    const line = meme.lines[lineIdx]
    gCtx.strokeStyle = 'black';
    gCtx.lineWidth = line.stroke;
    console.log(line)
    console.log(line.stroke)
    gCtx.fillStyle = line.color
    gCtx.textAlign = line.align
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.fillText(line.txt, line.posX, line.posY);
    gCtx.strokeText(line.txt, line.posX, line.posY);
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
    document.querySelector('.memes-section').style.display = 'none'
    document.querySelector('.canvas-bg').style.opacity = '0';
    document.querySelector('.nav-gallery').style.display = 'flex'
    document.querySelector('.nav-canvas').style.display = 'none'

    resetCanvas()
}

function resetCanvas() {
    const meme = getMemeForDisplay()

    var lineIdx = 1;
    meme.lines.length = 2
    meme.lines.forEach(line => {
        line.txt = `Meme Line ${lineIdx++}`
        line.size = 50
        line.align = 'center'
        line.color = 'white'
        line.font = 'impact'
        line.stroke = 1
    })
    document.querySelector('input[name=meme-text]').value = '';
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}