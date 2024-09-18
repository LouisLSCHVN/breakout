<template>
  <GameDeathScreen />
  <main id="breakout__main">
    <GameInfo />
    <BreakoutCanvas />
    <GameScoreboard />
  </main>
</template>
<script setup>
import './assets/css/index.css'
</script>
<style>
#breakout__main {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  place-items: center;

  width: 100%;
  height: 100svh;

  background: #000000;
}
</style>