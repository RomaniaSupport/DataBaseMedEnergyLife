const { Message, Client, WebhookClient, MessageEmbed } = require("discord.js");
const { alt } = require("../../config.json");

module.exports = {
    name: "aplicati",
    category: "feedback",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message, args) => {
        try {
            let al = new WebhookClient({ url: alt });
            let channel1 = client.channels.cache.get('973903474372771880')
            let channel2 = client.channels.cache.get('973916324059295785')
            let arguments = args.slice(0).join(' ');
            var embed = new MessageEmbed()
            .setTitle(message.author.tag)
            .addField("De La Angajatul :", `<@${message.author.id}> `)
            .setThumbnail(message.author.avatarURL())
            .setColor("#0000ff")
            .setDescription(args.join(" "))
            .setTimestamp()
            var feeds = new MessageEmbed()
            .setTitle(message.author.tag)
            .setDescription(" Partea nr. 1️⃣ a fost Trimisa cu succes !  \n  Lipseste paretea a2a ! Bafta .")
            .setColor("#0000ff")
            .setTimestamp()
            .setThumbnail(message.author.avatarURL())
            if(!arguments) return message.reply("Ai uitat sa completezi boss").then(msg => {setTimeout(() => msg.delete(), 30000)});
            if(!channel1) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!").then(msg => {setTimeout(() => msg.delete(), 60000)});
            if(!channel2) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!").then(msg => {setTimeout(() => msg.delete(), 60000)});

            await channel1.send({ embeds: [embed] }).then(m => {
                m.react("✅")
                m.react("❌")
            });
            message.delete(1000);
            await al.send({ embeds: [embed] });
            await channel2.send({ embeds: [feeds] }).then(msg => {setTimeout(() => msg.delete(), 30000)});
        } catch (err) {
          client.error(err);
        }
    },
}