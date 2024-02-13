var size = 150

function onBallClick(ball) {
    if(ball.style.width === '400px') size = 100
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.innerText = ball.style.width
    size += 50
}