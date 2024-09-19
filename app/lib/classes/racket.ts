// Racket.ts
import { CANVAS, COLORS, KEYPRESS_SPEED } from "../constant";
import Canvas from "./canvas";
import Dot from "./dot";

export default class Racket extends Canvas {
    public width: number = 100;
    public height: number = 10;
    public x: number = (CANVAS.width / 2) - (this.width / 2);
    private y: number = CANVAS.height - (10 * CANVAS.height / 100);
    public color: string = COLORS.racket;

    private keyDirection: number = 0; // -1 pour gauche, 0 pour arrêt, 1 pour droite

    constructor(
        x?: number,
        y?: number,
        width?: number,
        height?: number,
        color?: string,
    ) {
        super(CANVAS.id);
        if (x) this.x = x;
        if (y) this.y = y;
        if (width) this.width = width;
        if (height) this.height = height;
        if (color) this.color = color;
    }

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

    public move(): void {
        this.x += KEYPRESS_SPEED * this.keyDirection;
        this.x = this.getMaxX()
        this.draw();
    }

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
            if (e.key === 'ArrowRight') {
                this.keyDirection = 1;
            } else if (e.key === 'ArrowLeft') {
                this.keyDirection = -1;
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowRight' && this.keyDirection === 1) {
                this.keyDirection = 0;
            } else if (e.key === 'ArrowLeft' && this.keyDirection === -1) {
                this.keyDirection = 0;
            }
        });
    }

    public checkDotLimit(dot: Dot): void {
        const racketLeft = this.x;
        const racketRight = this.x + this.width;
        const racketCenter = this.x + this.width / 2;
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
            // Calculer la position relative du contact (-1 à 1)
            const relativeIntersectX = (dot.x - racketCenter) / (this.width / 2);
            const maxBounceAngle = 60; // en degrés

            // Limiter la valeur de relativeIntersectX entre -1 et 1
            const clampedRelativeIntersectX = Math.max(-1, Math.min(relativeIntersectX, 1));

            // Calculer l'angle de rebond en radians
            const bounceAngle = clampedRelativeIntersectX * (maxBounceAngle * Math.PI / 180);

            // Conserver la vitesse actuelle de la balle
            const speed = Math.sqrt(dot.dx * dot.dx + dot.dy * dot.dy);

            // Calculer les nouvelles composantes directionnelles
            const directionX = Math.sin(bounceAngle);
            const directionY = -Math.cos(bounceAngle); // Toujours vers le haut

            // Appliquer la direction tout en conservant la vitesse constante
            dot.dx = speed * directionX;
            dot.dy = speed * directionY;

            // Positionner la balle juste au-dessus de la raquette pour éviter collision multiple
            dot.y = this.y - dot.radius;

        }
    }
}
