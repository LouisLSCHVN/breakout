import './assets/css/index.css';
import Canva from './classes/canva';
import { COLORS } from './constant';

console.log('Hello World!');

const canva = new Canva('breakout');
const ctx = canva.getCtx();

// Set the canvas background color
ctx.fillStyle = COLORS.background;
ctx.fillRect(0, 0, canva.getWidth(), canva.getHeight());