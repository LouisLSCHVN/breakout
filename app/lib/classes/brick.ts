import { CANVAS, COLORS } from "../constant";
import Canvas from "./canvas";
import Dot from "./dot";

export default class Brick extends Canvas {
    public width: number = 30;
    public height: number = 20;
    public color: string = COLORS.bricks;
    public x: number = 0;
    private y: number = 0;

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
            dot.dy = -dot.dy; // Inverser la direction de la balle
            return true; // Collision détectée
        }
        return false; // Pas de collision
    }

}
