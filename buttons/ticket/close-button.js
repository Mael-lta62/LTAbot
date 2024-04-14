const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const buttonscloseticket = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('close-button')
            .setLabel('Fermer le ticket')
            .setStyle(ButtonStyle.Danger),
    )

var nbTicket = 0;

module.exports = {
    name: 'close-button',
    async runInteraction(client, interaction) {
        await interaction.channel.delete()

        interaction.reply({content: `"Ton ticket est fermé !"`, ephemeral: true})
    }
};