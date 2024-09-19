<template>
  <div>
    <h1>
      Breakout
    </h1>
    <GameUsername />
    <AppPeople />


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
div {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-evenly;
}
</style>