let handler = async (m, { conn }) => {
  m.reply('Loading...')
  let res = `https://api.ichikaa.xyz/api/randomimage?q=maid&apikey=kohalip`
  conn.sendFile(m.chat, res, 'maid.jpg', 'Fetish kok sama babu', m)
}
handler.help = ['maid']
handler.tags = ['anime']

handler.command = /^(maid)$/i

module.exports = handler
