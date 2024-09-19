<template>
  <div class="game__info">
    <h1>
      Breakout
    </h1>
    <GameUsername />
    <client-only>
      <GameStats />
      <AppButton text="START" @click="startGame()" :disabled="death === 0" />
    </client-only>
  </div>
</template>
<script lang="ts" setup>
import { startGame, death } from '~/lib/game';
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
  border: 2px solid var(--color-secondary);
  padding: 10px 0;
  width: 100%;
  text-align: center;
  text-decoration: dashed;
}
</style>