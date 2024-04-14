const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'unmute',
    category: 'moderation',
    ownerOnly: false,
    usage: 'unmute [@member]',
    examples: ['unmute @user'],
    permissions: ['KICK_MEMBERS'],
    description: 'unmute un utilisateur',
    async run(client, message, args) { 
        if (!args[0]) return message.reply('Spécifier un membre à unmute !');

        const target = message.mMentions.members.find(m => m.id);

        if (!target.isCommunicationDisabled()) return message.reply('Ce membre ne peut pas être unmute par le bot car il n\'est pas mute !');

        target.timeout(null);
        message.channel.send(`Le membre ${target} a été unmute`);
     },

    options: [
        {
            name: 'target',
            description: 'L\'utilisateur à ban',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');

        if (!target.isCommunicationDisabled()) return interaction.reply('Ce membre ne peut pas être unmute par le bot car il n\'est pas mute !');

        target.timeout(null);
        interaction.reply(`Le membre ${target} a été unmute`);
    }
};