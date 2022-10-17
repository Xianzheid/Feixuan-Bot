import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzheid/Bahan-Nsfw/main/kurumi.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
    await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(kurumi)$/i
handler.tags = ['premium']
handler.premium = true
handler.register = true
export default handler
