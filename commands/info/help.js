const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Help",

  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message) => {
    try {
      let embed = new MessageEmbed().setColor(client.color)
      .setTitle("Comenzile Help")
      .setDescription("Mai jos sunt comenzile de help")

      await message.reply({ embeds: [embed] }).then(msg => {setTimeout(() => msg.delete(), 30000)});
    } catch (err) {
      client.error(err);
    }
  },
};