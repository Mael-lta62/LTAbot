const Logger = require('../../utils/Logger');

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        Logger.client('- opérationnel');
        client.channels.cache.get(`829443483739357264`).send("Le bot est opérationnel !");
        client.user.setPresence({ 
            activities: [{
                name: 'coucou les loulous'
            }],
            status: 'online'
           });
        //const devGuild = await client.guilds.cache.get('706220278228844645');
        //await devGuild.commands.set(client.commands.map(cmd => cmd));
        client.application.commands.set(client.commands.map(cmd => cmd));
    },
};