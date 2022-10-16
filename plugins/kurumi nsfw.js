import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = await fetch('https://raw.githubusercontent.com/Xianzheid/Bahan-Nsfw/main/kurumi.json')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
    conn.sendButton(m.chat, 'Dosa ditanggung sendiri!', author, json.url, [['Next', `${command}`]], m)
    ©Creator Xianzhe ID\nhttps://instagram.com/xianzhe
}
handler.command = /^(kurumi)$/i
handler.tags = ['nsfw']
handler.help = ['hentai', 'nsfw']

handler.premium = true
export default handler
