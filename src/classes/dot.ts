export default class Dot {
    private ctx: CanvasRenderingContext2D;

    public x: number = 0;
    public y: number = 0;
    public radius: number = 0;
    public color: string = '';
    public height: number = 0;
    public width: number = 0;

    constructor(
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        height: number,
        width: number,
        radius: number,
        color: string
    ) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.radius = radius;
        this.color = color;
    }

    public draw(): void {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    public move(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.draw();
    }
}