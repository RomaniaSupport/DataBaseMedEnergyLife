const { Message, Client } = require("discord.js");

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
            if(!arguments) return message.reply("Ai uitat sa completezi boss"); //in caz ca ai uitat sa completezi
            if(message.member.roles.cache.some(r => r.id === "973815019227725864") ) { //daca nu ai rolul asta nu poti folosi comanda
                await message.channel.send(arguments);
                message.delete(1000);
            }else {
                message.reply(`Nu ai rolul bengos`).then(msg => {setTimeout(() => msg.delete(), 30000)}) //mesajul care zice ca nu ai rolul si nu poti folosi comanda
            }
            
        } catch (err) {
          client.error(err);
        }
    },
}