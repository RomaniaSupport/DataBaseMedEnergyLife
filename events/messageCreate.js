const { Client, Message } = require("discord.js");
const simplydjs = require("simply-djs");
/**
 *
 * @param {Client} client
 * @param {Message} message
 */
module.exports = async (client, message) => {
  try {
    if (message.author.bot || !message.guild) return;

    const prefix = client.prefix;

    if (!message.content.startsWith(prefix)) return;

    for (const key in (cmds = client.commands.commands)) {
      if (message.content.slice(prefix.length).startsWith(key)) {
        const args = message.content
          .slice(prefix.length + key.length)
          .trim()
          .split(/[ ]+/);
        await cmds[key].run(client, message, args);
      }
    }
    client.on("interactionCreate", async interaction =>{
      simplydjs.clickBtn(interaction, {})
      simplydjs.suggestBtn(interaction)
    })
    
  } catch (err) {
    client.error(err);
  }
};