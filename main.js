const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea');

start.addEventListener('click', startGame);

function startGame() {
    start.classList.add('hide');
}