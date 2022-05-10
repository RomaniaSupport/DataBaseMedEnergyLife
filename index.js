const { default: Discord, Client } = require("discord.js");
require("colors");
require("dotenv").config();
const { readdirSync } = require("fs");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"], allowedMentions: { repliedUser: false } });

console.clear();
console.log("-".repeat(36).yellow);

console.log("[!] Starting".blue);

readdirSync("./handlers/").map((d) => {
  if (typeof (i = require("./handlers/" + d)) === "function") {
    i(client);
  }
});

client.login(process.env.TOKEN);