import Brick from "./brick";

export default class BricksPark {

    public bricks: Brick[] = [];

    constructor() {}

    public push(brick: Brick): void {
        this.bricks.push(brick)
    }

    public get(): Brick[] {
        return this.bricks
    }

}