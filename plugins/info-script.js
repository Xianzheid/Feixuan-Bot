import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://github.com/Xianzhe-ID/XiaFeixuan-Bot*

`
/*let wibu = `https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg` 
let thumb = await(await fetch(wibu)).buffer()*/
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg",
    mediaType: "image",
    description: "https://instagram.com/xianzhe_xx", 
    title: 'XiaFeixuan-Bot | MultiDevice',
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
