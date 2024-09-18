import Score from "./classes/score";
import { startGame } from "./game";

document.addEventListener("DOMContentLoaded", function () {
   const startBtn = document.getElementById("start") as HTMLButtonElement;

   let isGameRunning = false;


   startBtn?.addEventListener("click", function () {
       if (!isGameRunning) {
           isGameRunning = true;
           startGame();
           this.disabled = true;
       }
   });
   const death = document.getElementById("death") as HTMLButtonElement;
   death.textContent = Score.getDeath().toString();
})