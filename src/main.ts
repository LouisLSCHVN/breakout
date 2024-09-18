import './assets/css/index.css';
import Canvas from './classes/canvas';
import Dot from './classes/dot';
import Racket from './classes/racket';
import { COLORS, CANVAS } from './constant';

console.log('Hello World!');

const canvas = new Canvas('breakout');
canvas.setSize(CANVAS.width, CANVAS.height)

const ctx = canvas.get2dCtx();
const dot = new Dot(ctx);

const racket = new Racket(ctx);
racket.init(canvas.getCanvas());

function startGame() {
   canvas.setBackground(COLORS.background);

<<<<<<< Updated upstream
   racket.move()
   dot.move()

   window.requestAnimationFrame(() => startGame())
}
startGame()
=======

// 14
// faut une boucle 14 et chaque x = 12/ canva width

const drawBricksRed = () => {
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'red';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 50, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'red';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 80, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
}

const drawBricksOrange = () => {
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'orange';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 110, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'orange';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 140, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
}

const drawBricksGreen = () => {
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 170, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 200, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
}

const drawBricksYellow = () => {
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 230, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
    for (let i = 0; i < 12; i++) {
        ctx.fillStyle = 'yellow';
        ctx.fillRect((i * 20 - (-8)) / canva.getWidth() * 1000, 260, 30, 20);
        console.log((i * 20 - 10) / canva.getWidth() * 1000)
    }
}

drawBricksRed()
drawBricksOrange()
drawBricksGreen()
drawBricksYellow()
>>>>>>> Stashed changes
