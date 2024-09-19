// game.ts
import Canvas from './classes/canvas';
import Dot from './classes/dot';
import Racket from './classes/racket';
import BricksPark from './classes/bricksPark';
import Score from './classes/score';
import { COLORS } from './constant';
import { ref } from 'vue';
import Brick from "~/lib/classes/brick";

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

let level: number

function startGame() {
    if (!process.client) return;

    level = 0

    Score.reset();
    score.value = 0;
    death.value = Score.getDeath();

    canvas = new Canvas("breakout");
    canvas.setSize(canvas.getCanvas().width, canvas.getCanvas().height);

    dot = new Dot();
    dot.setLevel(level);

    racket = new Racket();
    racket.init(canvas.getCanvas());

    brickParks = new BricksPark();
    brickParks.draw();

    gameLoop();
}

function gameLoop() {
    // Effacer le canvas et redessiner le fond
    canvas.setBackground(COLORS.background);
    updateFps()

    if(!death.value) return

    // Déplacer et dessiner la raquette
    racket.move();

    // Déplacer et dessiner la balle avec gestion des collisions
    dot.move(racket);

    // Dessiner les briques
    brickParks.draw();

    // Gérer les collisions avec les briques
    brickParks.bricks = brickParks.bricks.filter((brick) => {
        if (brick.checkDotLimit(dot)) {
            Score.incrementScore();
            score.value = Score.getScore()
            brick.speedBall(dot)
            return false;
        }
        return true;
    });

    if(brickParks.bricks.length === 0 && dot.y > (canvas.getCanvas().height / 2)) {
        level++;
        brickParks.init();
        dot.setLevel(level);
        Brick.resetFirstHit();
    }

    window.requestAnimationFrame(gameLoop);
}

export { startGame };
