const { Message, Client, WebhookClient, MessageEmbed } = require("discord.js");

module.exports = {
    name: "aplicati",
    category: "feedback",
    /**
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message, args) => {
        try {
            let alt = new WebhookClient({ url: "https://canary.discord.com/api/webhooks/973899319675584523/Nf1nOd0Tkws8MYQBZ2Tgj8UOS8kcWIECrfnOlNWRWWseylMwYB8ZtEhPudkZabBZV-Ej" });
            //webhook-ul pe care trimite aplicatia
            let channel1 = client.channels.cache.get('973903474372771880')
            //primul canal unde trimite
            let channel2 = client.channels.cache.get('973916324059295785')
            //al doilea canal unde trimite
            let channel3 = client.channels.cache.get('977849591888216094')
            let arguments = args.slice(0).join(' ');
            var embed = new MessageEmbed() // mai jos embed-ul
            .setTitle(message.author.tag)
            .addField("De La Angajatul :", `<@${message.author.id}> `)
            .setThumbnail(message.author.avatarURL())
            .setColor("#0000ff")
            .setDescription(args.join(" "))
            .setTimestamp()
            var feeds = new MessageEmbed() //mesajul pe care il trimite in canal sa termine de completat cererea
            .setTitle(message.author.tag)
            .setDescription(" Partea nr. 1️⃣ a fost Trimisa cu succes !  \n  Lipseste paretea a2a ! Bafta .")
            .setColor("#0000ff")
            .setTimestamp()
            .setThumbnail(message.author.avatarURL())
            if(!arguments) return message.reply("Ai uitat sa completezi boss").then(msg => {setTimeout(() => msg.delete(), 30000)});
            // in caz ca a uitat sa completeze
            if(!channel1) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!").then(msg => {setTimeout(() => msg.delete(), 60000)});
            if(!channel2) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!").then(msg => {setTimeout(() => msg.delete(), 60000)});
            if(!channel3) return message.reply("Aceasta camera a fost stearsa te rugam contacteaza un admin!").then(msg => {setTimeout(() => msg.delete(), 60000)});
            // in caz ca una din camere lipseste da reply cu mesajul de mai sus [channel1, channel2]

            await channel1.send({ embeds: [embed] }).then(m => { // reactiile la mesajul de pe channel1
                m.react("✅")
                m.react("❌")
            });
            message.delete(1000);
            await alt.send({ embeds: [embed] });
            await channel2.send({ embeds: [feeds] }).then(msg => {setTimeout(() => msg.delete(), 30000)});
            await channel3.send({ embeds: [embed] })
        } catch (err) {
          client.error(err);
        }
    },
}