<template>
  <div class="game__info">
    <h1>
      Breakout
    </h1>
    <GameUsername />
    <client-only>
      <GameStats />
      <AppButton class="start" text="START" @click="startGame()" />
    </client-only>
  </div>
</template>
<script lang="ts" setup>
import { startGame } from '~/lib/game';
</script>
<style scoped>
div.game__info {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
}
h1 {
  width: 100%;
  text-align: center;
}
</style>