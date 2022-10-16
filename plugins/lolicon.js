import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzheid/Bahan-Nsfw/main/loli.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
    conn.sendButton(m.chat, 'Cuih Lolicon', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(lolicon)$/i
handler.tags = ['nsfw']
handler.help = ['lolicon', 'nsfw']
handler.premium = true
export default handler
