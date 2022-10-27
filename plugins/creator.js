let { MessageType } = (await import('@adiwajshing/baileys')).default
import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

 let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Xianzhe ID;;;\nFN:Xianzhe ID\nORG:Xianzhe ID\nTITLE:\nitem1.TEL;waid=6285326781097:+62 853-2678-1097\n\nitem2.URL:https://desty.page/xianzhe\nitem3.EMAIL;type=INTERNET:xtc5ana@gmail.com\nitem4.ADR:;;Indonesia\nEND:VCARD`

await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://instagram.com/xianzhe_xx/',
    mediaType: 2, 
    description: sig,
    title: "Created by Xianzhe ID",
    body: wm,
    thumbnail: fs.readFileSync('./media/xianzhe1.jpg'),
    sourceUrl: sig
     }}
  })
    catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner nomor)/i
export default handler