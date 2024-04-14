module.exports = {
    name: 'accept-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.add('806617084912992346');
        await interaction.reply({ content: 'Vous avez accepté les règles, bienvenue !', ephemeral: true});
    }
};