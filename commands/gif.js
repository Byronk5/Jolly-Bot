const { attribution } = require("../config.json");
const fetch = require("node-fetch");

module.exports = async function (message, args) {
  let keywords = "pirate";

  if (args.length > 0) {
    keywords = args.join(" ");
  }

  const url = `https://api.giphy.com/v1/gifs/search?&api_key=${process.env.GIPHY_API_KEY}&q=${keywords}&limit=25&offset=0&rating=g&lang=en`;
  const response = await fetch(url);
  const json = await response.json();
  const randomGif = Math.floor(Math.random() * json.data.length);
  message.reply(json.data[randomGif].url);
  message.channel.send(attribution);
};
