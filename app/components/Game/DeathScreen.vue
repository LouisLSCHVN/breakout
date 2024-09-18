<template>
  <div v-if="death === 0">
    <h1>
      GAME OVER
    </h1>
    <AppButton text="RESTART" @click="startGame()" />
    <AppButton text="SAVE" @click="saveStats()" />
  </div>
</template>
<script setup lang="ts">
import {startGame, death, score} from "~/lib/game";
import {username} from "~/store/user";
import {saveScoreboard, type ScoreboardData} from "~/store/scoreboard";

const data = ref<ScoreboardData>({
  username: username.value,
  info: {
    createdAt: new Date().getTime(),
    score: score.value,
    difficulty: 1,
  }
})

const saveStats = async () => {
  console.log("data", data)
  await saveScoreboard(data.value)
  startGame()
}
</script>
<style scoped>
div {
  position: absolute;
  inset: 50% 0 0 50%;
  transform: translate(-50%, -50%);

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  padding: 50px;
}
</style>