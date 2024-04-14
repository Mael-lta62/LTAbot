const { ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

const buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('primary-button')
            .setLabel('Primary')
            .setStyle(ButtonStyle.Primary),
        
        new ButtonBuilder()
            .setCustomId('secondary-button')
            .setLabel('Secondary')
            .setStyle(ButtonStyle.Secondary),
        
        new ButtonBuilder()
            .setCustomId('success-button')
            .setLabel('Success')
            .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
            .setCustomId('danger-button')
            .setLabel('Danger')
            .setStyle(ButtonStyle.Danger),

        new ButtonBuilder()
            .setURL('https://google.com')
            .setLabel('Link')
            .setStyle(ButtonStyle.Link),
    )

module.exports = {
    name: 'button',
    category: 'utils',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'button',
    examples: ['button'],
    description: 'button',
    async run(client, message, args) { 
        await message.channel.send({content: 'Cliquer les boutons', components: [buttons]});
    },
    async runInteraction(client, interaction) { 
        await interaction.reply({content: 'Cliquer les boutons', components: [buttons]});
     },
};