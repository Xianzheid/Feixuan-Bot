import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    let yh = global.sange
    let url = yh[Math.floor(Math.random() * yh.length)]
    let text = `${global.wm}

 ┌─「 Donasi 」
 │ • *Telkomsel:* ${global.ppulsa}]
 │ • *Dana:* ${global.pdana}
 │ • *Gopay:* ${global.pgopay}
 │ • *Saweria:* ${global.psaweria}
 ❏────`

    conn.sendButton(m.chat, text , 'https://instagram.com/xianzhe_xx', url, [['Menu', '.menu']], m)
  }
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i


  export default handler
  
 global.sange = ["https://telegra.ph/file/73751fa7e99cfb5f92684.jpg",
"https://telegra.ph/file/d921e3ccfd4c4ce6eac8f.jpg",
"https://telegra.ph/file/7697fe40c5134598850d4.jpg"]