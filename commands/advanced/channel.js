const { Message, Client, WebhookClient, MessageEmbed, Permissions } = require("discord.js");
const { categorie, can_create, webhook, color, testers, coleader } = require("../../parametri.json")

module.exports = {
    name: "create",
    descrpition: "Cum sa creezi un canal",
    category: "creaza",
  
    /**
     *
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message, args) => {
        const hook = new WebhookClient({ url: webhook });
        const creator_hook = new MessageEmbed().setColor(color).setTitle("Rol disparut!!!").setDescription("Unl din rolurile pentru comanda !create nu mai exista. Ce se intampal??");
        const category_hook = new MessageEmbed().setColor(color).setTitle("Categorie disparuta!!!").setDescription("Categoria pentru comanda !create nu mai exista. Ce se intampal??");
        let categories = message.guild.channels.cache.find(category => category.id === categorie);
        if (!categories) return hook.send({ embeds: [category_hook] }), message.reply("Te rog da tag la un admin! Categoria nu mai exista.");
        let creator = message.guild.roles.cache.some(role => role.id === can_create)
        if (!creator) return hook.send({ embeds: [creator_hook] }), message.reply("Eroare interna");
        let test = message.guild.roles.cache.find(role => role.id === testers)
        if (!test) return hook.send({ embeds: [creator_hook] }), message.reply("Eroare interna");
        let staff = message.guild.roles.cache.find(role => role.id === coleader)
        if (!staff) return hook.send({ embeds: [creator_hook] }), message.reply("Eroare interna");
        if (!message.member.roles.cache.some(role => role.id === can_create)) return message.reply("Nu poti folosi comanda pentru ca nu ai rolul necesar!");
        let arguments = args.slice(0).join(' ');
        if(!arguments) return message.reply("Ai uitat sa iti pui id-ul");
        const channelName = `${message.author.username}-` + arguments
        if (message.guild.channels.cache.find(channel => channel.name === `${message.author.username.toLowerCase()}-` + arguments)) return message.reply("Ai deja un ticket deschis.");
        try {
            let embed = new MessageEmbed()
            .setColor("RED")
            .addField("Dosarul Angajatului :", `<@${message.author.id}> \n Model de Raport Medical : \n ↘️ \n Numarul Raportului Medical \n Locatia Preluarii Pacientului \n Ora Preluarii Pacientului \n Diagnosticul Constatat \n Procedurile Medicale aplicate pe Pacient \n Card de sanatate Pacient [d/n] \n Costuri Suplimentare [d/n] \n Ora si Locatia Plecarii Pacientului .`)
            .addField(`Angajatul cu CNP-ul : `, arguments)
            .setTimestamp()

            .setImage(encodeURI(`https://cdn.discordapp.com/attachments/852551885361774642/856307237882822656/Screenshot_5.png`))
            message.guild.channels.create(channelName, {
                 parent: categories.id,
                 type: 'GUILD_TEXT',
                 topic: `Cerere facuta de: ${message.author.id}`,
                 permissionOverwrites: [
                    {
                      id: message.author.id,
                      allow: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: message.guild.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: test,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    {
                        id: staff,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL],
                    },
                    
                 ],
                }).then(c => {
                c.send({ embeds: [embed] })
            })} catch (err) {
            client.error(err);
          }
    },
  };