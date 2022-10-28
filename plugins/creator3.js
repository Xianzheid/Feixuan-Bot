import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
        
        let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Xianzhe ID\nFN:XFS-Team Xianzhe ID\nORG:Xianzhe ID\nTITLE:\nitem1.TEL;waid=6285326781097:+62 853-2678-1097\n\nitem2.URL:https://desty.page/xianzhe\nitem3.EMAIL;type=INTERNET:xtc5ana@gmail.com\nitem4.ADR:Indonesia\n\nitem5.GROUP:XFS-TeamEND:VCARD`
        const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: ftroli })
        
handler.help = ['kontak',]
handler.tags = ['info','main']

handler.command = /^(kontak)$/i

export default handler
