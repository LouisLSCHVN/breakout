export const scoreboard = ref<ScoreboardData[]>([]);

export const saveScoreboard = async (data: ScoreboardData): Promise<void> => {
    await $fetch("/api/score", {
        method: "POST",
        body: data
    })
    scoreboard.value.push(data)
    await getScoreboard()
}

export const getScoreboard = async () => {
    const res = await $fetch<{ status: number; data: ScoreboardData[] }>('/api/score')
    console.log(res)
    scoreboard.value = res?.data
}

export type ScoreboardData = {
    username: string,
    info: {
        createdAt: number,
        score: number,
        difficulty: 1 | 2 | 3
    }
}