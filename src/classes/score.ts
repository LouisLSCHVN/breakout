import { CANVAS, COLORS } from "../constant";
import Canvas from "./canvas";

export default class Score extends Canvas {

    private static score: number = 0;
    private static death: number = 4;

    constructor() {
        super(CANVAS.id);
    }

    static getScore() {
        return Score.score;
    }

    static incrementScore() {
        Score.score = Score.score + 10;
        console.log(Score.score);
    }

    static getDeath() {
        return Score.death;
    }

    static decrementDeath() {
        Score.death--;
        if (Score.death === 0) {
            Score.saveScore();
            
        }
        Score.updateDisplay()
        return Score.death !== 0;
    }

    public static saveScore() {
        const score = Score.getScore();
        const death = Score.getDeath();

        const data = {
            score: score,
            death: death
        };

        localStorage.setItem('scores', JSON.stringify(data));
    }

    public static getSave() {
        const data = localStorage.getItem('scores');
        if (data) {
            return JSON.parse(data);
        }
    }

    public static showScore(ctx: CanvasRenderingContext2D) {


        if (ctx) {  // Vérifie que le contexte et le canvas sont bien définis
            ctx.fillStyle = COLORS.text;
            ctx.font = "bold 32px Times New Roman";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(Score.score.toString(), (CANVAS.width / 2), (CANVAS.height / 2));
        }
    }

    public static updateDisplay(){
        const death = document.getElementById("death") as HTMLButtonElement;
        death.textContent = Score.getDeath().toString();
    }
}
