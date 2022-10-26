import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command}) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzhe-ID/XianzheID-NSFW/XianzheID/JSON-FILE/hutao.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Nih kak', ['Next', `.${command}`], m)
}
handler.command = /^(hutao)$/i
handler.tags = ['premium']
handler.help = ['hutao', 'premium']
handler.premium = true
export default handler
