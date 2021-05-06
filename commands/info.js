module.exports = function (message) {
  message.channel.send(
    `You are on the ${message.guild.name} \nTotal Members:${message.guild.memberCount} \nCreated:${message.guild.createdAt} \nLocation:${message.guild.region}`
  );
};
