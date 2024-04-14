const { Guild }= require('../../models/index')

module.exports = {
    name: 'update',
    category: 'admin',
    ownerOnly: true,
    usage: 'update',
    examples: ['update'],
    permissions: ['ADMINISTRATOR'],
    description: 'Mettre à jour les nouvelles données',
    async run(client, message, args) { 
        await Guild.updateMany({}, { "$set": { "testChannel": "829315757317029899"}, upsert: true});
        message.reply('Nouvelles données ajoutées')
    },
    async runInteraction(client, interaction) { 
        await Guild.updateMany({}, { "$set": { "testChannel": "829315757317029899"}, upsert: true});
        interaction.reply('Nouvelles données ajoutées')
    },
};