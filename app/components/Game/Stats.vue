<template>
  <div class="stats">
    <p>FPS : {{ fps }}</p>
    <p>Score : {{ score }}</p>
    <p>Lives : {{ death }}</p>
  </div>
</template>

<script lang="ts" setup>
import { fps, score, death } from '~/lib/game';
</script>

<style scoped>
</style>
