<template>
  <div>
    <GameUsername />
    <AppPeople />


    <client-only>
      <GameStats />
      <AppButton text="START" @click="startGame()" />
    </client-only>
  </div>
</template>
<script lang="ts" setup>
import { startGame } from '~/lib/game';
</script>