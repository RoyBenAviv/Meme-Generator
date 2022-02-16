'use strict';

function init() {
    renderGallery();
}

function renderGallery() {
    var images = getImgForDisplay();
    var strHtmls = images.map(image => {
        return `
        <div style="position: relative;"> 
        <img onclick="onImgSelect(${image.id})" class="meme-img" src="${image.url}">
        <div class="genre">Genre: ${image.keywords}</div>
        </div>

        `;
    });
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('');
}

function onImgSelect(imageId) {
    document.querySelector('.gallery').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
    setImg(imageId)
}