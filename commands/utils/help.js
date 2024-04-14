const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");
const { readdirSync } = require('fs');
const commandFolder = readdirSync('./commands');

const contextDescription = {
    userinfo: 'Renvoie des informations sur l\'utilisateur'
}

module.exports = {
    name: 'help',
    category: 'utils',
    ownerOnly: false,
    usage: 'help',
    examples: ['help'],
    permissions: ['ADMINISTRATOR'],
    description: 'commande help',
    async run(client, message, args, guildSettings) {
        const prefix = guildSettings.prefix;
        if (!args.length) {
        const noArgsEmbed = new EmbedBuilder()
            .setColor('#6e4aff')
            .addFields([{name: 'Liste des commandes', value: `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``}])

        for (const category of commandFolder) {
            noArgsEmbed.addFields([{
                name: `+ ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                value: `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
            }]);
        }

        return message.channel.send({ embeds: [noArgsEmbed]});
    }

    const cmd = client.commands.get(args[0]);
    if (!cmd) return message.reply('cette commande n\'existe pas');

    return message.channel.send(`
    \`\`\`makefile
    [Help: Commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquement /!\\' : ''}

    ${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

    Permissions: ${cmd.permissions.join(', ')}
    Utilisation: ${prefix}${cmd.usage}
    Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}

    ---

    ${prefix} = prefix utilisé pour le bot (/commands sont aussi disponibles)
    {} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
    Ne pas inclure ces caractères -> {}, [] et <> dans vos commandes.

    \`\`\``)
    },
    options: [
        {
            name: 'command',
            description: 'Tapez le nom de votre commande',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
    ],
    async runInteraction(client, interaction, guildSettings) {
        const prefix = guildSettings.prefix;
        const cmdName = interaction.options.getString('command');

        if (!cmdName) {
            const noArgsEmbed = new EmbedBuilder()
                .setColor('#6e4aff')
                .addFields([{name: 'Liste des commandes', value: `Une liste de toutes les catégories disponibles et leurs commandes.\nPour plus d'informations sur une commande, tapez \`${prefix}help <command>\``}])
    
            for (const category of commandFolder) {
                noArgsEmbed.addFields([{
                    name: `+ ${category.replace(/(^\w|\s\w)/g, firstLetter => firstLetter.toUpperCase())}`,
                    value: `\`${client.commands.filter(cmd => cmd.category == category.toLowerCase()).map(cmd => cmd.name).join(', ')}\``
                }]);
            }
    
            return interaction.reply({ embeds: [noArgsEmbed], ephemeral: true});
        }
    
        const cmd = client.commands.get(cmdName);
        if (!cmd) return interaction.reply({content: 'cette commande ,\'existe pas', ephemeral: true });
    
        return interaction.reply({content: `
    \`\`\`makefile
    [Help: Commande -> ${cmd.name}] ${cmd.ownerOnly ? '/!\\ Pour les admins du bot uniquement /!\\' : ''}

    ${cmd.description ? cmd.description : contextDescription[`${cmd.name}`]}

    Permissions: ${cmd.permissions.join(', ')}
    Utilisation: ${prefix}${cmd.usage}
    Exemples: ${prefix}${cmd.examples.join(` | ${prefix}`)}

    ---

    ${prefix} = prefix utilisé pour le bot (/commands sont aussi disponibles)
    {} = sous-commande(s) disponible(s) | [] = option(s) obligatoire(s) | <> = option(s) optionnel(s)
    Ne pas inclure ces caractères -> {}, [] et <> dans vos commandes.

    \`\`\``, ephemeral: true});

    },
};