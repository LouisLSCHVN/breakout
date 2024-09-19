const COLORS = {
    background: "rgb(0,0,0)",
    dot: "rgb(255,255,255)",
    racket: "rgb(0,255,0)",
    bricks: "rgb",
    text: "rgb(0,0,255)"
};

const BRICKS = {
    colors: ['red','red','orange','orange','green','green','yellow','yellow'],
    perLine: 10,
    height: 10,
    marginRatio: .2
}

const DOT = {
    dx: 3,
    dy: 3,
    baseSpeed: [5, 7, 9],
    speedMultiplier: 1.5
}

const KEYPRESS_SPEED: number = 5

type Color = typeof COLORS[keyof typeof COLORS]

export { COLORS, KEYPRESS_SPEED, BRICKS, DOT };
export type { Color };
