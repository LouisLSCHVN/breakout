const COLORS = {
    background: "rgb(0,0,0)",
    dot: "rgb(255,255,255)",
    racket: "rgb(0,255,0)",
    bricks: "rgb"
};

const CANVAS = {
    width: 500,
    height: 700,
    id: "breakout"
}

const BRICKS = {
    colors: ['yellow', 'green', 'orange', 'red'],
    perLine: 14,
    lines: 4,
}

const KEYPRESS_SPEED: number = 5

type Color = typeof COLORS[keyof typeof COLORS]

export { COLORS, CANVAS, KEYPRESS_SPEED, BRICKS, Color };