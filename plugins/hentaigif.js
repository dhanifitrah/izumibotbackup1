let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let mp4 = await hmtai.nsfw.gif()
await conn.sendFile(m.chat, mp4, '', '', m)

}
handler.help = ['hentaigif']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(hentaigif)$/i
handler.limit = true
module.exports = handler
