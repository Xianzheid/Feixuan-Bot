import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw ``
    const res = await fetch('https://raw.githubusercontent.com/Xianzhe-ID/XianzheID-NSFW/XianzheID/JSON-FILE/loli.json')
    let image = json[Math.floor(Math.random())]
    let link = image
    let whmods = `Sange ya🥵`
    conn.sendButton(m.chat, whmods, link, [['Next', `.${command}`]], m)
}

handler.command = /^(lolicon)$/i
handler.tags = ['premium']
handler.help = ['loli', 'premium']
handler.premium = true

export default handler