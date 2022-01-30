let hmtai = require('hmtai')
let limit = 30

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.blowjob()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['blowjob']
handler.tags = ['anime']

handler.command = /^(blowjob)$/i


handler.limit = true
module.exports = handler