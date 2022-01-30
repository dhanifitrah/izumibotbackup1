let hmtai = require('hmtai')
let limit = 30
let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.incest ()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['incest']
handler.tags = ['anime']

handler.command = /^(incest)$/i
handler.limit = true
module.exports = handler