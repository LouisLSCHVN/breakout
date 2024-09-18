/**
 * Alors, pour la racket, on initialise x en divisant la largeur de la page par 2 puis en enlevant la moitié de la largeur de la racket, pour vraiment la centrer au début
 * Ensuite Y, c'est simplement 10% du bottom, si vous voulez ajuster, changer simplement le 10 en ce que vous voulez.
 *
 */

import { CANVAS, COLORS, KEYPRESS_SPEED } from "../constant";
import Canvas from "./canvas";
import Dot from "./dot";

export default class Racket extends Canvas {
    public width: number = 100;
    public height: number = 10;
    public x: number = (CANVAS.width / 2) - (this.width / 2);
    private y: number = CANVAS.height - 10 * CANVAS.height / 100;
    public color: string = COLORS.racket;

    /**
     *  C'est un peu de l'optimisation pour les flèches, sinon l'UX est terrible
     *  Mais en gros
     * @private
     * @type {(boolean | null)}
     * @memberof Racket
     */
    private keyDirection: number = 0; // -1 pour gauche, 0 pour arrêt, 1 pour droite

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

    /**
     * Initialisation de la racket
     * On ajoute les listeners pour les flèches et la souris
     * On dessine la racket
     *
     * @param {HTMLCanvasElement} canvas
     * @memberof Racket
     */
    public init(canvas: HTMLCanvasElement): void {
        this.setMouseListener(canvas)
        this.setKeyListeners()
        this.draw()
    }

    public draw(): void {
        this._ctx.beginPath();
        this._ctx.rect(this.x, this.y, this.width, this.height);
        this._ctx.fillStyle = this.color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    /**
     * On bouge la racket en fonction de la direction des flèches
     * On vérifie que la racket ne sorte pas de l'écran
     * On dessine la racket
     *
     * @memberof Racket
     */
    public move(): void {
        this.x += KEYPRESS_SPEED * this.keyDirection;
        this.x = this.getMaxX()
        this.draw();
    }

    /**
     * Fait en sorte que la racket ne dépasse pas du cadre
     *
     * @return {*}  {number}
     * @memberof Racket
     */
    public getMaxX(): number {
        return Math.max(0, Math.min(this.x, CANVAS.width - this.width));
    }

    private setMouseListener(canvas: HTMLCanvasElement): void {
        canvas.addEventListener('mousemove', (e) => {
            e.preventDefault()
            const rect = canvas.getBoundingClientRect();
            this.x = e.clientX - rect.left - this.width / 2;
            this.x = this.getMaxX()
        });
    }

    private setKeyListeners(): void {
        window.addEventListener('keydown', (e) => {
            if(e.key === 'ArrowRight') {
                this.keyDirection = 1;
            } else if(e.key === 'ArrowLeft') {
                this.keyDirection = -1;
            }
        });

        window.addEventListener('keyup', (e) => {
            if(e.key === 'ArrowRight' && this.keyDirection === 1) {
                this.keyDirection = 0;
            } else if(e.key === 'ArrowLeft' && this.keyDirection === -1) {
                this.keyDirection = 0;
            }
        });
    }

    public checkDotLimit(dot: Dot): void {
        const racketLeft = this.x;
        const racketRight = this.x + this.width;
        const racketTop = this.y;
        const racketBottom = this.y + this.height;

        const ballLeft = dot.x - dot.radius;
        const ballRight = dot.x + dot.radius;
        const ballTop = dot.y - dot.radius;
        const ballBottom = dot.y + dot.radius;

        if (
            ballRight > racketLeft &&
            ballLeft < racketRight &&
            ballBottom > racketTop &&
            ballTop < racketBottom
        ) {
            dot.dy = -dot.dy;
        }
    }
}