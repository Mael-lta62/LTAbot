const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'channelDelete',
  once: false,
  async execute(client,channel) {
   const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
     limit: 1,
     type: 12
   })

    const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelDeleted;

  const embed = new EmbedBuilder()
    .setAuthor({name: "Suppression d'un salon"})
    .setColor("#dc143c")
    .setDescription(`**Action**: suppression de salon\n**Salon supprimé**: ${channel.name}`)
    .setTimestamp()
    .setFooter({text: executor.username, iconURL: executor.displayAvatarURL()});

    const log_channel = client.channels.cache.get('829443483739357264');
    log_channel.send({ embeds: [embed]});
}
}