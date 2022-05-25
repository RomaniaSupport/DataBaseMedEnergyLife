const { Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: "warn",
    category: "staff",
    description: "da warn la prosti",
    /**
     * 
     * @param {Message} message 
     */
    
     run: async(client, message, args) => {
        if(!message.member.permissions.has("MANAGE_MEMBERS")) return message.reply({ content: "**Nu ai permisiune prostule!**"})
        const user = message.mentions.members.first() || client.users.cache.get(args[0]); // mentiune la user-ul pe care il vrei sau id-ul lui
        const reason = args.slice(1).join(' ') // motivul la warn
        const warn1 = message.guild.roles.cache.get('977995213463253094')
        const warn2 = message.guild.roles.cache.get('977995204667789352')
        if(!user) return message.reply({ content: "Ai uitat sa dai tag la prost!" }); // mesajul pe care il intoarce daca ai uitat sa dai tag
        if(!reason) return message.reply({ content: "Ai uirat sa pui motivul" });
        const { guild } = message
        const member = guild.members.cache.get(user.id);
        const warn1Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Discord Punishment Logs')
        .addFields(
            { name: 'Staff' , value: `${message.author.username}(${message.author.id})` },
            { name: 'User', value: `${member.displayName}(${member.id})` },
            { name: 'Sanctiune', value: `Warn 1/3, Motiv: ${reason}` },
            )
        const warn2Embed =  new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Discord Punishment Logs')
        .addFields(
            { name: 'Staff' , value: `${message.author.username}(${message.author.id})` },
            { name: 'User', value: `${member.displayName}(${member.id})` },
            { name: 'Sanctiune', value: `Warn 2/3, Motiv: ${reason}` },
            )
        const warn3Embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Discord Punishment Logs')
        .addFields(
            { name: 'Staff' , value: `${message.author.username}(${message.author.id})` },
            { name: 'User', value: `${member.displayName}(${member.id})` },
            { name: 'Sanctiune', value: `Warn 3/3, Motiv: ${reason}` },
            )
        try{
            if(!member.roles.cache.has(warn1)) {
                member.roles.add(warn1);
                message.reply({embeds: [warn1Embed]});
            } else {
                if(member.roles.cache.has(warn2)) {
                    member.removeRoles(member.roles);
                    message.reply({embeds: [warn3Embed]});
                }else {
                    member.roles.add(warn2);
                    message.reply({embeds: [warn2Embed]});
                }
            }
        } catch (err) {
            client.error(err);
        }
    }
}