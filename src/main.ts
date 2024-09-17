import './assets/css/index.css';
import Canva from './classes/canva';
import Dot from './classes/dot';
import { COLORS } from './constant';

console.log('Hello World!');

const canva = new Canva('breakout');
canva.setSize(500, 700)

const ctx = canva.get2dCtx();

canva.setBackground(COLORS.background);

// Initialize the dot
const dot = new Dot(ctx, 50, 50, 10, 10, 5, COLORS.dot);
dot.draw();