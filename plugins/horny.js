let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.public()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['horny']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(horny)$/i
handler.limit = true
module.exports = handler
