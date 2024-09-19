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

  width: 100%;
  height: 100svh;

  background: #000000;

  outline: 2px solid var(--color-text);
}

#breakout__main > :nth-child(1),
#breakout__main > :nth-child(3) {
  padding: 30px;
}

#breakout__main > :nth-child(2) {
  align-self: center;
}
</style>