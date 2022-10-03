const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("servericon") //nombre del comando
    .setDescription("Mira el ícono del servidor."),
    
    execute: async (client, interaction) => {

        const svicon = new EmbedBuilder()
            .setAuthor({ name: "Icono:", iconURL: interaction.guild.iconURL({ dynamic: true }) })
            .setImage(interaction.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor("Blue")
            .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })

            .setTimestamp()

        interaction.reply({ embeds: [svicon], content: `**__Icono del servidor__ ( \`${interaction.guild.name}\` )**`})

    }
}