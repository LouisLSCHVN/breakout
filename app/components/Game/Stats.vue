<template>
  <div class="stats">
    <table>
      <thead>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Key">ONLINE PEOPLE</td>
          <td data-label="Value">{{ numberOfPeople }}</td>
        </tr>
        <tr>
          <td data-label="Key">FPS</td>
          <td data-label="Value">{{ fps }}</td>
        </tr>
        <tr>
          <td data-label="Key">Score</td>
          <td data-label="Value" class="score">{{ score }}</td>
        </tr>
        <tr>
          <td data-label="Key">Lives</td>
          <td data-label="Value" :style="{ color: showColorDeath }">{{ death }}</td>
        </tr>
      </tbody>
    </table>
    <p class="credits">
      Created by LouisL, JulienH & GabinD
    </p>
  </div>
</template>

<script lang="ts" setup>
import { fps, score, death } from '~/lib/game';

const showColorDeath = computed(() => {
  if (death.value >= 4) {
    return "green";
  }
  if (death.value === 3) {
    return "yellow";
  }
  if (death.value === 2) {
    return "orange";
  }
  if (death.value <= 1) {
    return "red";
  }
  return "white";
});


const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const ws = new WebSocket(`${protocol}//${location.host}/api/_ws/people`);
const numberOfPeople = ref(0);

ws.onmessage = (event) => {
  const parsedData = parseInt(event.data);
  if (!isNaN(parsedData)) {
    numberOfPeople.value = parsedData;
  }
};

ws.onerror = (error) => console.error("WebSocket error:", error);

onUnmounted(() => {
  if (ws) ws.close();
});
</script>

<style scoped>
.credits {
  font-size: .8rem;
  padding-top: 20px;
}
.primary{
  color: var(--color-secondary);
}

table {
  border: 2px solid var(--color-secondary);
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: var(--color-secondary);
  color: white;
}

th, td {
  padding: 12px 20px;
  border: 1px solid var(--primary);
  text-align: left;
  color: #fff;
  border-bottom: 2px solid var(--color-secondary);
  border-right: 2px solid var(--color-secondary);
}

th {
  font-weight: bold;
}

.score {
  color: var(--orange);
}

thead th,
tbody tr td:first-child,
tbody tr td:last-child {
  padding-left: 20px;
  padding-right: 20px;
}

@media (max-width: 768px) {
  .stats {
    padding: 10px;
  }

  table, thead, tbody, th, td, tr {
    display: block;
  }

  thead {
    display: none;
  }

  tr {
    margin-bottom: 15px;
  }

  td {
    text-align: right;
    padding-left: 50%;
    position: relative;
    border: none;
    border-bottom: 1px solid #444;
  }

  td::before {
    content: attr(data-label);
    position: absolute;
    left: 10px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    text-align: left;
    font-weight: bold;
    color: #fff;
  }
}
</style>
