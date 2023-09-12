import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}
┌─「 Donasi 」
│ • Telkomsel : ${global.ppulsa}]
│ • Dana : ${global.pdana}
│ • Gopay : ${global.pgopay}
│ • Ovo : ${global.povo}
│ • Link Aja : ${global.plinkaja}
❏────`
let wibu = "https://telegra.ph/file/eda419a5204bc479bee57.jpg"
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/xianzhe_xx",
    mediaType: "2",
    description: "Xianzhe ID", 
    title: 'XiaFeixuan-Bot | MultiDevice',
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
