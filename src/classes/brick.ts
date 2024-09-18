import { CANVAS, COLORS } from "../constant";
import Canvas from "./canvas";

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

}
