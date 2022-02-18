'use strict';

var gImgs;
var gImgId = 1;
var gFilterImg

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
        _createImage(`./images/meme-images/1.jpg`, 'Politics'),
        _createImage(`./images/meme-images/2.jpg`, 'Animals'),
        _createImage(`./images/meme-images/3.jpg`, 'Animals'),
        _createImage(`./images/meme-images/4.jpg`, 'Animals'),
        _createImage(`./images/meme-images/5.jpg`, 'Babys'),
        _createImage(`./images/meme-images/6.jpg`, 'TV'),
        _createImage(`./images/meme-images/7.jpg`, 'Babys'),
        _createImage(`./images/meme-images/8.jpg`, 'TV'),
        _createImage(`./images/meme-images/9.jpg`, 'Babys'),
        _createImage(`./images/meme-images/10.jpg`, 'Politics'),
        _createImage(`./images/meme-images/11.jpg`, 'TV'),
        _createImage(`./images/meme-images/12.jpg`, 'TV'),
        _createImage(`./images/meme-images/13.jpg`, 'Movies'),
        _createImage(`./images/meme-images/14.jpg`, 'Movies'),
        _createImage(`./images/meme-images/15.jpg`, 'TV'),
        _createImage(`./images/meme-images/16.jpg`, 'TV'),
        _createImage(`./images/meme-images/17.jpg`, 'Politics'),
        _createImage(`./images/meme-images/18.jpg`, 'Movies')
    ];
}

function getImgs() {
    const images = gImgs.filter(img => {
        const keywords = img.keywords.toUpperCase()
        return keywords === gFilterImg
    })
    return (!images.length) ? gImgs : images;
}

function filterImage(value) {
    gFilterImg = value.toUpperCase();
}

function setImg(imageId) {
    gMeme.selectedImgId = imageId;
    renderMeme();
}

function setRandomMeme(imageId) {
    gMeme.selectedImgId = imageId;
    gMeme.lines.forEach(line => {
        line.txt = getRandomTxt()
        line.color = getRandomColor()
    })

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
