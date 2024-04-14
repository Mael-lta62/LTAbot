const ms = require('ms');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'mute',
    category: 'moderation',
    ownerOnly: false,
    usage: 'mute [@member] [duration] [reason]',
    examples: ['mute @user 4 minutes raison'],
    permissions: ['KICK_MEMBERS'],
    description: 'Mute un utilisateur temporairement avec une raison',
    async run(client, message, args) { 
        if (!args[0]) return message.reply('Spécifier un membre à mute !');
        if (!args[1] || !args[2]) return message.reply('Spécifier une durée pour votre mute !');
        if (!args[3]) return message.reply('Spécifier une raison à votre mute !');

        const target = message.mMentions.members.find(m => m.id);
        const duration = args.slice(1, 3).join(' ');
        const convertedTime = ms(duration);
        const reason = args.slice(3).join(' ');

        if (!target.moderatable) return message.reply('Ce membre ne peut pas être mute par le bot !');
        if (!convertedTime) return message.reply('Spécifier une durée valable !');

        target.timeout(convertedTime, reason);
        message.channel.send(`Le membre ${target} a été mute pour ${duration} car ${reason}`);
     },

    options: [
        {
            name: 'target',
            description: 'L\'utilisateur à ban',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: 'duration',
            description: 'La durée du mute',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'reason',
            description: 'La raison du ban',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const duration = interaction.options.getString('duration');
        const convertedTime = ms(duration);
        const reason = interaction.options.getString('reason');

        if (!target.moderatable) return interaction.reply('Ce membre ne peut pas être mute par le bot !');
        if (!convertedTime) return interaction.reply('Spécifier une durée valable !');

        target.timeout(convertedTime, reason);
        interaction.reply(`Le membre ${target} a été mute pour ${duration} car ${reason}`);
    }
};