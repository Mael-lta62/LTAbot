const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'roleUpdate',
  once: false,
  async execute(client, oldRole, newRole) {
  if (oldRole.name != newRole.name) {
    const embed = new EmbedBuilder()
      .setAuthor({name: oldRole.guild.name})
      .addFields([
        {name: `Ancien nom`, value: ` \`\`\`diff\n-${oldRole.name} \`\`\` ` },
        {name: `Nouveau nom`, value: ` \`\`\`diff\n+${newRole.name} \`\`\` ` },
        ])
      .setTitle(`📝 Role modifié !`)
      .setColor(`#FBB700`)
      .setTimestamp()
      .setFooter({text: client.user.username, iconURL: client.user.displayAvatarURL()});
      
      const log_channel = client.channels.cache.get('829443483739357264');
    log_channel.send({ embeds: [embed]});
  };
}
}

