const { Guild }= require('../../models/index')

module.exports = {
    name: 'reload',
    category: 'admin',
    ownerOnly: true,
    usage: 'reload',
    examples: ['reload'],
    permissions: ['ADMINISTRATOR'],
    description: 'Relancer le bot',
    async run(client, message, args) { 
        await message.reply('Bot relancé avec succès')
        return process.exit();
    },
    async runInteraction(client, interaction) { 
        await interaction.reply('Bot relancé avec succès')
        return process.exit();
    },
};