const { EmbedBuilder, PermissionsBitField, ChannelType } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dado")
    .setDescription("Tira un dado aleatorio"),
    execute: async(client ,interaction) => {
        const dados = ['1', '2', '3', '4', '5', '6']
        
        const dadosFinal = dados[Math.floor(Math.random() * dados.length)]
        
        interaction.reply(`**🎲 Tu número es: ${dadosFinal}**`)
    }
}