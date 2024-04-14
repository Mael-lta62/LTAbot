const { EmbedBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder } = require('discord.js');

const buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('accept-button')
            .setLabel('Accepter')
            .setStyle(ButtonStyle.Success),

        new ButtonBuilder()
            .setCustomId('refuse-button')
            .setLabel('Refuser')
            .setStyle(ButtonStyle.Danger),
    )

module.exports = {
    name: 'welcome',
    category: 'utils',
    permissions: ['ADMINISTRATOR'],
    ownerOnly: false,
    usage: 'welcome',
    examples: ['welcome'],
    description: 'La commande welcome permet d\'envoyer l\'embed des règles',
    async run(client, message, args) { 
        message.delete()

        const Tavernier = message.guild.roles.cache.get("806619705925304350");
        const Assistant = message.guild.roles.cache.get("806618823004389396");
        const Camarade = message.guild.roles.cache.get("806617498773749820");
        const moddeur = message.guild.roles.cache.get("806641243400437790");
        const Pochtron = message.guild.roles.cache.get("806617084912992346");
        const minecraft = message.guild.roles.cache.get("806637585925537795");
        const farming = message.guild.roles.cache.get("806637350356647946");
        const among = message.guild.roles.cache.get("806637534373216266");
        const ets = message.guild.roles.cache.get("806637483554635796");
        const rocket = message.guild.roles.cache.get("806637421244186655");

        const discutaille = message.guild.channels.cache.get("706220278228844648");
        const media = message.guild.channels.cache.get("706225485507461131");
        const pub = message.guild.channels.cache.get("743082863238316032");
        const music = message.guild.channels.cache.get("706298496525008918");
        const gaming = message.guild.channels.cache.get("806636335943254048");
        const levels = message.guild.channels.cache.get("830230821322883103");
        

        const welcomeEmbed = new EmbedBuilder()
            .setTitle('Règlement')
            .setDescription('Degemer mat à La Taverne Angevine ! Ici est un serveur pour les abonnés et amis qui veulent se rencontrer et parler sans prise de tête donc voici un petit ensemble de règles pour la bonne entente de toutes et de tous.\n')
            .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() })
            .addFields([
                { name: 'Règles sur le Discord en général :\n', value: 
                `\n• Merci d'avoir un pseudo normal (C'est à dire pas de ponctuations ou chiffres avant afin d'être visible en haut de la liste des Pochtrons !)\n
                • La bonne conduite et le respect de l'autre doivent être de vigueur sur les channels vocaux et écrits.\n
                • Un langage correct est requis.\n
                • Le troll, le spam, l'intimidation, les insultes par messages privés, le harcèlement, dénigrement d'une personne sont strictement interdites sur le serveur.\n
                • La divulgation/usurpation de toute information personnelle est interdite. (Même de pseudos pour l’usurpation)\n
                • Vos avatars / pseudos / messages ne doivent pas être insultants, homophobes, pornographiques ou bien racistes.\n`
                },
                { name: ' ', value:
                `\n• Les multicomptes ne sont pas admis sur le discord !\n
                • En cas de nécessité, veuillez contacter le ${Tavernier.toString()} ou ${Assistant.toString()} !\n
                • Le serveur est à la disposition de toute la communauté, merci de ne pas privatiser un Channel qu'il soit vocal ou écrit, des salons exprès sont créés afin de privatiser pour un sujet spécifique, si besoin merci de contacter ${Tavernier.toString()}.`
                },
                { name: 'Les channels écrits :\n', value: 
                `• Les textes écrits en gras, en italiques, soulignés, barrés, en majuscules, etc... sont réservés au ${Tavernier.toString()}, ${Assistant.toString()}, ${Camarade.toString()}.\n
                • Le ${discutaille.toString()} est à votre disposition mais merci de rester courtois et sans propos haineux !\n
                • Interdiction de mettre des liens de cracks/hacks/campagnes de don.\n
                • Le ${media.toString()} est à votre disposition afin de poster vos liens/photos/vidéos.\n
                • Le ${pub.toString()}  est réservé pour ${Camarade.toString()} Pour les pub Youtube, Instagram, Twitch Uniquement max 1 fois/semaine.\n`
                },
                { name: ' ', value:
                `• L'onglet ${music.toString()} est réservé uniquement pour le bot musique Radio 24/24 ou Rythm, merci de ne pas y mettre des musiques non appropriées, cela sera puni d’un avertissement ou d’un ban suivant la gravité.\n
                • Le ${gaming.toString()}  est à votre disposition pour demander à des personnes de jouer avec vous merci de choisir vos rôles pour voir les salons vocaux et écrits des jeux auxquels vous jouez. Si vous avez un problème, contactez ${Tavernier.toString()} dans ${discutaille.toString()}\n
                • Le ${levels.toString()} sert pour les commandes /levels et /rank\n `
                },
                { name: 'Les channels vocaux :\n', value:
                `\n• Merci de dire bonjour on bonsoir quand vous arrivez, la politesse c’est pas mal !\n
                • L'usage des soundboard est à usage modéré sauf pour ${Tavernier.toString()} ${Assistant.toString()}. Tout abus sera sanctionné d'un avertissement et si la personne ne comprend pas ça sera un ban permanent.\n
                • Merci de se respecter et de laisser la parole aux autres.\n
                • toute insulte pourra être puni d’un avertissement ou d’un ban suivant la gravité.\n
                • Le déban d’un autre serveur sera puni d’un ban perm de la taverne.\n
                • les bruits parasites peuvent être puni d’un mute micro serveur.\n
                • les déco-reco incessants seront puni d’un avertissement.\n`
                },
                { name: 'Les rôles du serveur :\n', value:
                `${Tavernier.toString()} qui sont les propriétaires et hôtes de ce serveur
                ${Assistant.toString()} qui sont les admins du serveur
                ${Camarade.toString()} sont les amis du tavernier
                ${Pochtron.toString()} sont les fidèles du tavernier
                ${moddeur.toString()} est le rôle donné aux modeurs
                ${farming.toString()}, ${among.toString()}, ${minecraft.toString()}, ${rocket.toString()}, ${ets.toString()} Sont des rôles donnés en sélectionnant son rôle juste en dessous afin de voir les salons concernés.
                
                Bienvenue sur ce serveur et je vous souhaites une bonne visite,`
                },
            ])
            .setTimestamp();
        await message.channel.send({ embeds: [welcomeEmbed], components: [buttons]});
    },
    async runInteraction(client, interaction) { 
        const Tavernier = interaction.guild.roles.cache.get("806619705925304350");
        const Assistant = interaction.guild.roles.cache.get("806618823004389396");
        const Camarade = interaction.guild.roles.cache.get("806617498773749820");
        const moddeur = interaction.guild.roles.cache.get("806641243400437790");
        const Pochtron = interaction.guild.roles.cache.get("806617084912992346");
        const minecraft = interaction.guild.roles.cache.get("806637585925537795");
        const farming = interaction.guild.roles.cache.get("806637350356647946");
        const among = interaction.guild.roles.cache.get("806637534373216266");
        const ets = interaction.guild.roles.cache.get("806637483554635796");
        const rocket = interaction.guild.roles.cache.get("806637421244186655");

        const discutaille = interaction.guild.channels.cache.get("706220278228844648");
        const media = interaction.guild.channels.cache.get("706225485507461131");
        const pub = interaction.guild.channels.cache.get("743082863238316032");
        const music = interaction.guild.channels.cache.get("706298496525008918");
        const gaming = interaction.guild.channels.cache.get("806636335943254048");
        const levels = interaction.guild.channels.cache.get("830230821322883103");
        

        const welcomeEmbed2 = new EmbedBuilder()
            .setTitle('Règlement')
            .setDescription('Degemer mat à La Taverne Angevine ! Ici est un serveur pour les abonnés et amis qui veulent se rencontrer et parler sans prise de tête donc voici un petit ensemble de règles pour la bonne entente de toutes et de tous.\n')
            .setFooter({ text: "L'équipe de la taverne angevine", iconURL: client.user.displayAvatarURL() })
            .addFields(
                { name: 'Règles sur le Discord en général :\n', value: 
                `\n• Merci d'avoir un pseudo normal (C'est à dire pas de ponctuations ou chiffres avant afin d'être visible en haut de la liste des Pochtrons !)\n
                • La bonne conduite et le respect de l'autre doivent être de vigueur sur les channels vocaux et écrits.\n
                • Un langage correct est requis.\n
                • Le troll, le spam, l'intimidation, les insultes par messages privés, le harcèlement, dénigrement d'une personne sont strictement interdites sur le serveur.\n
                • La divulgation/usurpation de toute information personnelle est interdite. (Même de pseudos pour l’usurpation)\n
                • Vos avatars / pseudos / messages ne doivent pas être insultants, homophobes, pornographiques ou bien racistes.\n`
                },
                { name: ' ', value:
                `\n• Les multicomptes ne sont pas admis sur le discord !\n
                • En cas de nécessité, veuillez contacter le ${Tavernier.toString()} ou ${Assistant.toString()} !\n
                • Le serveur est à la disposition de toute la communauté, merci de ne pas privatiser un Channel qu'il soit vocal ou écrit, des salons exprès sont créés afin de privatiser pour un sujet spécifique, si besoin merci de contacter ${Tavernier.toString()}.`
                },
                { name: 'Les channels écrits :\n', value: 
                `• Les textes écrits en gras, en italiques, soulignés, barrés, en majuscules, etc... sont réservés au ${Tavernier.toString()}, ${Assistant.toString()}, ${Camarade.toString()}.\n
                • Le ${discutaille.toString()} est à votre disposition mais merci de rester courtois et sans propos haineux !\n
                • Interdiction de mettre des liens de cracks/hacks/campagnes de don.\n
                • Le ${media.toString()} est à votre disposition afin de poster vos liens/photos/vidéos.\n
                • Le ${pub.toString()}  est réservé pour @Camarade Pour les pub Youtube, Instagram, Twitch Uniquement max 1 fois/semaine.\n`
                },
                { name: ' ', value:
                `• L'onglet ${music.toString()} est réservé uniquement pour le bot musique Radio 24/24 ou Rythm, merci de ne pas y mettre des musiques non appropriées, cela sera puni d’un avertissement ou d’un ban suivant la gravité.\n
                • Le ${gaming.toString()}  est à votre disposition pour demander à des personnes de jouer avec vous merci de choisir vos rôles pour voir les salons vocaux et écrits des jeux auxquels vous jouez. Si vous avez un problème, contactez ${Tavernier.toString()} dans ${discutaille.toString()}\n
                • Le ${levels.toString()} sert pour les commandes /levels et /rank\n `
                },
                { name: 'Les channels vocaux :\n', value:
                `\n• Merci de dire bonjour on bonsoir quand vous arrivez, la politesse c’est pas mal !\n
                • L'usage des soundboard est à usage modéré sauf pour ${Tavernier.toString()} ${Assistant.toString()}. Tout abus sera sanctionné d'un avertissement et si la personne ne comprend pas ça sera un ban permanent.\n
                • Merci de se respecter et de laisser la parole aux autres.\n
                • toute insulte pourra être puni d’un avertissement ou d’un ban suivant la gravité.\n
                • Le déban d’un autre serveur sera puni d’un ban perm de la taverne.\n
                • les bruits parasites peuvent être puni d’un mute micro serveur.\n
                • les déco-reco incessants seront puni d’un avertissement.\n`
                },
                { name: 'Les rôles du serveur :\n', value:
                `${Tavernier.toString()} qui sont les propriétaires et hôtes de ce serveur
                ${Assistant.toString()} qui sont les admins du serveur
                ${Camarade.toString()} sont les amis du tavernier
                ${Pochtron.toString()} sont les fidèles du tavernier
                ${moddeur.toString()} est le rôle donné aux modeurs
                ${farming.toString()}, ${among.toString()}, ${minecraft.toString()}, ${rocket.toString()}, ${ets.toString()} Sont des rôles donnés en sélectionnant son rôle juste en dessous afin de voir les salons concernés.
                
                Bienvenue sur ce serveur et je vous souhaites une bonne visite,`
                },
            )
            .setTimestamp();
        await interaction.reply({ embeds: [welcomeEmbed2], components: [buttons]});
    }
};