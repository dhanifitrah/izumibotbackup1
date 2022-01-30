let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.hentai()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['hentai']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(hentai)$/i
handler.limit = true
module.exports = handler
