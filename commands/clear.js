module.exports = (message) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.reply("You do not have the needed permissions to delete messages");
  } else if (message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.bulkDelete(99);
  }
};
