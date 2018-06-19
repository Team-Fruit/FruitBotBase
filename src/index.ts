import * as Discord from 'discord.js';
const client = new Discord.Client();

client.login(process.env.NODE_DISCORD_TOKEN);