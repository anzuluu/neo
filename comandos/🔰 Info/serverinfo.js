const Discord = require('discord.js');

module.exports = {
    name: "server-icon",
    aliases: ["sv-icon"],

    run: async (client, message, args) => {

        let server = message;

        let png = server.guild.iconURL({ format: 'png', dynamic: true, size: 1024 });
        let jpg = server.guild.iconURL({ format: 'jpg', dynamic: true, size: 1024 });
        let webp = server.guild.iconURL({ format: 'webp', dynamic: true, size: 1024 });

        const svicon = new Discord.EmbedBuilder()
            .setAuthor({ name: "Icono:", iconURL: message.guild.iconURL({ dynamic: true }) })
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("Random")
            .setFooter({ text: `Pedido por: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

        message.channel.send({ embeds: [svicon], content: `**Icono del servidor ( \`${message.guild.name}\` )**`, components: [new Discord.ActionRowBuilder().addComponents(
            [
                new Discord.ButtonBuilder().setStyle(`Link`).setLabel(`PNG`).setURL(png),
                new Discord.ButtonBuilder().setStyle(`Link`).setLabel(`JPG`).setURL(jpg),
                new Discord.ButtonBuilder().setStyle(`Link`).setLabel(`WEBP`).setURL(webp),
            ]
        )]})
    }
    
}