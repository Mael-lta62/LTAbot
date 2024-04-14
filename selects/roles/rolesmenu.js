const roles = require('../../commands/utils/roles');

module.exports = {
    name: 'rolesmenu',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add(interaction.values);
        roles.roles.forEach(async x => { // Enleve les roles non-selectionné
            if (interaction.member._roles.includes(x) && !interaction.values.includes(x)) await interaction.member.roles.remove(x)
      });
        await interaction.reply({ content: `Vos rôles ont été mis à jour !`, ephemeral: true});
    }
};