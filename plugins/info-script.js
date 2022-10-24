import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://telegra.ph/file/f8e9f27ae13fc71e1fde7.jpg'
	conn.sendButton(m.chat, 'Nih..\nhttps://github.com/Xianzhe-ID/XiaFeixuan-Bot\n\n\nJangan Lupa Donasi:v', wm, await(await fetch(url)).buffer(), [['Donasi',`.donasi`]],m)


handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
