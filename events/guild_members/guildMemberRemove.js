const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);

        const embed = new EmbedBuilder()
        .setAuthor({ name: `${member.user.username} (${member.id})`, iconURL: member.displayAvatarURL()})
        .setColor('#dc143c')
        .setDescription(`± Nom d'utilisateur: ${member.displayName}
        ± Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
        ± Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
        ± Quitté le: <t:${parseInt(Date.now() / 1000)}:f> (<t:${parseInt(Date.now() / 1000)}:R>)
        `)
        .setTimestamp()
        .setFooter({ text: 'L\'utilisateur a quitté le serveur !' });

        client.channels.cache.get(`706229987736289280`).send(`${member.displayName} nous a quitté, bon vent !`);
        client.channels.cache.get('829443483739357264').send({ embeds: [embed]});
    },
};