import fetch from 'node-fetch'

let handler = async (m) => {
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/c60573400c709629410d0.jpg')
    //let wibu = `https://api.zacros.my.id/randomimg/loli`
    let res = await fetch('https://telegra.ph/file/c60573400c709629410d0.jpg')
    let txt = await res.text()
    let arr = txt.split('\n')
    let cita = arr[Math.floor(Math.random() * arr.length)]
    let thumb = await(await fetch(cita)).buffer()
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let tqto = `*▸ - - - —「 BIG THANKS TO 」— - - - ◂*
*❉ Adiwajshing:*
https://github.com/adiwajshing
*❉ Nurutomo:*
https://github.com/Nurutomo
*❉ Istikmal:* 
https://github.com/BochilGaming
*❉ Ariffb:*
https://github.com/Ariffb25
*❉ Ilman:*
https://github.com/ilmanhdyt
*❉ Amirul:*
https://github.com/amiruldev20
*❉ Rasel:*
https://github.com/raselcomel
*❉ Fatur:*
https://github.com/Ftwrr
*❉ Rominaru:*
https://github.com/Rominaru
*❉ Kannachann:*
https://github.com/Kannachann
*❉ The.sad.boy01:*
https://github.com/kangsad01
*❉ Ameliascrf:*
https://github.com/Ameliascrf
*❉ Fokus ID:*
https://github.com/Fokusdotid
*❉ Johannes:*
https://github.com/Johannes2803
*❉ BrunoSobrino:*
https://github.com/BrunoSobrino
*❉ Krisna:*
https://github.com/NevtBotz
*❉ LitRHap:*
https://github.com/LitRHap
*❉ Rlxfly:*
https://github.com/Rlxfly
*❉ Aine:*
https://github.com/Aiinne
*❉ Papah-Chan:*
https://github.com/FahriAdison
*❉ ImYanXiao:*
https://github.com/ImYanXiao
*▸ - - - —「 And Thanks To 」— - - - ◂*
*❉ WH MODS DEV:*
*❉ Kannachan:*
*❉ Papah-Chan:*
*❉ Johannes:*
*❉ Krisna:*
*❉ Rlxfly:*
*❉ XianzheID:*

`
conn.sendButtonDoc(m.chat, tqto, wm,'Thanks','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://telegra.ph/file/c60573400c709629410d0.jpg",
    mediaType: "image",
    description: "https://Instagram.com/xianzhe_xx", 
    title: 'XiaFeixuan V1-MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig
}
} })
        }
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
export default handler
