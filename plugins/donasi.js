import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let text = `${global.wm}

┌─「 Donasi 」
│ • *Telkomsel:* ${global.ppulsa}]
│ • *Dana:* ${global.pdana}
│ • *Gopay:* ${global.pgopay}
│ • *Saweria:* ${global.psaweria}
❏────`

let th = global.tmb
    let url = th[Math.floor(Math.random() * yh.length)]
let thumb = await(await fetch(wibu)).buffer()
conn.sendButton(m.chat, text, 'https://instagram.com/xianzhe_xx', url, [['NEXT', '.loli']], m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

global.tmb = ["https://telegra.ph/file/73751fa7e99cfb5f92684.jpg",
"https://telegra.ph/file/d921e3ccfd4c4ce6eac8f.jpg",
"https://telegra.ph/file/7697fe40c5134598850d4.jpg"]