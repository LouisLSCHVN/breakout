<template>
  <div class="stats">
    <p>FPS : {{ fps }}</p>
    <p>Score : <span class="score">{{ score }}</span></p>
    <p>Lives : <span class="death">{{ death }}</span></p>
  </div>
</template>

<script lang="ts" setup>
import { fps, score, death } from '~/lib/game';
</script>

<style scoped>
.score{
  color: var(--orange);
}

.death{
  color: var(--red);
}
</style>
