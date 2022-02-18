'use strict';

function init() {
    renderGallery();
    initCanvas()
}

function renderGallery() {
    var images = getImgs();
    var strHtmls = images.map(image => {
        return `
        <div style="position: relative;"> 
        <img style="position: relative;" class="meme-img" src="${image.url}">
        <div class="genre">Genre: ${image.keywords}</div>
        </div>`;
    });
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('');
}

function onSearchGenre(value) {
    filterImage(value)
    renderGallery();
}

function getRandomImg() {
    var images = getImgForDisplay();

    var idx = getRandomInt(0, images.length - 1);
    var drawnImage = images[idx];
    return drawnImage
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function onImgSelect(imageId) {
    switchSections()
    setImg(imageId)
}

function onRandomMeme() {
    switchSections()
    const drawnImage = getRandomImg()
    setImg(drawnImage.id)
}


function switchSections() {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
    document.querySelector('.canvas-bg').style.opacity = '0.5'
    document.querySelector('.nav-gallery').style.display = 'none'
    document.querySelector('.nav-canvas').style.display = 'flex'
}