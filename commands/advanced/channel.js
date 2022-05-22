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
        //embed-ul pentru eroare de rol disparut (prin webhook)
        const category_hook = new MessageEmbed().setColor(color).setTitle("Categorie disparuta!!!").setDescription("Categoria pentru comanda !create nu mai exista. Ce se intampal??");
        //embed-ul pentru eroarea de categorie disparuta (prin webhook)
        let categories = message.guild.channels.cache.find(category => category.id === categorie);
        if (!categories) return hook.send({ embeds: [category_hook] }), message.reply("Te rog da tag la un admin! Categoria nu mai exista.");
        //daca catergoria nu exista reply pentru user
        let creator = message.guild.roles.cache.some(role => role.id === can_create)
        if (!creator) return hook.send({ embeds: [creator_hook] }), message.reply("Eroare interna");
        //daca unul din roluri nu exista reply pentru user
        let test = message.guild.roles.cache.find(role => role.id === testers)
        if (!test) return hook.send({ embeds: [creator_hook] }), message.reply("Eroare interna");
        //daca unul din roluri nu exista reply pentru user
        let staff = message.guild.roles.cache.find(role => role.id === coleader)
        if (!staff) return hook.send({ embeds: [creator_hook] }), message.reply("Eroare interna");
        //daca unul din roluri nu exista reply pentru user
        if (!message.member.roles.cache.some(role => role.id === can_create)) return message.reply("Nu poti folosi comanda pentru ca nu ai rolul necesar!");
        //nu ai permisiune sa folosesti comanda
        let arguments = args.slice(0).join(' ');
        if(!arguments) return message.reply("Ai uitat sa iti pui id-ul");
        //ai uitat sa completezi comanda
        const channelName = arguments +`-${message.author.username}` //numele la canal
        if (message.guild.channels.cache.find(channel => channel.name === arguments +`-${message.author.username.toLowerCase()}`)) return message.reply("Ai deja un ticket deschis.");
        // daca un canal cu numele asta exista deja nu mai creeaza altul
        if(message.channel.id === '973633784404643842') {
            try {
                let embed = new MessageEmbed() //embed-ul pe care il trimite pe canalul creeat
                    .setColor('#ff0000')
                    .setTitle(`Canalul membrului STAFF - ${message.author.tag}`)
                    .setThumbnail(`https://cdn.discordapp.com/attachments/955545048827711578/976945819460706354/unknown.png`)
                    .setDescription(`${message.author.tag} (${arguments}), bun venit in canalul tau, destinat pentru: **activitate**, **intrebari**, **probleme**, **inactivitati**, cat si pentru **demisie**.\n\n**[!]** Dezvaluirea mesajelor din aceasta camera este strict **INTERZISA**, se se sanctioneaza drastic!`)
                    .addFields(
                        { name: '` 1 ` Activitate', value: 'ㅤ- camera aceasta este pentru contorizarea activitatii, inainte de fiecare sedinta trebuie sa puneti o poza cu activitatea din joc (/orejucate);\nㅤ- de preferat sa postati poza inainte de sedinta pentru a putea fi contorizata;' },
                        { name: '` 2 ` Inactivitate', value: 'ㅤ- daca nu puteti intra pe o durata de `24h` pe server, va rugam sa postati o cerere de inactivitate pentru a evita sanctionarea dvs.;\nㅤ- postarea inactivitatii se va face cu urmatorul model:\nㅤㅤ`Nume:` \nㅤㅤ`Gradul pe care-l detii:` \nㅤㅤ`Numarul zilelor de inactivitate:` \nㅤㅤ`Data inceperii(ZZ/LL/AA):` \nㅤㅤ`Data revenirii(ZZ/LL//AA):` \nㅤㅤ`Motivul:` \nㅤㅤ`Alte precizari:` ' },
                        { name: '` 3 ` Demisie', value: 'ㅤ- postarea demisiei se va face cu urmatorul model:\nㅤㅤ`Nume:` \nㅤㅤ`Gradul pe care-l detii:` \nㅤㅤ`Data ultimei promovari:` \nㅤㅤ`Perioada de activitate:` \nㅤㅤ`Motivul demisiei:` \nㅤㅤ`Alte precizari:` '},
                    )
                    .setTimestamp()
                message.guild.channels.create(channelName, {
                     parent: categories.id,
                     type: 'GUILD_TEXT',
                     topic: `Cerere facuta de: ${message.author.id}`,
                     permissionOverwrites: [
                        {
                            id: message.author.id, //permisiuni pentru persoana cara face canalul, mai jos
                            allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES],
                        },
                        {
                            id: message.guild.id, //permisiuni pentru @everyone mai jos
                            deny: [Permissions.FLAGS.VIEW_CHANNEL],
                        },
                        {
                            id: test, //perms pentru rolul de testers
                            allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        },
                        {
                            id: staff, //perms pentru rolul de staff
                            allow: [Permissions.FLAGS.VIEW_CHANNEL],
                        },
                        
                     ],
                    }).then(c => {
                    c.send({ embeds: [embed] })
                    message.reply(`<#${c.id}>`)
                })} catch (err) {
                client.error(err);
              }
          }else message.reply('Ai gresit canalu handicapatule');
        
    },
  };