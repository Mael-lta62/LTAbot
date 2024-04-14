const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'guildMemberUpdate',
  once: false,
  async execute(client, oldMember, newMember) {
   const user = client.users.cache.get(newMember.id);
   const log = client.channels.cache.get(`829443483739357264`);

  const embed = new EmbedBuilder()
    .setAuthor({name: `${user.username}`, iconURL: user.displayAvatarURL({dynamic:true})})
    .setColor("#dc143c")
    .setTimestamp()
    .setFooter({ text: `ID de l'Utilisateur: ${newMember.id}`});

    if (newMember) return embed.setDescription(`${newMember} **A modifié son profil**`),log.send({ embeds: [embed]});
    if (oldMember && !newMember) return;
}
}