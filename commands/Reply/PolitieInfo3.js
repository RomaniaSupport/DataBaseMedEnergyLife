const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "polinfo3",
  descrpition: "InfoPolitie",
  category: "informatie",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    try {
      let embed = new MessageEmbed() //mai jos e embed-ul
      .setTitle("Activitate")
      .addField("```Copiati si completati modelul de mai jos:```", " **La intrare pe tura completati ⏬ Model** \n ```!sapolinfo1 . \n \n Ora Intrarii pe tura:   ``` \n **La iesirea de pe tura completati ⏬ Model** ```!sapolinfo1 . \n \n Ora Intrarii pe tura:  \n Iesirea de pe tura:  \n Minute Totale :\n Minute de Pauza / Abateri:``` ", true)
      .setImage(encodeURI(`https://cdn.discordapp.com/attachments/955882211117269052/956984702726717530/Unbenannt-1activitate.png`))
      .setColor("BLUE")

      await message.channel.send({ embeds: [embed] }).then(msg => {setTimeout(() => msg.delete(), 5000)}); //message.reply => message.channel.send
      message.delete(1000);
    } catch (err) {
      client.error(err);
    }
  },
};