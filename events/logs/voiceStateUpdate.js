const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: 'voiceStateUpdate',
  once: false,
  async execute(client, oldVoiceState, newVoiceState) {
    const user = newVoiceState.member.user;
    const log = client.channels.cache.get("829443483739357264");

    const embed = new EmbedBuilder()
      .setAuthor({name: user.username, iconURL: user.displayAvatarURL({ dynamic: true })})
      .setColor("#dc143c")
      .setTimestamp()
      .setFooter({text: `ID de l'Utilisateur: ${user.id}`});

      if (oldVoiceState.selfMute && !newVoiceState.selfMute) {
        embed.setDescription(`${user.username} s'est démute micro.`);
        log.send({ embeds: [embed] });
      } else if (!oldVoiceState.selfMute && newVoiceState.selfMute) {
        embed.setDescription(`${user.username} s'est mute micro.`);
        log.send({ embeds: [embed] });
      } else if ((oldVoiceState.selfDeaf && !newVoiceState.selfDeaf) || (oldVoiceState.selfMute && !newVoiceState.selfMute)) {
        embed.setDescription(`${user.username} a enlevé la sourdine.`);
        log.send({ embeds: [embed] });
      } else if ((!oldVoiceState.selfDeaf && newVoiceState.selfDeaf) || (!oldVoiceState.selfMute && newVoiceState.selfMute)) {
        embed.setDescription(`${user.username} s'est mis en sourdine.`);
        log.send({ embeds: [embed] });
    } else if (newVoiceState.channelId && !oldVoiceState.channelId) {
      // L'utilisateur a rejoint un canal vocal
      const newVoiceChannel = client.channels.cache.get(newVoiceState.channelId);
      embed.setDescription(`A rejoint ${newVoiceChannel.name}`);
      log.send({ embeds: [embed] });
    } else if (!newVoiceState.channelId && oldVoiceState.channelId) {
      // L'utilisateur a quitté un canal vocal
      const oldVoiceChannel = client.channels.cache.get(oldVoiceState.channelId);
      embed.setDescription(`A quitté ${oldVoiceChannel.name}`);
      log.send({ embeds: [embed] });
    }
  }
};