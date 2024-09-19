<template>
  <div class="canvas-container">
    <canvas id="breakout" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasWidth = ref(500)
const canvasHeight = ref(700)

const calculateCanvasSize = () => {
  const maxWidth = 500
  const aspectRatio = 7 / 5 // height / width

  let newWidth = Math.min(window.innerWidth * 0.85, maxWidth)
  let newHeight = newWidth * aspectRatio

  canvasWidth.value = Math.round(newWidth)
  canvasHeight.value = Math.round(newHeight)
}

const handleResize = () => {
  calculateCanvasSize()
}

onMounted(() => {
  calculateCanvasSize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const CANVAS = {
  get width() { return canvasWidth.value },
  get height() { return canvasHeight.value },
  id: "breakout"
}
</script>

<style scoped>
.canvas-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

canvas {
  border: 2px solid var(--color-secondary);
  cursor: crosshair;
  max-width: 100%;
  height: auto;
}
</style>