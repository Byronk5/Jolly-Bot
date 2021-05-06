const { prefix } = require("./config.json");

const gif = require("./commands/gif");
const hello = require("./commands/hello");
const info = require("./commands/info");
const weather = require("./commands/weather");
const joke = require("./commands/joke");
const help = require("./commands/help");
const clear = require("./commands/clear");

const commands = { gif, hello, info, weather, joke, help, clear };

module.exports = async (message) => {
  let args = message.content.split(" ");
  let command = args.shift();
  if (command.charAt(0) === `${prefix}`) {
    command = command.substring(1);
    commands[command](message, args);
  }
};
