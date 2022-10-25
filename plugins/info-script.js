import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/XianzheID/XiaFeixuat-Bot*

`
let wibu = `https://telegra.ph/file/7f49101f4824088555a38.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/xianzhe_xx",
    mediaType: "image/jpg",
    description: "https://instagram.com/xianzhe_xx", 
    title: 'XiaFeixyan-Bot | MultiDevice',
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
