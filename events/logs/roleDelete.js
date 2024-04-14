const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'roleDelete',
  once: false,
  async execute(client, role) {
   const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
     limit: 1,
     type: 32
   })
    const latestRoleDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestRoleDeleted;

  const embed = new EmbedBuilder()
    .setAuthor({name: "Suppression d'un rôle"})
    .setColor("#dc143c")
    .setDescription(`**Action**: Suppression d'un rôle\n**Rôle supprimé**: \`\`\`diff\n-${role.name} \`\`\``)
    .setTimestamp()
    .setFooter({text: executor.username, iconURL: executor.displayAvatarURL()});

    const log_channel = client.channels.cache.get('829443483739357264');
    log_channel.send({ embeds: [embed]});
}
}