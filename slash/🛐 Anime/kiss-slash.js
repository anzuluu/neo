const Discord = require("discord.js")
const { EmbedBuilder, SlashCommandBuilder, ChannelType } = require("discord.js")



module.exports = {
   data: new SlashCommandBuilder()
        .setName("kiss")
        .setDescription("Besa a tu Amorcito <3"),

   async run(client, interaction){
   
   interaction.reply("Bot en Matenimiento / No ejecutar este comando")
   
   
   }
}
   