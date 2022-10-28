let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 9999999999, status: 1, surface: 1, message: `${command} ${type}`, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;Xianzhe ID;;;\nFN:Xianzhe ID\nORG:Xianzhe ID\nTITLE:\nitem1.TEL;waid=6285326781097:+62 853-2678-1097\n\nitem2.URL:https://desty.page/xianzhe\nitem3.EMAIL;type=INTERNET:xtc5ana@gmail.com\nitem4.ADR:;;Indonesia\nEND:VCARD`


//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} 𝗢𝗪𝗡𝗘𝗥 𝗕𝗜𝗢𝗗𝗔𝗧𝗔 ${htka}
${htjava} 𝗡𝗮𝗺𝗮 : 𝗫𝗶𝗮𝗻𝘇𝗵𝗲 𝗜𝗗
${htjava} 𝗚𝗲𝗻𝗱𝗲𝗿 : 𝗣𝗿𝗶𝗮
${htjava} 𝗨𝘀𝗶𝗮 : 𝟭𝟳
${htjava} 𝗛𝗼𝗯𝗶 : 𝗞𝗼𝗺𝗶𝗸
${htjava} 𝗔𝘀𝗮𝗹 : 𝗜𝗻𝗱𝗼𝗻𝗲𝘀𝗶𝗮, 𝗝𝗮𝘄𝗮 𝗧𝗶𝗺𝘂𝗿
${htjava} 𝗜𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 : ${sig}
${htjava} 𝗚𝗶𝘁𝗵𝘂𝗯 : ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "❒ • Nomor Owner", rowId: ".Creator"},
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
  title: `${htki} 𝗢𝗪𝗡𝗘𝗥 ${htka}`,
  buttonText: "Click Here !",
  sections
}

  try {
    if (/(owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'n1':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

            conn.sendButton(m.chat, teksbio, wm, [['Sewa Bot', `${usedPrefix}sewa`],['Menu', `${usedPrefix}menu`]], m{ contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: 'https://instagram.com/xianzhe_xx/',
            mediaType: 2, 
            description: sig,
            title: "Folloe",
            body: wm,
            thumbnail: fs.readFileSync('./media/xianzhe3.jpg'),
            sourceUrl: sig
             }}
          })
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

handler.help = ['owner']
handler.tags = ['main', 'info']
handler.command = /^(owner)/i

export default handler
