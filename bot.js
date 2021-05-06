// "require" imports the discord .js module
const Discord = require("discord.js");
// The "client" is a javascript object that connects to the discord api giving you access to the various pieces of data and functionality you need to run your bot
require("dotenv").config();
const client = new Discord.Client();
// const config = require("./config.json");
// js destructuring

client.login(process.env.BOT_TOKEN);

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once("ready", () => {
  console.log("Good to go!!");
});

const commandHandler = require("./commands");

client.on("message", commandHandler);
