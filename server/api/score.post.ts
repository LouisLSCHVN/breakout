export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    let playersArr: string[] = await useStorage().getItem('players') || []

    if (!playersArr.includes(body.username)) {
        playersArr.push(body.username)
        await useStorage().setItem('players', playersArr)
    }

    let data: any[] = await useStorage().getItem(`player:${body.username}`) || []

    data.push(body.info)

    await useStorage().setItem(`player:${body.username}`, data)

    return { status: 200, message: "Saved" }
})