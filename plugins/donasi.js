let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Dana [087833474586]
│ • Gopay [087833474586]
│ • OVO [087833474586]
│ • LinkAja [087833474586]
│ • BRI [6555-0103-2119-535]
│ • QRIS [ wa.me/6287833474586 ]
│ • Telkomsel [085236209052]
╰────

╭─「 Donasi • Non Pulsa 」
│ • QRIS Chat Owner di wa.me/6287833474586
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler