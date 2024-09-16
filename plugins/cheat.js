const rewards = {
  exp: 999999,
  money: 999999,
  potion: 999,
}
const cooldown = 1
let handler = async (m,{ conn} ) => {
  let user = global.db.data.users[m.sender]
  if (new Date - user.lastclaim < cooldown) throw `You have already claimed this daily claim!, wait for *${((user.lastclaim + cooldown) - new Date()).toTimeString()}*`
  let text = ''
  for (let reward of Object.keys(rewards)) {
    if (!(reward in user)) continue
    user[reward] += rewards[reward]
    text += `*+${rewards[reward]}* ${global.rpg.emoticon(reward)}${reward}\n`
  }
  conn.sendButton(m.chat,`${htki} DAILY ${htka}`, text.trim(), null, ['Cheat Lagi', '.cheat']],m)
  user.lastclaim = new Date * 1
}
handler.help = ['claim']
handler.tags = ['xp']
handler.command = /^(cheat)$/i
handler.owner = true
handler.cooldown = cooldown

export default handler