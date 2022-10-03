const { QuickDB } = require("quick.db");
const db = new QuickDB();
const Discord = require("discord.js")

module.exports = {
 name: "afk",
    aliases: ["a",  "afk"],
    desc: "Sirve para poner afk a un user xd",
    run: async (client, message, args, prefix) => {
      

    let razon = args.slice(1).join(" ");
    if(!razon) {
        razon = "No especificado";
    }
    const embed = new Discord.EmbedBuilder()
    .setTitle("AFK")
    .setDescription(`${message.author.tag} ahora estás AFK por ${razon}`)
    .setThumbnail(message.author.displayAvatarURL());

    await db.set(`${message.author.id}-afk`, razon);

     message.channel.send({ embeds: [embed]});
    }
}
