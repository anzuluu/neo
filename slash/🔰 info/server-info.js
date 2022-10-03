const { EmbedBuilder, SlashCommandBuilder, ChannelType } = require("discord.js")
const { stripIndent } = require('common-tags')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("server-info")
        .setDescription("Muestra la información del servidor."),

    async execute(client, interaction) {
        const User = interaction.guild.members.cache.filter(member => !member.user.bot).size;
        const Bots = interaction.guild.members.cache.filter(member => member.user.bot).size;
        const Text = interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildText).size;
        const Voice = interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildVoice).size;
        const Category = interaction.guild.channels.cache.filter(channel => channel.type == ChannelType.GuildCategory).size;
        const Stage = interaction.guild.channels.cache.filter(channel => channel.type == ChannelType.GuildStageVoice).size;
        const Channel = Text + Voice + Category + Stage
        const Emoji = interaction.guild.emojis.cache.size;
        const Roles = interaction.guild.roles.cache.size;

        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle(`Información del servidor`)
                    .setDescription(stripIndent`
      **Nombre** : ${interaction.guild.name}
      **ID** : ${interaction.guild.id}
      **Owner** : ${await interaction.guild.fetchOwner().then(m => m.user)}
      **Miembros** : ${interaction.guild.memberCount} [${User} Usuarios | ${Bots} Bots]
      **Emojis** : ${Emoji}
      **Roles** : ${Roles}
      **Canales** : ${Channel} [${Text} Texto | ${Voice} Voz | ${Category} Categorías | ${Stage} Stage]
      **Creado el** : <t:${parseInt(interaction.guild.createdTimestamp / 1000)}:F>
      `)
                    .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                    .setFooter({ text: `${client.user.username}.`, iconURL: client.user.displayAvatarURL() })
                    .setColor("DarkButNotBlack")
                    .setTimestamp()
            ]
        })
    }
}