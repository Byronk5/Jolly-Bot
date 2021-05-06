const { prefix } = require("../config.json");
const availableCommands = {
  hello: "hello",
  info: "info",
  joke: "joke",
  weather: "weather",
  gif: "gif",
  gifSearch: "gif + category",
  clear: "clear",
};

module.exports = (message) => {
  message.channel.send(
    `Available Commands: \n\n${prefix}${availableCommands.hello} : Jolly Bot replies with a random greeting \n${prefix}${availableCommands.info}: Displays the server's info \n${prefix}${availableCommands.joke}: Jolly Bot will display a random joke \n${prefix}${availableCommands.weather}: Jolly Bot will tell you about the weather \n${prefix}${availableCommands.gif}: Jolly Bot will fetch a random pirate themed gif \n${prefix}${availableCommands.gifSearch}: Search a gif category of your choosing \n${prefix}${availableCommands.clear}: Will clear 99 messages that are up to 2 weeks old (will not work for members without the appropriate permissions) `
  );
};
