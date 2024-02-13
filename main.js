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