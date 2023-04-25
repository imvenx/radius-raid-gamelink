
function leftStick() {
    const leftRect = document.getElementById("leftRect")
    const cont = document.getElementById("leftGamepad")
    // const outerCircle = document.getElementById("outerCircleLeftGamepad")
    const innerCircle = document.getElementById("innerCircleLeftGamepad")

    let startX, startY

    leftRect.addEventListener('touchstart', (e) => {
        startX = currentX = e.targetTouches[0].clientX
        startY = currentY = e.targetTouches[0].clientY

        cont.style.transform = `translate(${startX}px, ${startY}px)`
    })
    leftRect.addEventListener('touchmove', (e) => {
        const x = e.targetTouches[0].clientX
        const y = e.targetTouches[0].clientY
        const diffX = x - startX
        const diffY = y - startY

        innerCircle.setAttribute('cx', diffX + 'px')
        innerCircle.setAttribute('cy', diffY + 'px')

        const angle = Math.atan2(diffY, diffX) * 180 / Math.PI + 180

        const dir = Math.floor((angle + 22) / 45)

        if (angle < 22.5 && angle > 337.5) socket.emit('moveLeft')
        else if (dir == 0) socket.emit('moveLeft')
        else if (dir == 1) socket.emit('moveLeftUp')
        else if (dir == 2) socket.emit('moveUp')
        else if (dir == 3) socket.emit('moveRightUp')
        else if (dir == 4) socket.emit('moveRight')
        else if (dir == 5) socket.emit('moveRightDown')
        else if (dir == 6) socket.emit('moveDown')
        else if (dir == 7) socket.emit('moveLeftDown')
        else if (dir == 8) socket.emit('moveLeft')

    })
    leftRect.addEventListener('touchend', (e) => {

        cont.style.transform = `translate(25%, 50%)`

        innerCircle.setAttribute('cx', '0')
        innerCircle.setAttribute('cy', '0')

        socket.emit('stopMoving')

    })
}
leftStick()

// const shootButton = document.getElementById("shootButton")
// shootButton.addEventListener("mousedown", ()=> {
//     socket.emit('shoot')
// })


function rightStick() {

    const rightRect = document.getElementById("rightRect")
    const cont = document.getElementById("rightGamepad")
    // const outerCircle = document.getElementById("outerCircleLeftGamepad")
    const innerCircle = document.getElementById("innerCircleRightGamepad")

    let startX, startY

    rightRect.addEventListener('touchstart', (e) => {
        startX = currentX = e.targetTouches[0].clientX
        startY = currentY = e.targetTouches[0].clientY

        cont.style.transform = `translate(${startX}px, ${startY}px)`
    })
    rightRect.addEventListener('touchmove', (e) => {
        const x = e.targetTouches[0].clientX
        const y = e.targetTouches[0].clientY
        const diffX = x - startX
        const diffY = y - startY

        innerCircle.setAttribute('cx', diffX + 'px')
        innerCircle.setAttribute('cy', diffY + 'px')

        const angle = Math.atan2(diffY, diffX) * 180 / Math.PI + 180

        socket.emit('rotate', {x: diffX * 1000, y: diffY * 1000})
        // const dir = Math.floor((angle + 22) / 45)

    })
    rightRect.addEventListener('touchend', (e) => {

        cont.style.transform = `translate(75%, 50%)`

        innerCircle.setAttribute('cx', '0')
        innerCircle.setAttribute('cy', '0')

    })
}
rightStick()

// let debugConsole = document.createElement('div');
// debugConsole.style.cssText = 'position:absolute;color:green;top:0;left:0:right:0:bottom:0';
// document.body.appendChild(debugConsole);