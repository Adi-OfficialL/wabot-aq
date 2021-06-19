let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Tri [089504585790]
╰────


╭─「 Donasi • Non Pulsa 」
│ • Gopay [6289504585790]
│ • OVO/Dana [089504685295]
│ • https://saweria.co/mimamadi
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
