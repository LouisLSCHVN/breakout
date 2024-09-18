export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    let playersList: string[] = await useStorage().getItem('players') || []

    if (!playersList.includes(body.username)) {
        playersList.push(body.username)
        await useStorage().setItem('players', playersList)
    }

    await useStorage().setItem(`player:${body.username}`, body.info)

    return { status: 200, message: "Saved" }
})