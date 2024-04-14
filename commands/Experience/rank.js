const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'rank',
  category: 'Experience',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'rank',
  examples: ['rank'],
  description: 'Donne l\'expérience de l\'utilisateur',
  async runInteraction(client, interaction) {
        const dbUser = await client.getUser(interaction.member);

        const embed = new EmbedBuilder()
        .setTitle("Ton niveau sur La Taverne Angevine")
        .setColor("#00EAFF")
        .setThumbnail(client.user.displayAvatarURL())
        .addFields([{name: 'Tu possèdes :', value: `${dbUser.level} Niveaux`, inline: true}])
        .setTimestamp()
        .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

          interaction.reply({ embeds: [embed] });
        }
};