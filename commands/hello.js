const helloReplies = [
  "Man yer station ye scallywag!",
  `Well 'ello there matey!!`,
  "Bring me my peg leg...and me rum  ",
  `That's CAPTAIN Jolly to you!`,
];

module.exports = function (message) {
  const random = Math.floor(Math.random() * helloReplies.length);
  message.reply(helloReplies[random]);
};
