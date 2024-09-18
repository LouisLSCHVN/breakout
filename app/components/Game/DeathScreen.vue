<template>
  <div v-if="death === 0">
    <h1>
      GAME OVER
    </h1>
    <AppButton text="RESTART" @click="startGame()" />
  </div>
</template>
<script setup>
import {startGame, death} from "~/lib/game";
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