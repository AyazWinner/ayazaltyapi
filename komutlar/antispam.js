var antispam = require("anti-spam");

antispam(client, {
  warnBuffer: 3,
  interval: 1000,
  warningMessage: "Spam Atmayı Kes **Yargı İs Coming !**",
  roleMessage: "Mute Atıldı.",
  roleName: "Muted",
  maxDuplicatesWarning: 4,
  maxDuplicatesBan: 10,
  time: 10,
});
