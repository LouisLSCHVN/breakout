<template>
  <button>
    {{ props.text }}
  </button>
</template>
<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>
<style scoped>
button {
  outline: none;
  border: var(--color-secondary) 2px solid;
  font-family: "Press Start 2P", system-ui;
  color: var(--color-text);
  background: var(--color-primary);
  padding: 10px;
  cursor: help;
  transition: 0.2s ease;

  white-space:nowrap;
}

.active {
  background: var(--color-secondary);
}

.start{
  border-radius: 12px;
  border-color: var(--red);
  background-color: var(--orange);
  color : var(--white);
}
</style>