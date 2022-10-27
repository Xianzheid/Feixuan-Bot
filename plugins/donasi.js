import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}
┌─「 Donasi • Pulsa 」
│ • Telkomsel : ${global.ppulsa}] | [${global.ppulsa2}
│ • Dana : ${global.pdana}
│ • Gopay : ${global.pgopay}
│ • Ovo : ${global.povo}
│ • Link Aja : ${global.plinkaja}
❏────`
let wibu = ["https://telegra.ph/file/73751fa7e99cfb5f92684.jpg",
"https://telegra.ph/file/d921e3ccfd4c4ce6eac8f.jpg",
"https://telegra.ph/file/7697fe40c5134598850d4.jpg"]
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Sewa Bot','.sewa', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/xianzhe_xx",
    mediaType: "IMAGE",
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
