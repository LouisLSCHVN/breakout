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
  column-count: 3;
  padding: 15px;

  width: 100%;
  height: 100svh;

  background: #000000;

  outline: 2px solid var(--color-text);
  place-items: center;
}

#breakout__main > :nth-child(1),
#breakout__main > :nth-child(3) {
  max-height: 700px;
  padding: 0 15px;
}
</style>