const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'channelCreate',
  once: false,
  async execute(client,channel) {
  if (channel.type === "dm") return;
  else {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: 10
    })
 
     const latestChannelCreated = fetchGuildAuditLogs.entries.first();
     const { executor } = latestChannelCreated;
 
   const embed = new EmbedBuilder()
     .setAuthor({name: "création d'un nouveau salon"})
     .setColor("#35f092")
     .setDescription(`**Action**: création de salon\n**Salon créé**: ${channel.name}`)
     .setTimestamp()
     .setFooter({text: executor.username, iconURL: executor.displayAvatarURL()});
 
     const log_channel = client.channels.cache.get('829443483739357264');
    log_channel.send({ embeds: [embed]});

  }

}
}