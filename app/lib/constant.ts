const COLORS = {
    background: "rgb(0,0,0)",
    dot: "rgb(255,255,255)",
    racket: "rgb(0,255,0)",
    bricks: "rgb",
    text: "rgb(0,0,255)"
};

let CANVAS = {}
if(window.innerWidth > 600) {
    CANVAS = {
        width: 500,
        height: 700,
        id: "breakout"
    }
} else {
    CANVAS = {
        width: 500 /2,
        height: 700 /2,
        id: "breakout"
    }
}

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

export { COLORS, CANVAS, KEYPRESS_SPEED, BRICKS, DOT };
export type { Color };
