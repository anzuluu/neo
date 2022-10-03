const Discord = require("discord.js");
const { images, gifs } = require('mediacord');
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "neko",
    aliases: ["nk", "nekoo"],

    run: async (client, message, args) => {
const url = await images.sfw.neko(); //hacemos que url sea valido valido para que el bot mande la foto
const embed = new Discord.EmbedBuilder()

        .setTitle(`nya nya chica neko >-<`)
        .setColor("Random")
        .setImage(url)
        .setTimestamp()
      
        message.channel.send({ embeds: [embed] })
      
 }
}