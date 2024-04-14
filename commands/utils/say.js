module.exports = {
  name: 'say',
  category: 'utils',
  ownerOnly: false,
  usage: 'say',
  examples: ['say'],
  permissions: ['ADMINISTRATOR'],
  description: 'dit ce que vous dites et supprime votre message',
  run(client, message, args) {
    message.delete()
    message.channel.send(args.join(" "));
  },
};