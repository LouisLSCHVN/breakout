export default class Canva {
    private _canva: HTMLCanvasElement;

    constructor(id: string) {
        const element = document.getElementById(id);
        if (!(element instanceof HTMLCanvasElement)) {
            throw new Error(`Element with id ${id} is not a canvas element or does not exist.`);
        }
        this._canva = element;
    }

    public getCtx(): CanvasRenderingContext2D {
        const context = this._canva.getContext('2d');
        if (!context) {
            throw new Error('Unable to get 2D context from canvas.');
        }
        return context;
    }

    public getWidth(): number {
        return this._canva.width;
    }

    public getHeight(): number {
        return this._canva.height;
    }
}