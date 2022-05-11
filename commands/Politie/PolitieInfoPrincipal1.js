const { Message, Client, MessageEmbed } = require("discord.js");
const { roles } = require("../../config.json");

module.exports = {
  name: "polinfoprincipal1",
  descrpition: "InfoPolitie",
  category: "staff",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    try {
      if (message.member.roles.cache.some(r => roles.includes(r.id)) ) {
        let embed = new MessageEmbed()
        .setTitle("Categorii Disponibile")
        .addField("_", "_", true)
        .addField("📆┋activitatea", "```!polinfo1```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("📆┋cerere-concediu", "```!polinfo2```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("🏢┋dovada-la-suspendarea-permisului", "```!polinfo3```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("📂┋evidenta-amenzi", "```!polinfo4```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("🏢┋evidenta-dosare-penale ", "```!polinfo5```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("🏢┋stergere-dosare-penale", "```!polinfo6```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("🏢┋detinuti", "```!polinfo7```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("🧾┋mandat-de-perchezitie", "```!polinfo8```", true)
        .addField("_", "_", true)
        .setImage(encodeURI(`https://cdn.discordapp.com/attachments/955882211117269052/956278627488653402/Unbenannt-222.png`))
        .setColor("BLUE")
      await message.reply({ embeds: [embed] });
      }else {
        message.reply(`Nu ai rolul bengos`).then(msg => {setTimeout(() => msg.delete(), 30000)})
      }
    } catch (err) {
      client.error(err);
    }
  },
};