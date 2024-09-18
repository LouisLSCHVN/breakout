export default defineEventHandler(async (event) => {
    const playersList: string[] = await useStorage().getItem('players') || []

    const data = await Promise.all(
        playersList.map(async (username: string) => {
            const info = await useStorage().getItem(`player:${username}`)
            return { username, info }
        })
    )

    return { status: 200, data }
})