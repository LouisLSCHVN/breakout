const COLORS = {
    background: "rgb(0,0,0)",
    dot: "rgb(255,255,255)",
    racket: "rgb(0,255,0)",
    bricks: "rgb",
    text: "rgb(0,0,255)"
};

const CANVAS = {
    width: 500,
    height: 700,
    id: "breakout"
}

const BRICKS = {
    colors: ['red','red','orange','orange','green','green','yellow','yellow'],
    perLine: 10,
    height: 10,
    marginRatio: .2
}

const KEYPRESS_SPEED: number = 5

type Color = typeof COLORS[keyof typeof COLORS]

export { COLORS, CANVAS, KEYPRESS_SPEED, BRICKS };
export type { Color };
