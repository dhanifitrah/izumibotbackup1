let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.bdsm()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['bdsm']
handler.tags = ['anime']
handler.limit = true

handler.command = /^(bdsm)$/i
handler.limit = true
module.exports = handler
