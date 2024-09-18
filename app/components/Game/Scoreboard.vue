<template>
  <div>
    <h1>Leaderboard</h1>
    <pre>
      {{ scoreboard }}
    </pre>
  </div>
</template>
<script setup>
import {getScoreboard, scoreboard} from "~/store/scoreboard";

onMounted(async () => await getScoreboard())
</script>