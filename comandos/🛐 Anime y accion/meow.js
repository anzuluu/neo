const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "cat",
    alias: ["gato", "gatito"],

    run: async (client, message, args) => {
const array = ["https://cdn.discordapp.com/attachments/1013475919177973891/1019868166240870450/desconocido.jpeg", "https://images-ext-2.discordapp.net/external/SpAMRN8rPIaUlKNzByGF7u8SIZgxEWEqzWYdErkkSuk/https/nekocdn.com/images/j-sxzdqI.jpeg", "https://images-ext-2.discordapp.net/external/4E_V9HREoTSN8_pTpUnOoperLjeCW-KdDn26o2wzT5I/https/nekocdn.com/images/CwsQjnrs.jpeg", "https://images-ext-2.discordapp.net/external/FxXU4SO-PqoM9JwkJHH77vO25BysZc7EJmSlrHfxTLQ/https/nekocdn.com/images/EVAj19TT.jpeg", "https://images-ext-2.discordapp.net/external/MksSvW2ibP9Shksk8oHKAF4jl7blvg2y6xu8gKyIeAI/https/nekocdn.com/images/EvUxPttp.jpeg", "https://images-ext-2.discordapp.net/external/EM-8tHqVbQLs8Jc75yVCuRbLxrbstjo-8TVQRmCviwY/https/nekocdn.com/images/odkGCJQr.jpeg", "https://images-ext-2.discordapp.net/external/PJ_MbfyzQU5XaJgXhpBoxxp2pf8SIMRgIQE0801hQmI/https/nekocdn.com/images/N-LpSnEh.jpeg", "https://images-ext-2.discordapp.net/external/UBImjwxtvQZkq3NaOgwelSB_dVGKB4YKwQty_QntNqk/https/nekocdn.com/images/MZH2E9ns.jpeg", "https://images-ext-2.discordapp.net/external/PQur42Q1J_M5Ir9cuP3GK8WAJoT6xoRnR2x3Mlxntto/https/nekocdn.com/images/4Xlx7wN7.jpeg", "https://images-ext-2.discordapp.net/external/y-AIk7FnisDa4iOqzoN1pTB6SjEhS1ZOeC8iYymOHKc/https/nekocdn.com/images/EsTS8XwK.jpeg", "https://images-ext-2.discordapp.net/external/HEvvuGmFJM0zp1IlY6_B7PmvTlZIPXjWumLMj6gb9yE/https/nekocdn.com/images/4hmeQGSS.jpeg", "https://images-ext-1.discordapp.net/external/k4f9mylM3U5raznZorUTLhInNNueDgDltI0rYx4BFhw/https/nekocdn.com/images/KlUvuL2x.jpeg", "https://images-ext-2.discordapp.net/external/PQur42Q1J_M5Ir9cuP3GK8WAJoT6xoRnR2k4f9mylM3U5raznZorUTLhInNNueDgDltI0rYx4BFhwx3Mlxntto/https/nekocdn.com/images/4Xlx7wN7.jpeg", "https://images-ext-1.discordapp.net/external/wlYoLUnWOLmndG6yXFmmG3b6I7GKC-J1NUaY1uYJzXA/https/nekocdn.com/images/Dq4EF-_U.jpeg", "https://images-ext-2.discordapp.net/external/Q8VmaWx_dSA8cL1Mi5r1KsnPRzUifPry0bwX1dbwg28/https/nekocdn.com/images/wfB9E51Z.jpeg", "https://images-ext-1.discordapp.net/external/FNuxlCHbNTa3tGUBIn7Mfh8a0qE3e5v3TodsF5_Yx-M/https/nekocdn.com/images/N4mH_hnQ.jpeg",] //hacemos un array con todas las posibles respuestas

const embed = new Discord.EmbedBuilder()

        .setTitle(`**Mira que hermoso gato ${message.author.tag}**`)
        .setColor("Red")
        .setImage(`${array[(Math.floor(Math.random() * array.length))]}`)
        .setTimestamp()
        .setFooter({text:"meow 😸"})
      
        message.channel.send({ embeds: [embed] })
      
 //Aquí enviamos un mensaje con la posible respuesta dentro del array  
    }
}