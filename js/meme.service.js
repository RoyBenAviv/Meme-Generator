'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
    txt: '',
    size: 20,
    align: 'left',
    color: 'red'
    }]
}

function updateText(memeTxt) {
    return gMeme.lines[0].txt = memeTxt
}

function getMemeForDisplay() {
    const meme = gMeme;

    return meme
}
