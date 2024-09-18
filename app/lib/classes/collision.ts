interface GameObject {
    x: number;
    y: number;
    width?: number;
    height?: number;
    radius?: number;
}

/**
 * Le but de la classe c'est de prendre deux object et de renvoyer un listener de collission
 *
 * @export
 * @class Collision
 */
export default class Collision {
    private a: GameObject;
    private b: GameObject;

    constructor(a: GameObject, b: GameObject) {
        this.a = a
        this.b = b
    }

    public checkCollision() {
        
    }
}