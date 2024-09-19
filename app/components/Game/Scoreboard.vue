<template>
  <div>
    <h1>Leaderboard</h1>
    <div class="sorting-buttons">
      <AppButton
        :class="{ active: sortBy === 'date' }"
        @click="setSort('date')"
        text="Sort by Date"
        />
      <AppButton
        :class="{ active: sortBy === 'score' }"
        @click="setSort('score')"
        text="Sort by Score" />
    </div>
    <div v-if="sortedScoreboard.length > 0">
      <ul>
        <li v-for="item in sortedScoreboard" :key="item.createdAt">
          <span>{{ item.username }}</span>
          <span>{{ item.score }}</span>
          <span>{{ formatRelativeTime(item.createdAt) }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No scores available.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getScoreboard, scoreboard } from "~/store/scoreboard";
import { onMounted, ref, computed } from "vue";

// Fonction pour formater le temps écoulé
function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diff < 60 * 1000) {
    return "just now";
  } else if (diff < 60 * 60 * 1000) {
    return `about ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diff < 24 * 60 * 60 * 1000) {
    return `about ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diff < 7 * 24 * 60 * 60 * 1000) {
    return `about ${days} day${days !== 1 ? "s" : ""} ago`;
  } else {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

const sortBy = ref<'date' | 'score'>('date');

const setSort = (criteria: 'date' | 'score') => {
  sortBy.value = criteria;
};

const sortedScoreboard = computed(() => {
  if (!scoreboard.value || scoreboard.value.length === 0) return [];

  const transformed = scoreboard.value.map(item => ({
    username: item.username,
    score: item.info && item.info.length > 0 ? item.info[0].score : 0,
    createdAt: item.info && item.info.length > 0 ? item.info[0].createdAt : 0,
  })).filter(item => item.createdAt > 0);

  const sorted = [...transformed];

  if (sortBy.value === 'date') {
    sorted.sort((a, b) => b.createdAt - a.createdAt);
  } else if (sortBy.value === 'score') {
    sorted.sort((a, b) => b.score - a.score);
  }

  return sorted;
});

onMounted(async () => await getScoreboard());
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  overflow-y: auto;
  max-height: 400px;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid var(--color-secondary);
}

.sorting-buttons {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

span {
  flex: 1;
  text-align: center;
}

pre {
  display: none;
}

pre[v-cloak] {
  display: block;
}

@media (max-width: 768px) {
  li {
    flex-direction: column;
    align-items: center;
  }
}
</style>
