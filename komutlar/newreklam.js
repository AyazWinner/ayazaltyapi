client.on("message", msg => {

  
    const embedlul = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setDescription("" + msg.author + "❗❗**BOTUNUZUN İSMİ** Reklam koruması aktif! Sen ne yaptığını zannediyorsun!:crown:")

const embedlulz = new Discord.RichEmbed()
    .setTitle("Sunucunda " + msg.author.tag + " **REKLAM YAPIYOR!**")
      .setColor(0x00AE86)
      .setDescription("!!uyar <kişi> komutu ile onu uyarabilir ya da !!kick <kişi> veya !!ban <kişi> komutlarını kullanarak onu sunucudan uzaklaştırabilirsin!")
    .addField("Kullanıcının mesajı:", "**" + msg.content + "**")

if (msg.content.toLowerCase().match(/(discord\.gg\/)|(discordapp\.com\/invite\/)/g) && msg.channel.type === "text" && msg.channel.permissionsFor(msg.guild.member(client.user)).has("MANAGE_MESSAGES")) {
    if(msg.member.hasPermission('BAN_MEMBERS')){
    return;
    } else {
    msg.delete(30).then(deletedMsg => {
     deletedMsg.channel.send(embedlul)
     msg.guild.owner.send(embedlulz).catch(e => {
            console.error(e);
          });
        }).catch(e => {
          console.error(e);
        });
      };
      };
