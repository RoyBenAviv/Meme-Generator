'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomTxt() {
    const words = ['Falafel?', 'WTF BRO!', 'Are you joking?',
        'Pinguin', 'JESUS CHRIST', 'MAKARONI!', 'Bamba!', 'TEST ME!',
        'Absolutly', 'Television..', 'Banana', 'Freaking bad', 'UNLUCKY.', 'Nice',
        'Not today.', 'WDYM?', 'Are you real?', 'THAT IS NOT GOOD', 'REALL BAD',
        'R U DRUNK?', 'SUSPICIOUS', 'NO WAY LOL', 'IM THE BOSS', 'Dance.', 'Chicken Dinner', 'Everywhere...'];

    var idx = getRandomInt(0, words.length - 1);
    var randomWord = words[idx];
    return randomWord;
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }