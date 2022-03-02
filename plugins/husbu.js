let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.manga()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['manga']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(manga)$/i
handler.limit = true
module.exports = handler
