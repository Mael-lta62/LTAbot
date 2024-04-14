module.exports = {
  name: 'remxp',
  category: 'Experience',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'removeexperience',
  examples: ['removeexperience'],
  description: 'Enlève l\expérience de l\'utilisateur',
  async run(client, message, args) {
    const user = message.mentions.members.first() || message.member;
    const expToRemove = parseInt(args[1]);
    if (isNaN(expToRemove)) return message.reply("faut entrer un nombre dummy !");
    client.removeExp(client, user, expToRemove);
    message.channel.send(`Vous avez enlevé avec succès ${expToRemove} points d'expérience à l'utilisateur ${user} !`);
  },
};