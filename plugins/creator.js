let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `https://wa.me/6285326781097?text=Banh+Lu+Gantenh`
  let nowner = `https://wa.me/6285326781097?text=/menu`
  let teksnomor = `${htki} *OWNER* ${htka}
 ❒ Xianzhe ID : ${nomorown}
 ❒ XiaFeixuan : ${nomorown2}
------- ${nameown} -------

*Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} 𝗦𝗜𝗠𝗣𝗟𝗘 𝗕𝗜𝗢𝗗𝗔𝗧𝗔 ${htka}
${htjava} 𝗡𝗮𝗺𝗮 : 𝗫𝗶𝗮𝗻𝘇𝗵𝗲 𝗜𝗗
${htjava} 𝗚𝗲𝗻𝗱𝗲𝗿 : 𝗣𝗿𝗶𝗮
${htjava} 𝗨𝘀𝗶𝗮 : 𝟭𝟳
${htjava} 𝗛𝗼𝗯𝗶 : 𝗞𝗼𝗺𝗶𝗸
${htjava} 𝗔𝘀𝗮𝗹 : 𝗜𝗻𝗱𝗼𝗻𝗲𝘀𝗶𝗮, 𝗝𝗮𝘄𝗮 𝗧𝗶𝗺𝘂𝗿
footer: Instagram :\n${sig}
•·––––––––––––––––––––––––––·•
`
  let teks = 'More'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "❒ • Nomor Owner", rowId: ".owner nomor"},
	{title: "❐ • Biodata Owner", rowId: ".owner bio"},
	{title: "❐ • Script Bot", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "❐ • Donasi", rowId: ".owner nomor"},
	{title: "❐ • Sewa", rowId: ".sewa"},
	{title: "❐ • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, m, { contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
