let handler = async m => m.reply(`
1. Jangan spam bot. ð
Sanksi: â WARN/SOFT BLOCK

2. Jangan telepon bot. âï¸
Sanksi: â SOFT BLOCK

3. Jangan mengeksploitasi bot.ð
Sanksi: PERMANENT BLOCK

ð¯ï¸ Bot tidak atau lambat merespon ?
â¡ï¸ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rulesâ¼ï¸

ð¯ï¸ Dimana saya bisa mendapatkan Script dari bot ini ?
â¡ï¸ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

ð¯ï¸ Boleh saya menambah ke grup?
â¡ï¸ Untuk menambah IZUMI-BOT kedalam grup ketik !join.

ð¯ï¸ Prefixnya apa ya?
â¡ï¸ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #,!. Dan prefix wajar lainnya.

ð¯ï¸ Kak, kok sayaa chat owner tidak direspon?
â¡ï¸ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik !menu untuk memulai!

â ï¸ Segala kebijakan dan ketentuan IZUMI-BOT di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(ï¹) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan IZUMI-BOT
ðð
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler
