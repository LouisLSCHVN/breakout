<template>
  <div class="input-wrapper">
    <small>change me</small>
    <input required id="username" type="text" v-model="username" :placeholder="username" />
  </div>
</template>

<script setup lang="ts">
import { username } from '~/store/user';
</script>
<style scoped>
.input-wrapper {
  display: flex;
  gap: 20px;
  flex-direction: column;
}
input {
  font-family: "Press Start 2P", system-ui;
  font-size: 1.5rem;
  background: transparent;
  color: var(--color-text);
  border: none;
  outline: none;
  cursor: alias;
}
</style>