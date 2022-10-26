import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzhe-ID/XianzheID-NSFW/XianzheID/JSON-FILE/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random())]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Nih kak' , '©XianzheID', '.Loli', m)
}
handler.command = /^(loli)$/i
handler.tags = ['premium']
handler.help = ['loli', 'premium']
handler.premium = true
export default handler
