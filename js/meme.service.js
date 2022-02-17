'use strict';

var gImgs;
var gImgId = 1;
_createImages();


var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'white',
        },
        {
            txt: '',
            size: 50,
            align: 'center',
            color: 'white',
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

function setLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0;
}

function getMemeLineIdx() {
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
