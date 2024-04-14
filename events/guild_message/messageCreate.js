const ownerId = '468896696684773378'

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(client, message) {
        let guildSettings = await client.getGuild(message.guild);
        const dbUser = await client.getUser(message.member);

        if (message.channel.type === "dm") return client.emit("directMessage", message);
        if (message.author.bot) return;
        
        if (!dbUser) await client.createUser({
          guildID: message.member.guild.id,
          guildName: message.member.guild.name,
          userID: message.member.id,
          username: message.member.user.username,
          experience: Math.floor(0),
          level: Math.floor(0),
        });

        const expCd = Math.floor(Math.random() * 19) + 1;
        const expToAdd = Math.floor(Math.random() * 25) + 10;
      
        if (expCd >= 8 && expCd <= 11) {
          await client.addExp(client, message.member, expToAdd)
        };
      
        const userLevel = Math.floor(0.1 * Math.sqrt(dbUser.experience));
      
        if (dbUser.level < userLevel) {
          const level_channel = client.channels.cache.get('830230821322883103');
          level_channel.send(`${message.member} Bravo à toi ! tu viens de monter niveau ***${userLevel}*** ! Incroyable !`);
          client.updateUser(message.member, {level: userLevel});
        };


        if (!guildSettings) {
            await client.createGuild(message.guild);
            guildSettings = await client.getGuild(message.guild);
            return message.reply('Le bot a mis à jour la base de donnée pour votre serveur, retapez la commande !');
        }

        const prefix = guildSettings.prefix;
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmdName = args.shift().toLowerCase();
        if (cmdName.length == 0) return
        const user = message.mentions.users.first();

        let cmd = client.commands.get(cmdName);
        if (!cmd) return message.reply(`Cette commande n'existe pas!`);

        if (cmd.ownerOnly) {
            if (message.author.id !=ownerId) return message.reply('La seule personne pouvant taper cette commande est l\'owner du bot');
        }

        if(!message.member.permissions.has([cmd.permissions])) return message.reply(`Vous n'avez pas la/les permission(s) requise(s) (\`${cmd.permissions.join(', ')}\`)pour taper cette commande`);

        if (cmd) cmd.run(client, message, args, guildSettings);



        const command = client.commands.get(cmdName) || client.commands.find(command => command.help.aliases && command.help.aliases.includes(cmdName));
        if (!command) return;

        
        command.run(client, message, args, settings, dbUser);
        
    }


}