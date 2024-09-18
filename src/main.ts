import './assets/css/index.css';
import Canvas from './classes/canvas';
import Dot from './classes/dot';
import Racket from './classes/racket';
import { COLORS, CANVAS, BRICKS, Color } from './constant';

console.log('Hello World!');

const canvas = new Canvas(CANVAS.id);
canvas.setSize(CANVAS.width, CANVAS.height)

const ctx = canvas.get2dCtx();
const dot = new Dot();

const racket = new Racket();
racket.init(canvas.getCanvas());

const drawBricks = () => {
   function createLine(color: Color, index: number) {
      for (let i = 0; i < BRICKS.perLine; i++) {
         //new Brick(ctx, color, i * 30, index * 20).draw()
      }
   }

   BRICKS.colors.forEach((color, index) => createLine(color, index))
}

function startGame() {
   canvas.setBackground(COLORS.background);

   drawBricks()
   racket.move()
   dot.move()

   window.requestAnimationFrame(() => startGame())
}
startGame()
