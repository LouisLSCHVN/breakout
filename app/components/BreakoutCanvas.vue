<template>
    <div>
        <canvas id="breakout" :width="CANVAS.width" :height="CANVAS.height"></canvas>
    </div>
</template>
<script setup>
import {CANVAS} from "~/lib/constant";
</script>
<style scoped>
div {
    display: flex;
    align-items: center;
    justify-content: center;
}
canvas {
    border: 2px solid var(--color-secondary);
    cursor: crosshair;
}
</style>