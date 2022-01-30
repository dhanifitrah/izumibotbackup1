// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan ketik !reqpremium nama kamu'
    if (text.length > 300) throw 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks!'
    const laporan = `*「 DAFTAR PREMIUM 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPemesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '6281515860089@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️OK, Permintaan akses premium saat ini sedang diproses, mohon ditunggu sampai owner mengechat mu!')
}
handler.help = ['reqpremium', 'reqpremium'].map(v => v + ' <nama>')
handler.tags = ['info']
handler.command = /^(reqpremium|reqprem)$/i

module.exports = handler
