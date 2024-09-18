<template>
    <aside>
        {{ numberOfPeople }}
    </aside>
</template>
<script setup>
const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
const ws = new WebSocket(`${protocol}//${location.host}/api/_ws/people`);
const numberOfPeople = ref(0);

ws.onmessage = (event) => {
    numberOfPeople.value = parseInt(event.data)
}
ws.onerror = (error) => console.error("WebSocket error:", error);

onUnmounted(() => {
if (ws) ws.close();
});
</script>