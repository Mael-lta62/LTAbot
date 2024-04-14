const { ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: 'clear',
    category: 'moderation',
    ownerOnly: false,
    usage: 'clear [amount] <@target>',
    examples: ['clear 50', 'clear 50 @user'],
    permissions: ['MANAGE_MESSAGES'],
    description: 'Supprimer un nombre de message spécifié sur un salon ou un utilisateur',
    async run(client, message, args) { 
        const amountToDelete = args[0];
        if (isNaN(amountToDelete) || !args[0] || amountToDelete > 100 || amountToDelete < 0) return message.reply('Le \`Nombre\` doit être inférieur à 100 et supérieur à 0');
        const target = message.mentions.users.find(u => u.id);
        await message.delete();

        const messageToDelete = await message.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messageToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await message.channel.bulkDelete(filteredTargetMessages, true).then(message => {
                message.channel.send(`J'ai supprimé ${messages.size} messages sur l'utilisateur ${target}`);
            });
        } else {
            await message.channel.bulkDelete(amountToDelete, true).then(message => {
                message.channel.send(`J'ai supprimé ${messages.size} messages ce salon`);
            });
        } 
    },

    options: [
        {
            name: 'message',
            description: 'Le nombre de message à supprimer',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'target',
            description: 'Sélectionner l\'utilisateur pour la suppression de message',
            type: ApplicationCommandOptionType.User,
            required: true,
        }
    ],
    async runInteraction(client, interaction) {
        const amountToDelete = interaction.options.getNumber('message');
        if (amountToDelete > 100 || amountToDelete < 0) return interaction.reply('Le Nombre doit être inférieur à 100 et supérieur à 0');
        const target = interaction.options.getMember('target');

        const messageToDelete = await interaction.channel.messages.fetch();

        if (target) {
            let i = 0;
            const filteredTargetMessages = [];
            (await messageToDelete).filter(msg => {
                if (msg.author.id == target.id && amountToDelete > i) {
                    filteredTargetMessages.push(msg); i++;
                }
            });

            await interaction.channel.bulkDelete(filteredTargetMessages, true).then(message => {
                interaction.reply(`J'ai supprimé ${messages.size} messages sur l'utilisateur ${target}`);
            });
        } else {
            await interaction.channel.bulkDelete(amountToDelete, true).then(message => {
                interaction.reply(`J'ai supprimé ${messages.size} messages ce salon`);
            });
        }
    }
};