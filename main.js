'use strict'

var gDefaultBallSize = 100
var gBall1Size = 100
var gBall2Size = 100
var currBall
var gDiameterBall1 = 400
var gDiameterBall2 = 350
const ball1 = document.querySelector('.ball')
const ball2 = document.querySelector('.ball2')
var counterOfSecs = 0
var gIdOfHandlersInterval
var gIdOfSecondsInterval

function onBallClick(ball, maxDiameter) {
    const randSize = getRandomIntInclusive(20, 60)
    ball.style.backgroundColor = getRandomColor()
    if (ball.classList.contains('ball')) {
        gBall1Size += randSize
        if (gBall1Size >= maxDiameter) {
            gBall1Size = gDefaultBallSize
            ball.style.width = gBall1Size + 'px'
            ball.style.height = gBall1Size + 'px'
            ball.innerText = gDefaultBallSize
            return
        }
        ball.style.width = gBall1Size + 'px'
        ball.style.height = gBall1Size + 'px'
        ball.innerText = gBall1Size
    } else {
        gBall2Size += randSize
            if (gBall2Size >= maxDiameter) {
                gBall2Size = gDefaultBallSize
                ball.style.width = gBall2Size + 'px'
                ball.style.height = gBall2Size + 'px'
                ball.innerText = gDefaultBallSize
                return
            }
            ball.style.width = gBall2Size + 'px'
            ball.style.height = gBall2Size + 'px'
            ball.innerText = gBall2Size
    }
}

function changeTwoBalls() {
    const currBall1Size = window.getComputedStyle(ball1).width
    const currBall2Size = window.getComputedStyle(ball2).width
    const currBall1Color = window.getComputedStyle(ball1).backgroundColor
    const currBall2Color = window.getComputedStyle(ball2).backgroundColor
    const ball1InnerT = ball1.innerText
    const ball2InnerT = ball2.innerText
    ball1.style.backgroundColor = currBall2Color
    ball2.style.backgroundColor = currBall1Color
    ball1.style.width = currBall2Size
    ball1.style.height = currBall2Size
    ball2.style.width = currBall1Size
    ball2.style.height = currBall1Size
    ball2.innerText = ball1InnerT
    ball1.innerText = ball2InnerT
}

function reduceDiameters() {
    gDiameterBall1 -= getRandomIntInclusive(20, 60)
    gDiameterBall2 -= getRandomIntInclusive(20, 60)

    if (gDiameterBall1 < 100 && gDiameterBall2 < 100) {
        gDiameterBall1 = 100
        gDiameterBall2 = 100
        return alert(`The balls' diameter are 100px now. I cannot do anything.`)
    }
    else if (gDiameterBall1 < 100) {
        gDiameterBall1 = 100
        gDiameterBall2 -= getRandomIntInclusive(20, 60)
        ball2.onclick = onBallClick(ball2, gDiameterBall2)
        alert(`The first ball's diameter had reached its minimum limit. The second ball's diameter has just changed to ${gDiameterBall2}. `)
        return
    } else if (gDiameterBall2 < 100) {
        gDiameterBall2 = 100
        gDiameterBall1 -= getRandomIntInclusive(20, 60)
        ball1.onclick = onBallClick(ball1, gDiameterBall1)
        alert(`The second ball's diameter had reached its minimum limit. The first ball's diameter has just changed to ${gDiameterBall1}. `)
        return
    }

    ball2.onclick = onBallClick(ball2, gDiameterBall2)
    ball1.onclick = onBallClick(ball1, gDiameterBall1)
    alert(`The new diameter of ball 1 is: ${gDiameterBall1} and the new diameter of ball 2 is: ${gDiameterBall2}`)
}

function randomBgColor() {
    const body = document.querySelector('body')
    body.style.backgroundColor = getRandomColor()
}

function returnToOriginalGame() {
    gBallSize = 100
    gDiameterBall1 = 400
    gDiameterBall2 = 350
    const body = document.querySelector('body')
    body.style.backgroundColor = 'black'
    ball1.style.backgroundColor = 'rgb(253, 245, 234)'
    ball2.style.backgroundColor = 'rgb(143, 200, 0)'
    ball1.style.width = gBallSize + 'px'
    ball1.style.height = gBallSize + 'px'
    ball2.style.width = gBallSize + 'px'
    ball2.style.height = gBallSize + 'px'
}

/* Whenthesixthballishoveredoverformorethan2seconds,anintervalwillstart
to run the mouse-click handlers of the first four balls every 2 seconds.
6. Theintervalwillbeclearedwhenthemousecursorleavestheballorafter10
cycles. */

function countTimeOfHover() {
    gIdOfSecondsInterval = setInterval(function () {
        if (counterOfSecs === 2) {
            clearInterval(gIdOfSecondsInterval)
            playHandlers()
        }
        console.log(counterOfSecs)
        counterOfSecs++
    }, 1000)
}

function endTimeOfHovering() {
    counterOfSecs = 0
    clearInterval(gIdOfSecondsInterval)
    clearInterval(gIdOfHandlersInterval)
}

function checkForSecs() {
    if (mouseOut - mouseEnter > 2000) playHandlers()
    else return
}

function playHandlers() {
    if (gIdOfHandlersInterval) clearInterval(gIdOfHandlersInterval)
    var counter = 0
    gIdOfHandlersInterval = setInterval(function () {
        if (counter === 10) clearInterval(gIdOfHandlersInterval)
        onBallClick(ball1, gDiameterBall1)
        onBallClick(ball2, gDiameterBall2)
        changeTwoBalls()
        reduceDiameters()
        counter++
    }, 3500)
}
