'use strict'

function openMyMemes() {
    document.querySelector('.memes-section').style.display = 'flex'
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'none'

    renderMyMemes()
}

function renderMyMemes() {
    var myMemes = loadFromStorage(STORAGE_KEY)
    
    var strHtmls = myMemes.map(myMeme => {
        return `<img class="meme-img" src="${myMeme.img}">`
    })

    document.querySelector('.my-memes-gallery').innerHTML = strHtmls.join('');
}