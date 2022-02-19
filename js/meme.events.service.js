'use strict'

var gIsDrag = false
var gStartPos

function addMouseListeners() {
    gCanvas.addEventListener('mousemove', onMove)
    gCanvas.addEventListener('mousedown', onDown)
    gCanvas.addEventListener('mouseup', onUp)
}

function onDown(ev) {
    const pos = getEvPos(ev)
    if (!isLineClicked(pos)) return
    setLineDrag(true)
    gStartPos = pos
    document.querySelector('#my-canvas').style.cursor = 'grabbing'

}

function onMove(ev) {
    const memeLine = getMemeLine()
    if(memeLine.isDrag) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        moveLine(dx, dy)
        gStartPos = pos
        renderMeme();
    }
}

function onUp() {
    setLineDrag(false)
    document.querySelector('#my-canvas').style.cursor = 'grab'
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // if (gTouchEvs.includes(ev.type)) {
        ev.preventDefault()
        // ev = ev.changedTouches[0]
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        // }
    }
    return pos
}

function isLineClicked(clickedPos) {
    const memeLine = getMemeLine()
        var xStart = memeLine.posX;
        var xEnd = gCtx.measureText(memeLine.txt).width + memeLine.posX;
        var yStart = memeLine.posY;
        var yEnd = memeLine.posY - memeLine.size;
        return (clickedPos.x <= xEnd && clickedPos.x >= xStart && clickedPos.y <= yStart && clickedPos.y >= yEnd)
}

function setLineDrag(isDrag) {
    const memeLine = getMemeLine()
    memeLine.isDrag = isDrag
}

function moveLine(dx, dy) {
    const memeLine = getMemeLine()
    memeLine.posX += dx
    memeLine.posY += dy
}