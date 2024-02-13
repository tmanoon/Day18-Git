var gBallSize = 100

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
