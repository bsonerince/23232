
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutlari Özel Mesajlarda Kullanilamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + 'Çay İçiyorum')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
.setImage(`https://tenor.com/view/kermit-tea-sip-gif-4973668`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};
exports.conf = {
  enabled: true,
  aliases: [],
  guildOnly: false,
  permLevel: 0
};
exports.help = {
  name: 'cayic',
  description: 'cay İcer.',
  usage: 'cayic'
};