export const username = ref(genUsername())

function genUsername(username: string = "Username") {
    let chars = username.split('');
    const randomDigit = () => Math.floor(Math.random() * 10);

    for (let i = 0; i < 2; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * chars.length);
        } while (!isNaN(parseInt(chars[index] as string)));
        chars[index] = String(randomDigit());
    }
    let modifiedUsername = chars.join('');
    for (let i = 0; i < 3; i++) {
        modifiedUsername += randomDigit();
    }
    return modifiedUsername;
}