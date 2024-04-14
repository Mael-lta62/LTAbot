const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'reseaux',
  category: 'utils',
  ownerOnly: false,
  usage: 'reseaux',
  examples: ['reseaux'],
  permissions: ['ADMINISTRATOR'],
  description: `Envoie le message des réseaux`,
  run(client, message) {
    message.delete()
      const embed = new EmbedBuilder()
      .setColor("#dc143c")
      .setTitle("Les réseaux")
      .addFields([
        { name: '<:Facebook:938496462520717423>  Facebook :', value: 'https://www.facebook.com/maelltaoff' },
        { name: '<:Instagram:938496520041431060>  Instagram :', value: 'https://www.instagram.com/maelltaoff/' },
        { name: '<:Twitter:938496494170947586>  Twitter :', value: 'https://twitter.com/maelltaoff' },
        { name: '<:Youtube:938496505323610123>  YouTube  :', value: 'https://www.youtube.com/c/MaëlLTA' },
        { name: '<:Twitch:938496480950497291>  Twitch :', value: 'https://www.twitch.tv/maelltaoff' },
        { name: '<:Tiktok:938496676442800158>  TikTok :', value: 'https://vm.tiktok.com/ZMLNEPXwW/' },
        { name: '🖥️  Site web :', value: 'http://www.lta-corpo.fr/' },
        ])
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() });
      message.channel.send({ embeds: [embed]});
  },
  runInteraction(client, interaction) {
      const embed = new EmbedBuilder()
      .setColor("#dc143c")
      .setTitle("Les réseaux")
      .addFields([
        { name: 'Facebook <:Facebook:938496462520717423> :', value: 'https://www.facebook.com/maelltaoff' },
        { name: 'Instagram <:Instagram:938496520041431060> :', value: 'https://www.instagram.com/maelltaoff/' },
        { name: 'Twitter <:Twitter:938496494170947586> :', value: 'https://twitter.com/maelltaoff' },
        { name: 'YouTube <:Youtube:938496505323610123>  :', value: 'https://www.youtube.com/c/MaëlLTA' },
        { name: 'Twitch <:Twitch:938496480950497291> :', value: 'https://www.twitch.tv/maelltaoff' },
        { name: 'TikTok <:Tiktok:938496676442800158> :', value: 'https://vm.tiktok.com/ZMLNEPXwW/' },
        { name: 'Site web 🖥️ :', value: 'http://www.lta-corpo.fr/' },
        ])
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() });
      interaction.reply({ embeds: [embed]})
  }
};