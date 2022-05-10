const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "polinfo1",
  descrpition: "InfoPolitie",
  category: "informatie",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    try {
      const embed = new MessageEmbed()
      .setTitle("Activitate")
      .addField("```Copiati si completati modelul de mai jos:```", " **La intrare pe tura completati ⏬ Model** \n ```!activitate . \n \n Ora Intrarii pe tura:   ``` \n **La iesirea de pe tura completati ⏬ Model** ```!activitate . \n \n Ora Intrarii pe tura:  \n Iesirea de pe tura:  \n Minute Totale :\n Minute de Pauza / Abateri:``` ", true)
      .setImage(encodeURI(`https://cdn.discordapp.com/attachments/955882211117269052/956984702726717530/Unbenannt-1activitate.png`))
      .setColor("BLUE")

      await message.reply({ embeds: [embed] }).then(msg => {setTimeout(() => msg.delete(), 30000)});
    } catch (err) {
      client.error(err);
    }
  },
};