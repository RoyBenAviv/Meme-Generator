'use strict'

var gImgs = [
    {id: 1, url: `./images/meme-images/1.jpg`},
    {id: 2, url: `./images/meme-images/2.jpg`},
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
    txt: '',
    size: 50,
    align: 'left',
    color: 'white'
    }]
}

function setImg(imageId) {
    gMeme.selectedImgId = imageId
    renderMeme()
}

function setLineTxt(memeTxt) {
    return gMeme.lines[0].txt = memeTxt
}

function setColorTxt(memeClr) {
    return gMeme.lines[0].color = memeClr
}

function setTxtSize(txtSize) {
    return gMeme.lines[0].size = txtSize
}

function getCurrLineIdx() {
    return gMeme.selectedLineIdx
}

function getMemeForDisplay() {
    const meme = gMeme;
    return meme
}

function getImgForDisplay() {
    const images = gImgs
    return images
}
