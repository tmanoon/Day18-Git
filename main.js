var gBallSize = 100

function onBallClick(ball) {
    const randSize = getRandomIntInclusive(20, 60)
    if (ball.style.width >= '400px') {
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
