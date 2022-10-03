const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "baile",
    alias: ["dance"],

    run: async (client, message, args) => {
const array = ["https://cdn.discordapp.com/attachments/1021531208540229642/1021872250380636270/Sii.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021872149197242388/cute-anime-dancing.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021872107585544212/dancinganime-anime.gif", "https://cdn.discordapp.com/attachments/1021531208540229642/1021872092876128316/dance-anime-cool.gif", 
"https://cdn.discordapp.com/attachments/1021531208540229642/1021872050761121972/dance-girl.gif",]

const embed = new Discord.EmbedBuilder()

        .setTitle(`**${message.author.username} se puso a bailar**`)
        .setColor("Red")

        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
      
        message.channel.send({ embeds: [embed] })
      

    }
}