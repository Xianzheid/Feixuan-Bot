import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzhe-ID/XianzheV1-MD/XianzheID/kurumi.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Nih kak' , '©XianzheID', '.Kurumi', m)
}
handler.command = /^(kurumi)$/i
handler.tags = ['premium']
handler.help = ['kurumi', 'premium']
handler.premium = true
export default handler
