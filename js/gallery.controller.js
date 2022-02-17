'use strict';

function init() {
    renderGallery();
    initCanvas()
}

function renderGallery() {
    var images = getImgForDisplay();
    var strHtmls = images.map(image => {
        return `
        <div onclick="onImgSelect(${image.id})" style="position: relative;"> 
        <img class="meme-img" src="${image.url}">
        <div class="genre">Genre: ${image.keywords}</div>
        </div>`;
    });
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('');
}

function onImgSelect(imageId) {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
    document.querySelector('.canvas-bg').style.opacity = '0.5'
    document.querySelector('.nav-gallery').style.display = 'none'
    document.querySelector('.nav-canvas').style.display = 'flex'
    setImg(imageId)
}