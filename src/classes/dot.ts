/**
 * Au final on va faire les commentaires en français:
 *
 * - Déjà, j'ai enlevé width et height parce qu'au final on se sert que de radius pour définir la taille de la Dot
 * - Ensuite, j'ai ajouté la méthode checkCollision mais elle fonctionne que pour les bordures pour le moment.
 * - Ce qui est pratique c'est qu'on peut faire spawn une balle ou on veut et quand on veut (pour les bonus)
 * - Aussi, j'ai choisi d'utiliser dx et dy pour la vitesse de la balle au lieu de x et y pour la position, plus simple
 *
 * Les méthodes a utiliser :
 * - Déjà pour ajouter une balle c'est new Dot(ctx, x, y, radius, color)
 * - Ensuite, par défault, la balle va apparaître toujours sur le même y mais simplement changer de x (aléatoire)
 */

import { CANVAS, COLORS } from "../constant";

export default class Dot {
    private ctx: CanvasRenderingContext2D;

    public x: number = Math.random() * CANVAS.width;
    public y: number = CANVAS.width / 2;
    public radius: number = 5;
    public color: string = COLORS.dot;
    public dx: number = 1.5;
    public dy: number = 1.5;

    constructor(
        ctx: CanvasRenderingContext2D,
        radius?: number,
        color?: string,
        x?: number,
        y?: number,
    ) {
        this.ctx = ctx;
        if(radius) this.radius = radius;
        if(color) this.color = color;
        if(x) this.x = x;
        if(y) this.y = y;
    }

    public draw(): void {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    /**
     * Check for collision
     * Move the dot
     * Draw the dot
     *
     * @memberof Dot
     * @returns {void}
     */
    public move(): void {
        this.checkCollision();
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

    public checkCollision(): void {
        this.checkBorderLimit()
    }

    public checkBorderLimit(): void {
        // si x - le radius de la balle est supérieur a canvas width alors, y = -y
        // si y - le radius de la balle est supérieur a canvas height alors, y = -y
        const borderLimit = {
            x: this.ctx.canvas.width - this.radius,
            y: this.ctx.canvas.height - this.radius
        };
        if (this.x < 0 || this.x > borderLimit.x) {
            this.dx = -this.dx;
        }
        if (this.y < 0 || this.y > borderLimit.y) {
            this.dy = -this.dy;
        }
    }
}