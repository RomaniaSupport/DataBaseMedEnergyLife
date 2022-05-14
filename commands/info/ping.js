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
      message.reply(`**Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms.**`);
    } // comanda de ping
  }