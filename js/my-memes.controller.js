'use strict'

var gMyMemes = loadFromStorage(STORAGE_KEY)

function openMyMemes() {
    document.querySelector('.memes-section').style.display = 'flex'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'none'
    document.querySelector('.nav-my-memes').style.display = 'flex'
    document.querySelector('.nav-gallery').style.display = 'none'
    document.querySelector('.nav-canvas').style.display = 'none'

    renderMyMemes()
}

function renderMyMemes() {
    var memeIdx = 0
    
    var strHtmls = gMyMemes.map(myMeme => {
        return `<img onclick="onSavedMeme(${memeIdx++})" class="meme-img" src="${myMeme.img}">`
    })

    document.querySelector('.my-memes-gallery').innerHTML = strHtmls.join('');
}

function onSavedMeme(memeIdx) {
    switchSections()
    setSavedMeme(gMyMemes[memeIdx])
}