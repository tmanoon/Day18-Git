var gBallSize = 100
var gDiameterBall1 = 400
var gDiameterBall2 = 350
const ball1 = document.querySelector('.ball')
const ball2 = document.querySelector('.ball2')

function onBallClick(ball, maxDiameter) {
    const randSize = getRandomIntInclusive(20, 60)
    ball.style.backgroundColor = getRandomColor()

    if (gBallSize >= maxDiameter) {
        ball.style.width = 100 + 'px'
        ball.style.height = 100 + 'px'
        gBallSize = 100
        ball.innerText = gBallSize
        return
    }
    gBallSize += randSize
    ball.style.width = gBallSize + 'px'
    ball.style.height = gBallSize + 'px'
    ball.innerText = gBallSize
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