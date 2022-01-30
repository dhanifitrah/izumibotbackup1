let hmtai = require('hmtai')
let limit = 30
let handler = async(m, { conn }) => {

let img = await hmtai.nsfw.nsfwNeko()
await conn.sendFile(m.chat, img, '', '', m)

}
handler.help = ['nsfw neko']
handler.tags = ['anime']

handler.command = /^(nsfwneko)$/i
handler.limit = true
module.exports = handler