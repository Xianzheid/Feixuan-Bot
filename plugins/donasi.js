import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}

┌─「 Donasi 」
│ • *Telkomsel:* [${global.ppulsa}]
│ • *Dana:* [${global.pdana}]
│ • *Gopay:* [${global.pgopay}]
│ • *Saweria:* [${global.psaweria}]
❏────`
let wibu = `https://telegra.ph/file/c60573400c709629410d0.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaurl: 'https://instagram.com/xianzhe_xx'
    title: 'XiaFeixuan-IV MultiDevice',
    description: 'instagram.com/xianzhe_xx'
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
