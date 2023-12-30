document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game');
    const scoreElement = document.getElementById('score');
    let score = 0;

    function createRandomSquare() {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.left = `${Math.random() * 250}px`;
        square.style.top = `${Math.random() * 250}px`;

        square.addEventListener('click', () => {
            score++;
            scoreElement.textContent = `Score: ${score}`;
            gameContainer.removeChild(square);
            createRandomSquare();
        });

        gameContainer.appendChild(square);
    }

    setInterval(createRandomSquare, 1000);
});
