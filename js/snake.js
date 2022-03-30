const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const grid = 16;

let snake = [];
let dir = "";

snake[0] = {
    x : 2 * grid,
    y : 2 * grid
}

let apple = {
    x : Math.floor(Math.random()*canvas.width / grid) * grid,
    y : Math.floor(Math.random()*canvas.height / grid) * grid
}

window.onload = () => {
    setInterval(game, 150);
}

function game() {
    ai();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "white";
        ctx.fillRect(snake[i].x, snake[i].y, grid, grid);
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (dir == "left")  { snakeX -= grid; }
    if (dir == "right") { snakeX += grid; }
    if (dir == "up")    { snakeY -= grid; }
    if (dir == "down")  { snakeY += grid; }

    if (snake[0].x == apple.x && snake[0].y == apple.y) {
        apple = {
            x : Math.floor(Math.random()*canvas.width / grid) * grid,
            y : Math.floor(Math.random()*canvas.height / grid) * grid
        }
    } else {
        snake.pop();
    }

    let newHead = {
        x : snakeX,
        y : snakeY
    }

    snake.unshift(newHead);
    
    ctx.fillStyle = "red";
    ctx.fillRect(apple.x, apple.y, grid, grid);

    ctx.fillStyle = "white";
    ctx.font = "24px serif";
    ctx.fillText('stupid ai', 24, 24);

}

function ai() {
    if (snake[0].x > apple.x) {
        dir = "left";
    } else if (snake[0].x < apple.x) {
        dir = "right";
    } else if (snake[0].y > apple.y) {
        dir = "up";
    } else if (snake[0].y < apple.y) {
        dir = "down";
    }
}