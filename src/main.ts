import './assets/css/index.css';
import Canvas from './classes/canvas';
import Dot from './classes/dot';
import Racket from './classes/racket';
import BricksPark from './classes/bricksPark';
import Brick from './classes/brick';
import { COLORS, CANVAS, BRICKS, Color } from './constant';

console.log('Hello World!');

const canvas = new Canvas(CANVAS.id);
canvas.setSize(CANVAS.width, CANVAS.height)

const dot = new Dot();

const racket = new Racket();
racket.init(canvas.getCanvas());

const drawBricks = () => {
   const brickParks = new BricksPark()
   function createLines(color: Color, index: number) {
      const margin = CANVAS.width * BRICKS.marginRatio / (BRICKS.perLine + 1);
      const width = (CANVAS.width - CANVAS.width * BRICKS.marginRatio) / BRICKS.perLine;
      for (let i = 0; i < BRICKS.perLine; i++) {
         const y = index * (BRICKS.height + margin) + margin;
         const x = margin + i * (width + margin);
         const brick = new Brick(x, y, width, BRICKS.height, color)
         brick.draw();
         brickParks.push(brick)
      }
   }

   BRICKS.colors.forEach((color, index) => createLines(color, index))
}

function startGame() {
   canvas.setBackground(COLORS.background);

   drawBricks()
   racket.move()
   dot.move()
   racket.checkDotLimit(dot)

   window.requestAnimationFrame(() => startGame())
}
startGame()
