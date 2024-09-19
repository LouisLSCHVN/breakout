import { CANVAS, COLORS, DOT } from "../constant";
import Canvas from "./canvas";
import Dot from "./dot";

export default class Brick extends Canvas {
    public width: number = 30;
    public height: number = 20;
    public color: string = COLORS.bricks;
    public x: number = 0;
    private y: number = 0;

    private static firstGreenHit: boolean = false;
    private static firstOrangeHit: boolean = false;
    private static firstRedHit: boolean = false;


    constructor(
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        color?: string,
    ) {
        super(CANVAS.id);
        if(x) this.x = x;
        if(y) this.y = y;
        if(width) this.width = width;
        if(height) this.height = height;
        if(color) this.color = color;
    }

    public draw(): void {
        this._ctx.beginPath();
        this._ctx.rect(this.x, this.y, this.width, this.height);
        this._ctx.fillStyle = this.color;
        this._ctx.fill();
    }

    public checkDotLimit(dot: Dot): boolean {
        const brickLeft = this.x;
        const brickRight = this.x + this.width;
        const brickTop = this.y;
        const brickBottom = this.y + this.height;

        const ballLeft = dot.x - dot.radius;
        const ballRight = dot.x + dot.radius;
        const ballTop = dot.y - dot.radius;
        const ballBottom = dot.y + dot.radius;

        if (
            ballRight > brickLeft &&
            ballLeft < brickRight &&
            ballBottom > brickTop &&
            ballTop < brickBottom
        ) {
            return true; // Collision détectée
        }
        return false; // Pas de collision
    }

    // Code de GABIN
    public speedBall(dot: Dot): void {
        if (this.checkDotLimit(dot)) {
            switch (this.color) {
                case 'green':
                    if (!Brick.firstGreenHit) {// Augmente la vitesse pour la première brique verte
                        dot.dx  = DOT.speed[0]!;
                        dot.dy = DOT.speed[0]!;
                        dot.dy = -dot.dy;
                        Brick.firstGreenHit = true;
                    }
                    break;
                case 'orange':
                    if (!Brick.firstOrangeHit) {// Augmente la vitesse pour la première brique orange
                        dot.dx = DOT.speed[1]!;
                        dot.dy = DOT.speed[1]!;
                        dot.dy = -dot.dy;
                        Brick.firstOrangeHit = true;
                    }
                    break;
                case 'red':
                    if (!Brick.firstRedHit) {// Augmente la vitesse pour la première brique rouge
                        dot.dx = DOT.speed[2]!;
                        dot.dy = DOT.speed[2]!;
                        dot.dy = -dot.dy;
                        Brick.firstRedHit = true;
                    }
                    break;
            }
            dot.dy = -dot.dy; // Inverser la direction de la balle
        }
    }

    public static resetFirstHit(): void {
        Brick.firstGreenHit = false;
        Brick.firstOrangeHit = false;
        Brick.firstRedHit = false;
    }
}
