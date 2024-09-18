export default class Canvas {
    protected _canvas: HTMLCanvasElement;
    protected _ctx: CanvasRenderingContext2D;

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!(element instanceof HTMLCanvasElement)) {
            throw new Error(`Element with id ${id} is not a canvas element or does not exist.`);
        }
        this._canvas = element;
        const context = this._canvas.getContext('2d');
        if (!context) {
            throw new Error('Unable to get 2D context from canvas.');
        }
        this._ctx = context;
    }

    public getCanvas(): HTMLCanvasElement {
        return this._canvas;
    }

    public get2dCtx(): CanvasRenderingContext2D {
        const context = this._canvas.getContext('2d');
        if (!context) {
            throw new Error('Unable to get 2D context from canvas.');
        }
        return context;
    }

    public getWidth(): number {
        return this._canvas.width;
    }

    public getHeight(): number {
        return this._canvas.height;
    }

    public setBackground(color: string): void {
        const ctx = this.get2dCtx();
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, this.getWidth(), this.getHeight());
    }

    public setSize(width: number, height: number): void {
        this._canvas.width = width;
        this._canvas.height = height;
    }
}