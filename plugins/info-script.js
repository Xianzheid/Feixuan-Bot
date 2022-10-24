import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/Xianzhe-ID/XiaFeixuan-Bot*

`
let wibu = `https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButton( m.chat, str, wm, null, [`Menu`, `.menu`], m)
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
