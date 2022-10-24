import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow*

Pengen mentahan nya ?
Nih ada santai bro....
https://github.com/ImYanXiao/Elaina-MultiDevice

Pengen yang udah di recode oleh owner?
https://github.com/Xianzhe-ID/XiaFeixuan-Bot`

let kntl = `https://telegra.ph/file/ddda3405b847c58198684.jpg` 
let thumb = await(await fetch(kntl)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/xianzhe_xx",
    mediaType: "image",
    description: "Instagram", 
    title: 'XiaFeixuan Bot | MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
