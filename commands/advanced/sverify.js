const { MessageEmbed } = require('discord.js')
const simplydjs = require('simply-djs')

module.exports = {
    name: "verify",
    category: "verify",
    run: async (client, message) => {
      let embed = new MessageEmbed() //embed-ul
        .setTitle("For moky")
        .setDescription("Apasa in plm pe botoane unde vezi banana")
        .setImage("https://cdn.discordapp.com/attachments/973931155550265366/973931180074344498/monkey-kinkytwt_1.gif")
simplydjs.btnrole(client, message, {
    embed: embed,
    data: [
      {
        role: '974549649727815760',//rolul pe care il da botul cand apesi pe buton
        label: 'babana', //numele la button
        color: 'SUCCESS', //culoarea sau stilul lui
        emoji: '🍌' //emoji-ul de la buton
      }
    ],
  })
  message.delete(1000);
}
}