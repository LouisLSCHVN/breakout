import { BRICKS, CANVAS, type Color } from "../constant";
import Brick from "./brick";
import Canvas from "~/lib/classes/canvas";

export default class BricksPark extends Canvas {
    public bricks: Brick[] = [];

    constructor() {
        super("breakout")
        this.init(); // Initialiser les briques lors de la création de l'objet
    }

    public init() {
        const createLines = (color: Color, index: number) => {
            const margin = this._canvas.width * BRICKS.marginRatio / (BRICKS.perLine + 1);
            const width = (this._canvas.width - this._canvas.width * BRICKS.marginRatio) / BRICKS.perLine;
            for (let i = 0; i < BRICKS.perLine; i++) {
                const y = index * (BRICKS.height + margin) + margin;
                const x = margin + i * (width + margin);
                const brick = new Brick(x, y, width, BRICKS.height, color);
                this.bricks.push(brick);
            }
        };

        BRICKS.colors.forEach((color, index) => createLines(color, index));
    }

    public draw() {
        this.bricks.forEach((brick) => brick.draw());
    }

    public get() {
        return this.bricks;
    }
}
