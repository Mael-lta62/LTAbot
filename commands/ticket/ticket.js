const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

const buttonsopenticket = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('create-button')
            .setLabel('📩 Créer un ticket')
            .setStyle(ButtonStyle.Primary),
    )

module.exports = {
    name: 'ticket',
    category: 'ticket',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'ticket',
    examples: ['ticket'],
    description: 'La commande ticket permet d\'envoyer l\'embed du ticket',

    async run(client, message, args) { 
        message.delete()

        const welcomeEmbed = new EmbedBuilder()
            .setTitle('Tu as un soucis ? Prend donc un ticket et on te répondra')
            .setDescription('Crée ton ticket en appuyant sur le bouton "📩 Créer un ticket"')
            .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() })
            .setTimestamp();
        await message.channel.send({ embeds: [welcomeEmbed], components: [buttonsopenticket]});
    },
};