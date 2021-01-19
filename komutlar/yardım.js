const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const prefix = ("s.")
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "ScOrPiO Pro Bot Komut Listesi",
              icon_url: ""
            },
			    "thumbnail": {
				 "url": "https://cdn.discordapp.com/attachments/723900017638899777/735181732944412773/turk_bayrag.gif"
			},
            title: "📜 Komutlar 📜",
            description: "📌 " + prefix + "ascii\n📌" + prefix + "\n📌 " + prefix + "atam\n📌 " + prefix + "atla\n📌 " + prefix + "avatar\n📌 " + prefix + "avatarım\n📌 " + prefix + "aşkımı-ölç\n📌 " + prefix + "balıktut\n📌 " + prefix + "ban\n📌 " + prefix + "inek\n📌 " + prefix + "davet\n📌 " + prefix +  "davetoluştur\n📌 " + prefix + "duyuru\n📌 " + prefix + "emojiler\n📌 " + prefix + "espiri\n📌 " + prefix + "havadurumu\n📌 " + prefix + "hesapla\n📌 " + prefix + "info\n📌 " + prefix + "istatistik\n📌 " + prefix + "kanalismideğiş\n📌 " + prefix + "kick\n📌 " + prefix + "korkut\n📌 " + prefix + "kullanıcıbilgim\n📌 " + prefix + "mesajdöndür\n📌 " + prefix + "sunucukur\n📌 " + prefix + "tekmeat\n📌 " + prefix + "temizle\n📌 " + prefix + "unmute\n📌 " + prefix + "uyar\n📌 " + prefix + "wasted\n📌 " + prefix + "yaz",
            fields: [
				{
                name: "ScOrPiO Pro Bot",
				inline: true,
                value: "v2.428"

              },
            ],
          }
        });  
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'ylma', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'ylma',
  description: 'Tüm komutları gösterir.',
  usage: 'ylma'
};
