const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'thread',
    category: 'moderation',
    ownerOnly: false,
    usage: 'thread [join|leave|archive|unarchive|delete]',
    examples: ['thread join', 'thread leave'],
    permissions: ['MANAGE_THREADS'],
    description: "Commande concernant les threads",
    async run(client, message, args) { 
        let thread = message.channel;
        if (!thread.isThread()) return message.reply('Impossible de taper cette commande car vous n\'êtes pas dans un thread !');
        if (!args[0] || !args[0].match(/^(join|leave|archive|unarchive|delete)$/)) return message.reply('Merci d\'entrer une sous-commande valide (\`join|leave|archive|unarchive|delete\`)');

        if (args[0] === 'join') {
            message.reply('Le bot a rejoint le thread !');
            if (thread.joinable) await thread.join()
        } else if (args[0] === 'leave') {
            message.reply('Le bot a quitté le thread !');
            await thread.leave()
        } else if (args[0] === 'archive') {
            message.reply('Le thread est archivé !');
            await thread.setArchived(true)
        } else if (args[0] === 'unarchive') {
            message.reply('Le thread est désarchivé !');
            await thread.setArchived(false)
        } else if (args[0] === 'delete') {
            const channelId = args[1];
            if (!args[1]) return message.reply('Merci de spécifier un ID de channel !');
            const logChannel = client.channels.cache.get(channelId);
            await logChannel.send(`Le bot a supprimé le thread: ${thread.name}`);
            await thread.delete();
        }
     },

    options: [
        {
            name: 'join',
            description: 'Joindre un thread',
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: 'leave',
            description: 'Quitter un thread',
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: 'archive',
            description: 'Archiver un thread',
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: 'unarchive',
            description: 'Désarchiver un thread',
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: 'delete',
            description: 'Supprimer un thread',
            type: ApplicationCommandOptionType.Subcommand,
            option: [{ name: 'channel', type: ApplicationCommandOptionType.String, description: 'Id du channel', required: true }]
        },

    ],
    async runInteraction(client, interaction) {
        let thread = interaction.channel;
        if (!thread.isThread()) return interaction.reply('Impossible de taper cette commande car vous n\'êtes pas dans un thread !');

        if (interaction.options.getSubCommand() === 'join') {
            interaction.reply('Le bot a rejoint le thread !');
            if (thread.joinable) await thread.join()
        } else if (interaction.options.getSubCommand() === 'leave') {
            interaction.reply('Le bot a quitté le thread !');
            await thread.leave()
        } else if (interaction.options.getSubCommand() === 'archive') {
            interaction.reply('Le thread est archivé !');
            await thread.setArchived(true)
        } else if (interaction.options.getSubCommand() === 'unarchive') {
            interaction.reply('Le thread est désarchivé !');
            await thread.setArchived(false)
        } else if (interaction.options.getSubCommand() === 'delete') {
            const channelId = interaction.options.getString('channel');
            const logChannel = client.channels.cache.get(channelId);
            await logChannel.send(`Le bot a supprimé le thread: ${thread.name}`);
            await thread.delete();
        }
    }
};