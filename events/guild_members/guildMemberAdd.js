const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const Canvas = require('canvas');
const path = require('path');
const backgroundPath = path.join(__dirname, 'backgroundmemberadd.jpg');


module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        const fetchGuild = await client.getGuild(member.guild);

        const embed = new EmbedBuilder()
        .setAuthor({ name: `${member.user.username} (${member.id})`, iconURL: member.displayAvatarURL()})
        .setColor('#21ff81')
        .setDescription(`± Nom d'utilisateur: ${member}
        ± Créé le: <t:${parseInt(member.user.createdTimestamp / 1000)}:f> (<t:${parseInt(member.user.createdTimestamp / 1000)}:R>)
        ± Rejoint le: <t:${parseInt(member.joinedTimestamp / 1000)}:f> (<t:${parseInt(member.joinedTimestamp / 1000)}:R>)
        `)
        .setTimestamp()
        .setFooter({ text: 'L\'utilisateur a rejoint le serveur !' });

        const canvas = Canvas.createCanvas(1024, 512);

        ctx = canvas.getContext("2d");

        const background = await Canvas.loadImage(backgroundPath);
        ctx.drawImage(background, 0, 0, 1024, 512);

        ctx.font = "32px Impact"; // Taille de la police pour le texte supplémentaire
        ctx.fillStyle = "#ffffff"; // Couleur du texte
        ctx.textAlign = "center"; // Alignement du texte au centre
        ctx.fillText("Bienvenue dans 🍻 La Taverne Angevine 🍻", 512, 360); // Dessiner le texte au-dessus du pseudo

        ctx.font = "42px Impact";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(member.user.username.toUpperCase(), 512, 410);

        // Dessiner l'avatar de l'utilisateur avec un masque rond
ctx.save();
ctx.beginPath();
ctx.arc(512, 166, 119, 0, Math.PI * 2);
ctx.closePath();
ctx.clip();

// Charger et dessiner l'avatar de l'utilisateur
const avatar = await Canvas.loadImage(member.user.displayAvatarURL({
    extension: "png",
    size: 1024
}));
ctx.drawImage(avatar, 393, 47, 238, 238);

// Restaurer le contexte
ctx.restore();

        const attachment = new AttachmentBuilder(canvas.toBuffer(), {name: "welcome.png"});

        client.channels.cache.get(`706229987736289280`).send({ files: [attachment]});
        
        client.channels.cache.get('829443483739357264').send({ embeds: [embed]});
    },
};