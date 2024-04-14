const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'accueil',
  category: 'utils',
  ownerOnly: false,
  usage: 'accueil',
  examples: ['accueil'],
  permissions: ['ADMINISTRATOR'],
  description: `Envoie le message d'accueil`,
  run(client, message) {
    message.delete()
      const embed = new EmbedBuilder()
      .setColor("#dc143c")
      .setTitle("La Taverne Angevine")
      .setURL("https://lta-corpo.fr/")
      .setDescription(`Bienvenue sur le serveur\nNous sommes en développement du bot, si vous avez des problèmes avec les rôles faîtes appel à Maël !`)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() });
      message.channel.send({ embeds: [embed]});
  },
  runInteraction(client, interaction) {
      const embed = new EmbedBuilder()
      .setColor("#dc143c")
      .setTitle("La Taverne Angevine")
      .setURL("https://lta-corpo.fr/")
      .setDescription(`Bienvenue sur le serveur\nNous sommes en développement du bot, si vous avez des problèmes avec les rôles faîtes appel à Maël !`)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() });
      interaction.reply({ embeds: [embed]})
  }
};