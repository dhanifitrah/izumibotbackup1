let handler = async m => m.reply(`
1. Jangan spam bot. 🙅
Sanksi: ❎ WARN/SOFT BLOCK

2. Jangan telepon bot. ☎️
Sanksi: ❎ SOFT BLOCK

3. Jangan mengeksploitasi bot.😖
Sanksi: PERMANENT BLOCK

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk menambah IZUMI-BOT kedalam grup ketik !join.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #,!. Dan prefix wajar lainnya.

🗯️ Kak, kok sayaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik !menu untuk memulai!

⚠️ Segala kebijakan dan ketentuan IZUMI-BOT di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(﹏) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan IZUMI-BOT
😖🙏
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^sc$/i

module.exports = handler
