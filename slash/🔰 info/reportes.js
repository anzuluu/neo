const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("bug") //nombre del comand
    .setDescription("Envia un bug/error a los Owners.")
    .addStringOption(option => option.setName("bug").setDescription("El Bug/Error que deseas enviar.").setRequired(true)),

    execute: async (client, interaction) => {
        const error = interaction.options.getString("bug")
        interaction.reply("✅ `|` Bug enviado correctamente")
        
        const embed = new EmbedBuilder()
        .setTitle(`Nuevo Bug`)
        .setDescription(`El usuario ${interaction.user.tag} Envío un nuevo Bug/Error:


Bug: ${error}`)
        .setColor("Red")
        .setTimestamp()
        
        client.channels.cache.get("1023320095583375441").send({embeds: [embed], content: "<@&1022922867224088697>"})
    }
 }