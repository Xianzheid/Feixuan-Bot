/*let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
0ཻུ۪۪ꦽꦼ̷⸙‹•══════════════♡᭄
│       *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
|  *Status     :* 
╰═════ꪶ ཻུ۪۪ꦽꦼ̷⸙ ━ ━ ━ ━ ꪶ ཻུ۪۪ꦽꦼ̷⸙
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler */

import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let krtu = `
╭───── ⋆✩
│ Nama   :
│ Gender :
│ Umur    :
╰───── ⋆✩

`
let wibu = 'https://telegra.ph/file/7c2fccac55bdcb7603082.jpg'
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, krtu, wm,'MENU','/menu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    title: 'XiaFeixuan-IV MultiDevice',
    mediaurl : 'https://instagram.com/xianzhe_xx'
    body: wm,
    description: Follow My Insta^~^
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler

