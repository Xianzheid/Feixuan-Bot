//*Creator Xianzhe ID =>https://nsfw-images-detection-and-classification.p.rapidapi.com/adult-content

import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = ''https://nsfw-images-detection-and-classification.p.rapidapi.com?apikey=7b963ed00amsh0b1ca4f45a44f82p1b048fjsn68c1f3d49e7a'
	conn.sendButton(m.chat, 'Nah ', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(nsfw2)$/i
handler.tags = ['nsfw', 'premium']
handler.help = ['nsfw']
handler.limit = true
handler.premium = true
handler.register = true

export default handler
