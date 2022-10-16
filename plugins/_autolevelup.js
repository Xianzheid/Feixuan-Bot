import db from '../lib/database.js'
import { canLevelUp } from '../lib/levelling.js'

export function before(m) {
    let user = db.data.users[m.sender]
    if (!user.autolevelup)
        return !0
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++

    if (before !== user.level) {
        user.role = global.rpg.role(user.level).name
        m.reply(`
ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs, ${this.getName(m.sender)} ʟᴇᴠᴇʟ ᴜᴩ﹗
•  ᴩʀᴇᴠɪᴏᴜs ʟᴇᴠᴇʟ : ${before}
•  ɴᴇᴡ ʟᴇᴠᴇʟ : ${user.level}
•  ʀᴏʟᴇ : ${user.role}
gunakan *.profile* untuk mengecek
	`.trim())
    }
}
export const disabled = true
