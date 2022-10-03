const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName("avatar-bot")
  .setDescription("Cambia el avatar del bot.")
  .addStringOption((option) => option.setName('enlace').setDescription('Pon el enlace.').setRequired(true)),

  async execute(client, interaction) {

    const perms = interaction.user.id === "1020520338989260891"    
    
    if (!perms) return interaction.reply("Solo el creador del bot puede ejecutar este comando")

 const avatarurl = interaction.options.getString('enlace')

client.user.setAvatar(avatarurl)
  
  interaction.reply({ content: '¡Avatar cambiado! \n\n Nuevo avatar: \n' + avatarurl })
  }
}