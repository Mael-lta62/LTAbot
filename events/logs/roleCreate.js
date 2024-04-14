const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'roleCreate',
  once: false,
  async execute(client, role) {
   const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
     limit: 1,
     type: 30
   })

    const latestRoleCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestRoleCreated;

  const embed = new EmbedBuilder()
    .setAuthor({name: "Création d'un rôle"})
    .setColor("#21ff81")
    .setDescription(`**Action**: Création d'un rôle\n**Rôle créé**: \`\`\`diff\n+${role.name} \`\`\`\n**Permissions**: ${role.permissions}`)
    .setTimestamp()
    .setFooter({text: executor.username, iconURL: executor.displayAvatarURL()});

    const log_channel = client.channels.cache.get('829443483739357264');
    log_channel.send({ embeds: [embed]});
}
}