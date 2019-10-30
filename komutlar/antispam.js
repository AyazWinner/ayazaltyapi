const Discord = require("discord.js");
const client = new Discord.Client();
const DiscordAntiSpam = require("discord-anti-spam");
const AntiSpam = new DiscordAntiSpam({

  warnThreshold: 3,
  banThreshold: 5,
  maxInterval: 2000,
  warnMessage: "{@user}, Lütfen ``spam` atmayı kes.", // Uyarı mesajı ne yazmasını istiyorsanız ona göre editleyin.
  banMessage: "**{user_tag}** `Spam` atmayı kesmediği için banlandı.", // Ban mesajı ne yazmasını istiyorsanız ona göre editleyin.
  maxDuplicatesWarning: 7,
  maxDuplicatesBan: 10,
  deleteMessagesAfterBanForPastDays: 1,
  ignoredUsers: [],
  ignoredGuilds: [],
  exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR", "MANAGE_GUILD", "BAN_MEMBERS"],
  ignoreBots: true,
  verbose: false,
  client: client,
  ignoredUsers: [],
  ignoredGuilds: []
});

// Developed By "viski.js"
 
AntiSpam.on("warnEmit", (member) => console.log(`Attempt to warn ${member.user.tag}.`));
AntiSpam.on("warnAdd", (member) => console.log(`${member.user.tag} has been warned.`));
AntiSpam.on("banEmit", (member) => console.log(`Attempt to ban ${member.user.tag}.`));
AntiSpam.on("banAdd", (member) => console.log(`${member.user.tag} has been banned.`));
AntiSpam.on("dataReset", () => console.log("Module cache has been cleared."));
 
client.on("ready", () => console.log(`Logged in as ${client.user.tag}.`));
 
client.on("message", (msg) => {
  AntiSpam.message(msg);
});
