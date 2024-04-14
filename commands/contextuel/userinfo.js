const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'userinfo',
    category: 'contextuel',
    ownerOnly: false,
    usage: 'userinfo',
    examples: ['userinfo'],
    permissions: ['SEND_MESSAGES'],
    type: ApplicationCommandType.User,
    async runInteraction(client, interaction) {
        const member = await interaction.guild.members.fetch(interaction.targetId);

        const embed = new EmbedBuilder()
            .setAuthor({ name: `${member.user.username} (${member.id})`, iconURL: member.user.bot ? 'https://cdn.discordapp.com/attachments/880070660519501854/1225478377750663270/1f916.png?ex=662146ad&is=660ed1ad&hm=e65cd3a287b1d23465fd09d33f4aa6fb9ed0997fb5930c59c69f60f0e30517cc&' : 'https://cdn.discordapp.com/attachments/880070660519501854/1225478520134828102/1f468.png?ex=662146cf&is=660ed1cf&hm=9354c6c01d76e8fc48e73201ffc07ea0ac380ca1f977641d5eeb083045b19eb5&'})
            .setColor('#8e48f7')
            .setImage(member.user.displayAvatarURL())
            .addFields([
                {name: 'Nom', value: `${member.displayName}`, inline: true },
                {name: 'Modérateur', value: `${member.kickable ? '🔴' : '🟢'}`, inline: true },
                {name: 'Bot', value: `${member.user.bot ? '🟢' : '🔴'}`, inline: true },
                {name: 'Roles', value: `${member.roles.cache.map(role => role).join(', ').replace(', @everyone', ' ')}` },
                {name: 'A créé son compte le', value: `<t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)` },
                {name: 'A rejoint le serveur le', value: `<t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)` },
            ])

        interaction.reply({ embeds: [embed], ephemeral: true });
    }
};