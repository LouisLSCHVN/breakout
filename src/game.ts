import './assets/css/index.css';
import Canvas from './classes/canvas';
import Dot from './classes/dot';
import Racket from './classes/racket';
import BricksPark from './classes/bricksPark';
import Score from './classes/score';
import { COLORS, CANVAS, BRICKS, Color } from './constant';

console.log('Hello World!');

const canvas = new Canvas(CANVAS.id);
canvas.setSize(CANVAS.width, CANVAS.height)

const dot = new Dot();

const racket = new Racket();
racket.init(canvas.getCanvas());

const brickParks = new BricksPark()
brickParks.draw();
const ctx = canvas.get2dCtx();



function startGame() {
   canvas.setBackground(COLORS.background);

   Score.showScore(ctx)
   racket.move()
   dot.move()
   racket.checkDotLimit(dot)
   brickParks.draw()

   brickParks.bricks = brickParks.bricks.filter((brick) => {
      if (brick.checkDotLimit(dot)) {
         Score.incrementScore()
         brick.SpeedBall(dot)
          return false;
      }
      return true; // Conserver la brique sinon
  });

  

   window.requestAnimationFrame(() => startGame())
}

export { startGame };