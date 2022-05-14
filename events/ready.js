const { Client } = require("discord.js");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  try {
    console.log(`[✔] `.green + client.user.username.cyan + ` Started`.green);
    // console.log(`[✔] ${client.user.us}`);
    client.user.setActivity(`with cioara's mamy`, { type: 'PLAYING' }); //statusul la bot
  } catch (err) {
    client.error(err);
  }
};