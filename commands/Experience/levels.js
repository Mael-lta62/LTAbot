const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'levels',
    category: 'Experience',
    permissions: ['SEND_MESSAGES'],
    ownerOnly: false,
    usage: 'levels',
    examples: ['levels'],
    description: 'Classement des niveaux (top 10) des utilisateurs',
    async run(client, message) {
            const embed = new EmbedBuilder()
                .setTitle("Top 10 des niveaux d'utilisateurs sur le serveur")
                .setColor("#00EAFF")
                .setThumbnail(client.user.displayAvatarURL())
                .setDescription("Voici le classement du serveur !")
                .setTimestamp()
                .setFooter( {text: 'Niveaux'});
                await client.getUsers(message.guild).then(p => {
                    p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).forEach(e => {
                      embed.addFields([{name: e.username, value: `\`\`\`Niveau ${e.level}\`\`\``}]);
                    });
                  });

                  message.channel.send({ embeds: [embed] });
    },

    async runInteraction(client, interaction) {
            const embed = new EmbedBuilder()
            .setTitle("Top 10 des niveaux d'utilisateurs sur le serveur")
            .setColor("#00EAFF")
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("Voici le classement du serveur !")
            .setTimestamp()
            .setFooter( {text: 'Niveaux'});
            await client.getUsers(interaction.guild).then(p => {
                p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).forEach(e => {
                  embed.addFields({name: e.username, value: `\`\`\`Niveau ${e.level}\`\`\``});
                });
              })

              interaction.reply({ embeds: [embed] });
    
            
        }
    }