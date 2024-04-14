const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'messageDelete',
  once: false,
  async execute(client, message) {
   const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
     limit: 1,
     type: 72
   });

    const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
    const { executor } = latestMessageDeleted;

  const embed = new EmbedBuilder()
    .setAuthor({name: "Suppression d'un message"})
    .setColor("#dc143c")
    .setDescription(`**Action**: suppression de message\n**message supprimé**: ${message.content}\n**Auteur du message**: ${message.author}`)
    .setTimestamp()
    .setFooter({text: executor.username, iconURL: executor.displayAvatarURL()});

    const log_channel = client.channels.cache.get('829443483739357264');
    log_channel.send({ embeds: [embed]});
}
}