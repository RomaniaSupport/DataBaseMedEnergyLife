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
      simplydjs.clickBtn(interaction, {
        embedDesc: 'Default embed tati',
        embedColor: '#075FFF', // default: #075FFF
        closeColor: 'blurple', //default: blurple
        closeEmoji: '🍌', // default: 
        
        delColor: 'grey', // default: grey
        delEmoji: '🍌', // default: ❌
        openColor: 'green' , // default: green
        openEmoji: '🍌', // default: 🔓
        timeout: true, // default: true | Needs to be boolean (true/false)
      
        cooldownMsg: 'Ho in pula mea ai draci pe tine',
        })
    })
  } catch (err) {
    client.error(err);
  }
};