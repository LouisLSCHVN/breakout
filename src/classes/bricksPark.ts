import Brick from "./brick";

export default class BricksPark {

    public bricks: Brick[] = [];

    constructor(
        ctx: CanvasRenderingContext2D,
        bricks: Brick[]
    ) {
        this.bricks = bricks;
    }

}