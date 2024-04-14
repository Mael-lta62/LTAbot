const { PermissionsBitField, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

const buttonscloseticket = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('close-button')
            .setLabel('Fermer le ticket')
            .setStyle(ButtonStyle.Danger),
    )

module.exports = {
    name: 'create-button',
    async runInteraction(client, interaction) {
        const tavernierRole = interaction.guild.roles.cache.get("806619705925304350");
        const assistantRole = interaction.guild.roles.cache.get("806618823004389396");

        await interaction.guild.channels.create({
            name: `ticket-${interaction.user.username}`,
            type: ChannelType.GuildText,
            parent: "806634683130707999",
            permissionOverwrites: [
                // Autoriser l'utilisateur qui a créé le ticket
                {
                    id: interaction.user.id,
                    allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
                },
                // Autoriser les rôles Tavernier et Assistant
                {
                    id: tavernierRole.id,
                    allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
                },
                {
                    id: assistantRole.id,
                    allow: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
                },
                // Interdire l'accès à tout le monde sauf les rôles et l'utilisateur créateur
                {
                    id: interaction.guild.roles.everyone,
                    deny: [PermissionsBitField.Flags.ViewChannel, PermissionsBitField.Flags.SendMessages]
                }
            ]
        }).then(channel => {
            const welcomeEmbed = new EmbedBuilder()
            .setTitle(`Bienvenue ${interaction.user.username} !`)
            .setDescription('Le support va venir vers toi dès qu\'il est disponible !\nPour fermer ton ticket, appuie sur le bouton "Fermer le ticket"')
            .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() })
            .setTimestamp();
            channel.send({ embeds: [welcomeEmbed], components: [buttonscloseticket]});
        })

        interaction.reply({content: `Ton ticket est créé !`, ephemeral: true})
    }
};