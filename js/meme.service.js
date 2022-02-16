'use strict';

var gImgs;
var gImgId = 1;
_createImages()


var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 50,
            align: 'left',
            color: 'white',
        },
        {
            txt: '',
            size: 50,
            align: 'left',
            color: 'white',
        }
    ]
};

function _createImage(url, keywords) {
    return {
        id: gImgId++,
        url,
        keywords
    }
}

function _createImages() {
    gImgs = [
        _createImage(`./images/meme-images/1.jpg`, 'politics'),
        _createImage(`./images/meme-images/2.jpg`, 'politics'),
        _createImage(`./images/meme-images/3.jpg`, 'politics'),
        _createImage(`./images/meme-images/4.jpg`, 'politics'),
        _createImage(`./images/meme-images/5.jpg`, 'politics'),
        _createImage(`./images/meme-images/6.jpg`, 'politics'),
        _createImage(`./images/meme-images/7.jpg`, 'politics'),
        _createImage(`./images/meme-images/8.jpg`, 'politics'),
        _createImage(`./images/meme-images/9.jpg`, 'politics'),
        _createImage(`./images/meme-images/10.jpg`, 'politics'),
        _createImage(`./images/meme-images/11.jpg`, 'politics'),
        _createImage(`./images/meme-images/12.jpg`, 'politics'),
        _createImage(`./images/meme-images/13.jpg`, 'politics'),
        _createImage(`./images/meme-images/14.jpg`, 'politics'),
        _createImage(`./images/meme-images/15.jpg`, 'politics'),
        _createImage(`./images/meme-images/16.jpg`, 'politics'),
        _createImage(`./images/meme-images/17.jpg`, 'politics'),
        _createImage(`./images/meme-images/18.jpg`, 'politics')
    ]
}



function setImg(imageId) {
    gMeme.selectedImgId = imageId;
    renderMeme();
}

function setLineTxt(memeTxt) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.txt = memeTxt;
}

function setColorTxt(memeClr) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
     memeLine.color = memeClr;
}

function setTxtSize(txtSize) {
    const memeLine = gMeme.lines[gMeme.selectedLineIdx]
    memeLine.size = txtSize;
}

function setLine() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx === 0) ? 1 : 0 ;
}

function getMemeForDisplay() {
    const meme = gMeme;
    return meme;
}

function getImgForDisplay() {
    const images = gImgs;
    return images;
}
