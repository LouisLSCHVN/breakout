import { COLORS } from "../constant";
import Canvas from "./canvas";

export default class Score extends Canvas {

    private static score: number = 0;
    private static death: number = 4;

    constructor() {
        super("breakout");
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

    static reset() {
        Score.score = 0;
        Score.death = 4;
    }
}
