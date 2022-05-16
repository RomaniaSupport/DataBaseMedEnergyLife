const { Message, Client } = require("discord.js");
module.exports = {
    name: "ping",
    category: "info",
    description: "Get bot ping :/",
/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */

    run: (client, message) => {
      message.delete(1000);
      message.reply(`**Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.**`).then(msg => {setTimeout(() => msg.delete(), 30000)});
    } // comanda de ping
  }