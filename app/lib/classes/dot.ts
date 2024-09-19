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
// Dot.ts
import { CANVAS, COLORS } from "../constant";
import Canvas from "./canvas";
import Score from "./score";
import { death } from "~/lib/game";
import Racket from "./racket"; // Assurez-vous que le chemin est correct

export default class Dot extends Canvas {

    public x: number = Math.random() * CANVAS.width;
    public y: number = CANVAS.height / 2; // Correction: Utiliser CANVAS.height
    public radius: number = 5;
    public color: string = COLORS.dot;
    public dx: number = 3;
    public dy: number = 3;

    constructor(
        radius?: number,
        color?: string,
        x?: number,
        y?: number,
    ) {
        super(CANVAS.id);
        if (radius) this.radius = radius;
        if (color) this.color = color;
        if (x) this.x = x;
        if (y) this.y = y;
    }

    public draw(): void {
        this._ctx.beginPath();
        this._ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this._ctx.fillStyle = this.color;
        this._ctx.fill();
        this._ctx.closePath();
    }

    /**
     * Normalise la vitesse pour maintenir une vitesse constante
     * @memberof Dot
     */
    public normalizeVelocity(): void {
        const speed = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        const desiredSpeed = 5; // Ajustez selon vos préférences

        if (speed !== 0) {
            this.dx = (this.dx / speed) * desiredSpeed;
            this.dy = (this.dy / speed) * desiredSpeed;
        }
    }

    /**
     * Check for collision with borders and racket
     * Move the dot
     * Draw the dot
     *
     * @param {Racket} racket
     * @memberof Dot
     * @returns {void}
     */
    public move(racket: Racket): void {
        this.checkCollision(racket);
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }

    public checkCollision(racket: Racket): void {
        // Utiliser la méthode de la raquette pour vérifier la collision
        racket.checkDotLimit(this);
        this.checkBorderLimit();
        if (this.checkBorderDeath()) {
            this.resetPosition();
            Score.decrementDeath();
            death.value = Score.getDeath();
            console.log('number of deaths:', Score.getDeath());
        }
    }

    private resetPosition(): void {
        this.x = Math.random() * CANVAS.width;
        this.y = CANVAS.height / 2; // Correction: Utiliser CANVAS.height
        // Réinitialiser la vitesse si nécessaire
        this.dx = 3;
        this.dy = 3;
    }

    public checkBorderLimit(): void {
        const borderLimit = {
            x: this._ctx.canvas.width - this.radius,
            y: this._ctx.canvas.height - this.radius
        };
        if (this.x < this.radius || this.x > borderLimit.x) {
            this.dx = -this.dx;
        }
        if (this.y < this.radius) {
            this.dy = -this.dy;
        }
        // Supprimer l'inversion de dy pour y > borderLimit.y pour éviter le conflit avec la raquette
    }

    public checkBorderDeath(): boolean {
        // Fait mourir le joueur si la balle touche le bas du canvas
        return this.y >= (this._ctx.canvas.height - this.radius);
    }
}
