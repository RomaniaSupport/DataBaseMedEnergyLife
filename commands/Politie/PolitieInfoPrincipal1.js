const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "polinfoprincipal",
  descrpition: "InfoPolitie",
  category: "staff",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    try {
      if(message.member.roles.cache.some(r => r.id === "973815019227725864")) { // rolul care poare folosi comanda
        let embed = new MessageEmbed() // mai jos e embedul
        .setTitle("Categorii Disponibile")
        .addField("📆┋activitatea", "```!polinfo1```", false)
        .addField("📆┋cerere-concediu", "```!polinfo2```", false)
        .addField("🏢┋dovada-la-suspendarea-permisului", "```!polinfo3```", false)
        .addField("📂┋evidenta-amenzi", "```!polinfo4```", false)
        .addField("🏢┋evidenta-dosare-penale ", "```!polinfo5```", false)
        .addField("🏢┋stergere-dosare-penale", "```!polinfo6```", false)
        .addField("🏢┋detinuti", "```!polinfo7```", false)
        .addField("🧾┋mandat-de-perchezitie", "```!polinfo8```", false)
        .addField("✍┋cerere-sias", "```!polinfo9```", false)
        .addField("✍┋cerere-moto", "```!polinfo10```", false)
        .addField("📂┋evidenta-descarcare-portarma", "```!polinfo11```", false)
        .addField("📘┋demisia", "```!polinfo12```", false)
        .addField("🏢┋predare-sns-pistol", "```!polinfo13```", false)
        .setImage(encodeURI(`https://cdn.discordapp.com/attachments/955031401210732597/955911898812002396/Unbenannt-1.png`))
        .setColor("BLUE")
      await message.channel.send({ embeds: [embed] });
      message.delete(1000);
      }else {
        message.reply(`Nu ai rolul bengos`).then(msg => {setTimeout(() => msg.delete(), 30000)}) // mesajul trimis in caz ca foloseste comanda si nu are rolul
      }
    } catch (err) {
      client.error(err);
    }
  },
};