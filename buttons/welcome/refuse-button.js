module.exports = {
    name: 'refuse-button',
    async runInteraction(client, interaction) {
        await interaction.member.roles.remove('806617084912992346');
        await interaction.reply({ content: 'Pour avoir accès au reste du serveur, merci de lire les règles et de les accepter !', ephemeral: true});
    }
};