let limit = 30

let hmtai = require('hmtai')

let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.ero()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['ero']
handler.tags = ['anime']

handler.command = /^(ero)$/i
handler.limit = true
module.exports = handler