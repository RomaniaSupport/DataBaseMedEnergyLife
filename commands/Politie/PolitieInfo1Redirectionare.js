const { Message, Client, WebhookClient, MessageEmbed } = require("discord.js");

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
            const loggerhook = new WebhookClient({ url: "https://discord.com/api/webhooks/973877499492728872/LpunUYp7h0WEpvNBOX2ylLIVQsp7aFt3UaHxzq5WeJBwRQAA81NayQ24e1QKLug48lmH" });
            let channel = client.channels.cache.get('973852131801055232')
            let arguments = args.slice(0).join(' ');
            if(!arguments) return message.reply("Ai uitat sa completezi boss");
                
            if(!channel) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!");
            let embed = new MessageEmbed()
            .setTitle("SUSPENDARE PERMIS " + message.author.tag)
            .addField("De La Angajatul :", `<@${message.author.id}> `)
            .setThumbnail(message.author.avatarURL())
            .setColor("#0000ff")
            .setDescription(args.join(" "))
            .setTimestamp()
    
            
            await channel.send({ embeds: [embed] }).then(m => {
                m.react("✅")
                m.react("❌")
            });
            message.delete(1000);
            await loggerhook.send({ embeds: [embed] });
        } catch (err) {
          client.error(err);
        }
    },
}