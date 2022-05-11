const { Message, Client, MessageEmbed } = require("discord.js");
const { roles } = require("../../config.json");

module.exports = {
  name: "polinfoprincipal2",
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
        const embed = new MessageEmbed()
        .addField("_", "_", true)
        .addField("✍┋cerere-sias", "```!polinfo9```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("✍┋cerere-moto", "```!polinfo10```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("📂┋evidenta-descarcare-portarma", "```!polinfo11```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("📘┋demisia", "```!polinfo12```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("🏢┋predare-sns-pistol", "```!polinfo13```", true)
        .addField("_", "_", true)
        .addField("_", "_", true)
        .addField("📘┋sancțiuni-membri", "```!polinfo14```", true)
        .addField("_", "_", true)
        .setImage(encodeURI(`https://cdn.discordapp.com/attachments/955031401210732597/955911898812002396/Unbenannt-1.png`))
        .setColor("BLUE")
        .setFooter("Informatii: Pentru a adauga in Arhiva informatii , copiati una din comenziile de mai sus pentru a primi respectivul EXEMPLU !\n Dupa completarea acestuia trimiteti mesajul , DACA ati gresit la trimiterea acestuia va rugam sa dati cu X \n prin actiunea votarii cu X acesta va fi revizuit de catre un membru capabil de stergerea acestui document din arhiva")
      await message.reply({ embeds: [embed] });
      }else {
        message.reply(`Nu ai rolul bengos`).then(msg => {setTimeout(() => msg.delete(), 30000)})
      }
    } catch (err) {
      client.error(err);
    }
  },
};