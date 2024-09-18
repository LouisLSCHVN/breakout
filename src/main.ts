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
})