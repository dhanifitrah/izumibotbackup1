let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.masturbation()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['masturbation']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(masturbation)$/i
handler.limit = true
module.exports = handler
