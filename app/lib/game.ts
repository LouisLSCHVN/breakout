// game.ts
import Canvas from './classes/canvas';
import Dot from './classes/dot';
import Racket from './classes/racket';
import BricksPark from './classes/bricksPark';
import Score from './classes/score';
import { COLORS, CANVAS } from './constant';

let canvas: Canvas;
let dot: Dot;
let racket: Racket;
let brickParks: BricksPark;

// game stats
export const score = ref(0)
export const death = ref(Score.getDeath())
export const fps = ref(0)
let lastFrameTime = performance.now();
function updateFps() {
    const now = performance.now();
    const deltaTime = now - lastFrameTime;
    lastFrameTime = now;

    fps.value = Math.round(1000 / deltaTime);
}


function startGame() {
    if (!process.client) return;

    canvas = new Canvas(CANVAS.id);
    canvas.setSize(CANVAS.width, CANVAS.height);

    dot = new Dot();

    racket = new Racket();
    racket.init(canvas.getCanvas());

    brickParks = new BricksPark();
    brickParks.draw();

    gameLoop();
}

function gameLoop() {
    canvas.setBackground(COLORS.background);

    updateFps()

    //Score.showScore(ctx);
    racket.move();
    dot.move();
    racket.checkDotLimit(dot);
    brickParks.draw();

    brickParks.bricks = brickParks.bricks.filter((brick) => {
        if (brick.checkDotLimit(dot)) {
            Score.incrementScore();
            score.value = Score.getScore()
            return false;
        }
        return true;
    });

    window.requestAnimationFrame(gameLoop);
}

export { startGame };
