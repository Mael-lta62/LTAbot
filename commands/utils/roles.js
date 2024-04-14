const { ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const selectMenu = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId('rolesmenu')
            .setPlaceholder('Choisir un ou plusieurs rôles')
            .setMinValues(0)
            .setMaxValues(5)
            .addOptions([
                {
                    label: 'Farming Simulator',
                    description: 'Accède aux salons Farming Simulator',
                    value: '806637350356647946'
                },
                {
                    label: 'Rocket League',
                    description: 'Accède aux salons Rocket League',
                    value: '806637421244186655'
                },
                {
                    label: 'ETS 2',
                    description: 'Accède aux salons ETS 2',
                    value: '806637483554635796'
                },
                {
                    label: 'Among Us',
                    description: 'Accède aux salons Among Us',
                    value: '806637534373216266'
                },
                {
                    label: 'Minecraft',
                    description: 'Accède aux salons Minecraft',
                    value: '806637585925537795'
                },
            ])
    )

module.exports = {
    name: 'roles',
    roles:['806637350356647946','806637421244186655','806637483554635796', '806637534373216266', '806637585925537795'],
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'roles',
    examples: ['roles'],
    description: 'roles',
    async run(client, message, args) { 
        message.delete();
        await message.channel.send({content: 'Veuillez choisir vos rôles dans la liste afin de débloquer les salons souhaités', components: [selectMenu]});
    },
    async runInteraction(client, interaction) { 
        await interaction.reply({content: 'Veuillez choisir vos rôles dans la liste afin de débloquer les salons souhaités', components: [selectMenu]});
     },
};