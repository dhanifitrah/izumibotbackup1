let limit = 30

let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage?q=bdsm&apikey=kohalip`
  conn.sendFile(m.chat, res, 'bdsm.jpg', 'gini amat punya fetish', m)
}
handler.help = ['bdsm']
handler.tags = ['anime']

handler.command = /^(bdsm)$/i
handler.limit = true
module.exports = handler
