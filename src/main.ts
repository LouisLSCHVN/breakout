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

   racket.move()
   dot.move()

   window.requestAnimationFrame(() => startGame())
}
startGame()