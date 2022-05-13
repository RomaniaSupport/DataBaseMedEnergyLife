const { MessageEmbed } = require('discord.js')
const simplydjs = require('simply-djs')

module.exports = {
    name: "verify",
    category: "verify",
    run: async (client, message) => {
      let embed = new MessageEmbed()
        .setTitle("For moky")
        .setDescription("Apasa in plm pe botoane unde vezi banana")
        .setImage("https://cdn.discordapp.com/attachments/973931155550265366/973931180074344498/monkey-kinkytwt_1.gif")
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: '974549649727815760',
        label: 'babana',
        color: 'SUCCESS',
        emoji: '🍌'
      }
    ],
  })
  message.delete(1000);
}
}