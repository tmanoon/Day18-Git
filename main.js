var size = 150

function onBallClick(ball) {
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.innerText = ball.style.width
    size += 50
}