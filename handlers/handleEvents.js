const { Client } = require("discord.js");

const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  try {
    console.log("-".repeat(36).yellow);
    console.log("[!] Initiating Event Handler!".blue);
    console.log("-".repeat(36).yellow);

    const events_dir = readdirSync("./events/").filter((f) => f.endsWith(".js"));
    events_dir.map((e) => {
      const event_file = require(`../events/${e}`);

      if (typeof event_file === "function") {
        const event_name = e.split(".js")[0];
        client.on(event_name, event_file.bind(null, client));
        console.log(`[✔] Loaded [`.green + event_name.cyan + `] Event`.green);
      }
    });

    console.log("-".repeat(36).yellow);
  } catch (err) {
    client.error(err);
  }
};