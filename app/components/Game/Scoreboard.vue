<template>
  <div>
    <h1>Leaderboard</h1>
    <pre>
      {{ scoreboard }}
    </pre>
  </div>
</template>
<script setup>
import {scoreboard} from "~/store/scoreboard";
const getScoreboard = async () => {
  const res = await $fetch('/api/score')
  console.log(res)
  scoreboard.value = res?.data
}

onMounted(async () => await getScoreboard())
</script>