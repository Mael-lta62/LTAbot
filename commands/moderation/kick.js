const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'kick',
    category: 'moderation',
    ownerOnly: false,
    usage: 'kick [@member] [reason]',
    examples: ['kick @user raison'],
    permissions: ['KICK_MEMBERS'],
    description: 'Kick un utilisateur avec une raison',
    async run(client, message, args) { 
        if (!args[0]) return message.reply('Spécifier un membre à kick !');
        if (!args[1]) return message.reply('Spécifier une raison à votre kick !');

        const target = message/MessageMentions.members.find(m => m.id);
        const reason = args.slice(1).join(' ');

        if (!target.kickable) return message.reply('Ce membre ne peut pas être kick par le bot !');

        target.kick(reason);
        message.channel.send(`Le membre ${target} a été kick`);
     },

    options: [
        {
            name: 'target',
            description: 'L\'utilisateur à kick',
            type: ApplicationCommandOptionType.User,
            required: true,
        },
        {
            name: 'reason',
            description: 'La raison du kick',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],
    async runInteraction(client, interaction) {
        const target = interaction.options.getMember('target');
        const reason = interaction.options.getString('reason');

        if (!target.kickable) return interaction.reply('Ce membre ne peut pas être kick par le bot !');

        target.kick(reason);
        interaction.reply(`Le membre ${target} a été kick`);
    }
};