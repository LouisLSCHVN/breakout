<template>
    <canvas id="breakout" :width="CANVAS.width" :height="CANVAS.height"></canvas>
</template>
<script setup>
import {CANVAS} from "~/lib/constant";
</script>
<style>
canvas {
    border: 2px solid var(--color-secondary);
    cursor: crosshair;
}
</style>