'use strict';

function init() {
    renderGallery();
}

function renderGallery() {
    var images = getImgForDisplay();
    console.log(images);
    var strHtmls = images.map(image => {
        return `
        <img onclick="onImgSelect(${image.id})" class="meme-img" src="${image.url}">
        `;
    });
    document.querySelector('.gallery-images').innerHTML = strHtmls.join('');
}

function onImgSelect(imageId) {
    document.querySelector('.gallery-images').style.display = 'none'
    document.querySelector('.editor').style.display = 'flex'
    setImg(imageId)
}