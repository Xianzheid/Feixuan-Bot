let toM = a => '@' + a.split('@')[0]

let handler = async (m, { 
conn, usedPrefix, text, participants, groupMetadata
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastngocok)
    let _timers = (10 - __timers)
    let timers = clockString(_timers) 
    let cheater = await conn.getName(m.sender)
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    
    if (user.stamina < 0) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat8`)
    if (user.lastngocok > 10) throw m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`)
    
    
    let rndm1 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm2 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm3 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm4 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm5 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm6 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm7 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm8 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
		let rndm9 = `${Math.floor(Math.random() * 9999999999999999999999999999)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)
let ran4 = (rndm4 * 10)
let ran5 = (rndm5 * 10)
let ran6 = (rndm6 * 10)
let ran7 = (rndm7 * 10)
let ran8 = (rndm8 * 10)
let ran9 = (rndm9 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`
let hmsil4 = `${ran4}`
let hmsil5 = `${ran5}`
let hmsil6 = `${ran6}`
let hmsil7 = `${ran7}`
let hmsil8 = `${ran8}`
let hmsil9 = `${ran9}`

let jln = `
⬛⬛⬛⬛⬛⬛⬛⬛🚶⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

✔️ ${cheater} Mencari Hacker....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛🚶
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

➕ ${cheater} Menemukan Hacker....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🚶

➕ ${cheater} Mulai Nge-Cheat Bersama Hacker....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🚶

➕ ${cheater}
💹 Menerima Hasil Nge-Cheat....
`

let hsl = `
*《 Hasil Nge-Cheat ${cheater} 》*

 *💎 = [ ${hmsil1} ] Diamond*
 *⛓️ = [ ${hmsil2} ] Iron*
 *🪙 = [ ${hmsil3} ] Gold*
 *💚 = [ ${hmsil4} ] Emerald*
 *🪨 = [ ${hmsil5} ] Rock*
 *🌕 = [ ${hmsil6} ] Clay*
 *🕳️ = [ ${hmsil7} ] Coal*
 *🌑 = [ ${hmsil8} ] Sand*
 *✉️ = [ ${hmsil9} ] Exp*
 
 Stamina anda berkurang -0
`

user.diamond += hmsil1
		user.iron += hmsil2
		user.gold += hmsil3
		user.emerald += hmsil4
		user.rock += hmsil5
		user.clay += hmsil6
		user.coal += hmsil7
		user.sand += hmsil8
		user.exp += hmsil10
		user.stamina -= 20
	
setTimeout(() => {
    conn.sendButton(m.chat, hsl, wm, null, [['Inventory', '/inv']], m, { mentions: conn.parseMention(hsl) })
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln4, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln3, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln2, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, jln, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.sendHydrated(m.chat, `🔍 ${cheater} Mencari Area ngocok.....`, botdate, null, null, null, null, null, [
      [null, null]
    ], null)
                     }, 0) 
  user.lastngocok = new Date * 1
}
handler.help = ['owner']
handler.tags = ['owner']
handler.command = /^(ngecheat)$/i
handler.owner = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
