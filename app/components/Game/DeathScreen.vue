<template>
  <aside v-if="death === 0">
    <h1>
      <span class="main">GAME OVER</span>
      <span class="shadow">GAME OVER</span>
    </h1>
    <p>You died with {{ score }} points</p>
    <div class="death__buttons">
      <AppButton text="RESTART" @click="startGame()" />
      <AppButton text="SAVE" @click="saveStats()" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { startGame, death, score } from "~/lib/game";
import { username } from "~/store/user";
import { saveScoreboard, type ScoreboardData } from "~/store/scoreboard";

const data = computed<ScoreboardData>(() => ({
  username: username.value,
  info: {
    createdAt: new Date().getTime(),
    score: score.value,
    difficulty: 1,
  },
}));

const saveStats = async () => {
  console.log("data", data.value);
  await saveScoreboard(data.value);
  death.value = 4;
};
</script>

<style scoped>
aside {
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

.death__buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

h1 {
  max-width: min-content;
  position: relative;
  font-size: 5rem;
  text-align: center;
  margin: 0;
  color: white;
}

.main {
  position: relative;
  z-index: 1;
}

.shadow {
  position: absolute;
  top: 4px;
  left: 4px;
  color: red;
  z-index: 0;
}

p {
  color: white;
  font-size: 1.5rem;
}
</style>
