const { Message, Client } = require("discord.js");
const { roles } = require("../../config.json");

module.exports = {
    name: "say",
    usage: "!say <mesajul>",
    description: "Trimite mesajul pe acelasi canal doar ca trimis de bot",
    category: "staff",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   */
    run: async (client, message, args) => {
        try {
            let arguments = args.slice(0).join(' ');
            if(!arguments) return message.reply("Ai uitat sa completezi boss");
            if(message.member.roles.cache.some(r => roles.includes(r.id)) ) {
                await message.channel.send(arguments);
                message.delete(1000);
            }else {
                message.reply(`Nu ai rolul bengos`).then(msg => {setTimeout(() => msg.delete(), 30000)})
            }
            
        } catch (err) {
          client.error(err);
        }
    },
}