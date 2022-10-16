let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['🤨'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(bile?k|ban?h|cum?|knt?l|y?|m(emek|mk|memeg)|col(i|mek)|clmk/i
handler.command = new RegExp
  
handler.mods = false

export default handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
