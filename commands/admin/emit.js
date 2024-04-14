const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'emit',
    category: 'admin',
    ownerOnly: true,
    usage: 'emit',
    examples: ['emit'],
    permissions: ['ADMINISTRATOR'],
    description: 'Emettre un évènement au choix',
    run(client, message, args) {
        if (!args[0] || !args[0].match(/^(guildMemberAdd|guildMemberRemove)$/)) return message.reply('Merci d\'entrer un évènement valide (\`guildMemberAdd\`/\`guildMemberRemove\`)');

        if (args[0] == 'guildMemberAdd') {
            client.emit('guildMemberAdd', message.member);
            message.reply('Event guildMemberAdd émit')
        } else if(args[0] == 'guildCreate') {
            client.emit('guildCreate', message.guild);
            message.reply('Event guildCreate émit')

        } else {
            client.emit('guildMemberRemove', message.member);
            message.reply('Event guildMemberRemove émit')
        }
    },
    options: [
        {
            name: 'event',
            description: 'choisir un évènement à émettre',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'guildMemberAdd',
                    value: 'guildMemberAdd'
                },
                {
                    name: 'guildMemberRemove',
                    value: 'guildMemberRemove'
                },
                {
                    name: 'guildCreate',
                    value: 'guildCreate'
                }
            ]
        }
    ],
    runInteraction(client, interaction) {
        const evtChoices = interaction.options.getString('event');

        if (evtChoices == 'guildMemberAdd') {
            client.emit('guildMemberAdd', interaction.member);
            interaction.reply({ content: 'Event guildMemberAdd émit', ephemeral: true});
        } else if(evtChoices == 'guildCreate') {
            client.emit('guildCreate', interaction.guild);
            interaction.reply({content: 'Event guildCreate émit', ephemeral: true});

        } else {
            client.emit('guildMemberRemove', interaction.member);
            interaction.reply({ content: 'Event guildMemberRemove émit', ephemeral: true});
        }
    }
};