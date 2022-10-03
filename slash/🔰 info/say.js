const { SlashCommandBuilder } = require("discord.js")
const { EmbedBuilder } = require("discord.js")
const Discord = require("discord.js")

// Creamos la data
    const data = new SlashCommandBuilder()
    .setName("say")
    .setDescription("Di un texto como el bot")
    .addStringOption(option => option .setName("mensaje").setDescription("Mensaje a decir").setRequired(true));// Creamos la opcion

    //Exportamos modulos
    module.exports = {
     async execute(client, interaction){
                    
        const text = interaction.options.getString("mensaje") //Requerimos el texto
         
        interaction.reply({ content: `${text}` }) // Enviamos el mensaje
    }, data // Y al final exportamos la data.
}