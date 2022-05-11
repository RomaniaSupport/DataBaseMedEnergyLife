const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "sapolinfo1",
    usage: "!sapolinfo1 <mesajul>",
    description: "Trimite mesajul pe un canal preselectat prin id",
    category: "Ticket",
    /**
   *
   * @param {Client} client
   * @param {Message} message
   */
    run: async (client, message, args) => {
        try {
            let channel = client.channels.cache.get('973822636469653574')
            let arguments = args.slice(0).join(' ');
            if(!arguments) return message.reply("Ai uitat sa completezi boss");
                
            if(!channel) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!");
            let embed = new MessageEmbed()
            .setTitle(message.author.tag)
            .setThumbnail(message.author.avatarURL())
            .setColor("#0000ff")
            .setDescription(args.join(" "))
    
            await channel.send({ embeds: [embed] }).then(m => {
                m.react("✅")
                m.react("❌")
              });
        } catch (err) {
          client.error(err);
        }
    },
}