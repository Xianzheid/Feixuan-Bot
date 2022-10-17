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
let wibu = `https://telegra.ph/file/837d65f38345a7524024f.jpg` 
let thumb = await(await fetch(wibu)).buffer()

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
