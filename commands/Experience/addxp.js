module.exports = {
  name: 'addxp',
  category: 'Experience',
  permissions: ['ADMINISTRATOR'],
  ownerOnly: false,
  usage: 'addexperience',
  examples: ['addexperience'],
  description: 'Ajoute l\expérience de l\'utilisateur',
  async run(client, message, args) {
    const user = message.mentions.members.first() || message.member;
    const expToAdd = parseInt(args[1]);
    if (isNaN(expToAdd)) return message.reply("faut entrer un nombre dummy !");
    client.addExp(client, user, expToAdd);
    message.channel.send(`Vous avez ajouté avec succès ${expToAdd} points d'expérience à l'utilisateur ${user} !`);
  },
};