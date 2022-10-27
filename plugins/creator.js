const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n'
                    + 'VERSION:3.0\n' 
                    + `N:;${global.ownername};;;`
                    + `FN:${global.ownername}\n`
                    + `ORG:${global.ownername}\n`
                    + `item1.TEL;waid=6285326781097:+62 853-2678-1097\n\nitem2.URL:https://desty.page/xianzhe\nitem3.EMAIL;type=INTERNET:xtc5ana@gmail.com\nitem4.ADR:;;Indonesia\n`
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Aldi', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
