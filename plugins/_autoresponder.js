import fs from 'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return


/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regj = /(.jadibotak)/i
    let isJadibot = regj.exec(m.text)
    let jadbot = [
'🤖',
'🤖',
'🤖'
]
let jadibot = jadbot[Math.floor(Math.random() * jadbot.length)]
    if (isJadibot && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${jadibot}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `mau jadibot? Ketik .sewa ${jadibot}`, m)
    }, 1000)
    }

    
    let ass = /(assalamualaikum|assallamualaikum|assalamu\'alaikum|as\'salamualaikum)/i
    let isAss = ass.exec(m.text)
    let assal = [
'😇',
]
let assl = assal[Math.floor(Math.random() * assal.length)]
    if (isAss && !m.fromMe) {
    let assalamualaikum = fs.readFileSync('./mp3/waalaikumsalam.ogg')
    conn.sendMessage(m.chat, {
        react: {
          text: `${assl}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, assalamualaikum, '', '', m, true)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by wh mods dev - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
    let hiai = /(xian ganteng|aldy ganteng|aldy gntng|xian gntg|xianzhe ganteng)/i
    let isAih = hiai.exec(m.text)
    let hiain = [
'🥰',
'😇',
'😅'
]
let hiaine = hiain[Math.floor(Math.random() * hiain.length)]
    if (isAih && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/ganteng.ogg') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${hiaine}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }*/

}

handler.limit = false
export default handler
