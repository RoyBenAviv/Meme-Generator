'use strict';

var gImgs;
var gImgId = 1;
_createImages();

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Meme line 1',
            size: 50,
            align: 'center',
            color: 'white',
            font: 'Impact',
            posX: gCanvas.width / 2,
            posY: 80
        },
        {
            txt: 'Meme line 2',
            size: 50,
            align: 'center',
            color: 'white',
            font: 'Impact',
            posX: gCanvas.width / 2,
            posY: gCanvas.height - 80
        }
    ]
};

function _createImage(url, keywords) {
    return {
        id: gImgId++,
        url,
        keywords
    };
}

function _createImages() {
    gImgs = [
        _createImage(`./images/meme-images/1.jpg`, 'politics'),
        _createImage(`./images/meme-images/2.jpg`, 'animals'),
        _createImage(`./images/meme-images/3.jpg`, 'animals, babys'),
        _createImage(`./images/meme-images/4.jpg`, 'animals'),
        _createImage(`./images/meme-images/5.jpg`, 'babys'),
        _createImage(`./images/meme-images/6.jpg`, 'television'),
        _createImage(`./images/meme-images/7.jpg`, 'babys'),
        _createImage(`./images/meme-images/8.jpg`, 'television'),
        _createImage(`./images/meme-images/9.jpg`, 'baby'),
        _createImage(`./images/meme-images/10.jpg`, 'politics'),
        _createImage(`./images/meme-images/11.jpg`, 'television'),
        _createImage(`./images/meme-images/12.jpg`, 'television'),
        _createImage(`./images/meme-images/13.jpg`, 'movies'),
        _createImage(`./images/meme-images/14.jpg`, 'movies'),
        _createImage(`./images/meme-images/15.jpg`, 'television'),
        _createImage(`./images/meme-images/16.jpg`, 'television'),
        _createImage(`./images/meme-images/17.jpg`, 'politics'),
        _createImage(`./images/meme-images/18.jpg`, 'movies')
    ];
}

function setImg(imageId) {
    gMeme.selectedImgId = imageId;
    renderMeme();
}

function setLine() {
    gMeme.lines.push({
        txt: `new text ${gMeme.lines.length}`,
        size: 50,
        align: 'center',
        color: 'white',
        font: 'Impact',
        posX: gCanvas.width / 2,
        posY: gCanvas.height / 2
    })
}

function setLineTxt(memeTxt) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx];
    memeLine.txt = memeTxt;
}

function setColorTxt(memeClr) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx];
    memeLine.color = memeClr;
}

function setTxtSize(txtSize) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx];
    memeLine.size = txtSize;
}

function setTxtFont(txtFont) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx];
    switch (txtFont) {
        case 'IMPACT':
            memeLine.font = 'Impact';
            break;
        case 'ARIAL':
            memeLine.font = 'Arial';
            break;
        case 'VERANDA':
            memeLine.font = 'Veranda';
            break;
    }
}

function setAlign(direction) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx];
    switch (direction) {
        case 'left':
            memeLine.align = 'left';
            break;
        case 'center':
            memeLine.align = 'center';
            break;
        case 'right':
            memeLine.align = 'right';
            break;
    }
}

function switchLine() {
    gMeme.selectedLineIdx++
    if(gMeme.selectedLineIdx >= gMeme.lines.length) gMeme.selectedLineIdx = 0
}

function getMemeLine() {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx];
    return memeLine;
}

function getMemeForDisplay() {
    const meme = gMeme;
    return meme;
}

function getImgForDisplay() {
    const images = gImgs;
    return images;
}
